// GoatCounter's count.js fires once per full page load and strips the URL hash
// when it computes a path. This site uses HashRouter, so left to itself every
// route reports as "/" and client-side navigation is never recorded at all.
//
// The snippet in public/index.html therefore sets `no_onload` to suppress the
// automatic pageview, and each route change is reported through here instead.

const POLL_MS = 100
const MAX_ATTEMPTS = 50 // stop after ~5s; count.js is likely blocked

const isReady = () => Boolean(window.goatcounter && window.goatcounter.count)

// count.js is loaded async, so it is often still in flight when React first
// mounts. Queue that initial pageview until it lands rather than dropping it,
// but give up instead of polling forever if the script never arrives.
function whenReady(fn) {
    if (isReady()) {
        fn()
        return
    }

    let attempts = 0
    const timer = setInterval(() => {
        if (isReady()) {
            clearInterval(timer)
            fn()
        } else if (++attempts > MAX_ATTEMPTS) {
            clearInterval(timer)
        }
    }, POLL_MS)
}

// `path` is the in-app route (e.g. "/projects"), not location.pathname.
// `title` is the page name shown beside the path in the dashboard; count.js
// would otherwise read document.title at the moment the hit is sent, which is
// the same string on every route unless it is passed explicitly.
export function countPageview(path, title) {
    whenReady(() => window.goatcounter.count({ path, title }))
}
