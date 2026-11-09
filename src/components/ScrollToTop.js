import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets the scroll position to the top whenever the route changes, so a new
// page never opens part-way down where the previous page was scrolled to.
export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
