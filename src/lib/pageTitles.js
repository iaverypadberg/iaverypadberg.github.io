// Titles for each route. document.title is set once in public/index.html, so
// without this every route would carry the same title: the browser tab, history
// entries and bookmarks would all read "Isaac Padberg", and so would every row
// in the GoatCounter dashboard, where the title sits beside the path.
//
// Keep this in sync with the routes in src/App.js.

export const SITE_NAME = 'Isaac Padberg'

// Route path -> page name. A route that is missing here falls back to the site
// name alone, which is also what the home page uses.
const TITLES = {
    '/about': 'About',
    '/professional-exp': 'Professional Experience',
    '/projects': 'Projects',
    // '/books': 'Books',
    // '/books/impatience': 'Impatience',
    '/contact': 'Contact',
    '/bonus': 'Bonus',
    '/skills': 'Skills',
    '/resume': 'Resume',
    // '/construction': 'Under Construction',
    // '/testing': 'Testing',
}

// Short name for the page, for the analytics dashboard: "Projects", not
// "Projects · Isaac Padberg", so the repeated suffix does not crowd out the
// part that distinguishes one row from the next. Empty for the home page and
// anything unrecognised, which the dashboard then shows by path alone.
export function pageName(path) {
    return TITLES[path] || ''
}

// Full title for the browser tab, which does want the site name.
export function documentTitle(path) {
    const name = pageName(path)
    return name ? `${name} · ${SITE_NAME}` : SITE_NAME
}
