import React from 'react'
import { Link } from 'react-router-dom'

const MainLink = (props) => {
    return (
        <Link to={props.linkTo} className='font-body underline hover:text-blue-500 text-md sm:text-md md:text-lg lg:text-xl'>{props.text}</Link>
    )
}

export default MainLink