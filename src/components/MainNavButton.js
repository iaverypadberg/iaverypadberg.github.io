import React from 'react'
import { Link } from 'react-router-dom'

const MainNavButton = (props) => {
    return (
        <Link to={props.linkName} className='flex flex-col items-center justify-center text-3xl w-5/6 h-fit sm:text-4xl my-8 p-3 bg-slate-300 hover:bg-slate-400 ease-in-out duration-300'>{props.text}</Link>
    )
}

export default MainNavButton