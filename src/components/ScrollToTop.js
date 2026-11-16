import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { countPageview } from '../lib/goatcounter'
import { documentTitle, pageName } from '../lib/pageTitles'

// Runs on every route change: resets the scroll position to the top, so a new
// page never opens part-way down where the previous page was scrolled to, sets
// the document title for the new page, and reports the pageview to GoatCounter.
// All three live here because this is the only component mounted inside
// HashRouter for the whole app, so it is the one place that sees every
// navigation. See src/lib/goatcounter.js for why route changes have to be
// reported by hand.
export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = documentTitle(pathname)
        countPageview(pathname, pageName(pathname))
    }, [pathname])

    return null
}
