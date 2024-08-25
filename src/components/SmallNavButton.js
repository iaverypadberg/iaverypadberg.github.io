import React from 'react'
import { Link } from 'react-router-dom'

const SmallNavButton = (props) => {
    return (
        <Link
            to={props.linkName}
            className='flex flex-row items-center justify-center bg-slate-300 sm:text-2xl p-4 w-1/5 hover:bg-slate-400 ease-in-out duration-300'>
            {props.text}
        </Link>
    )
}

export default SmallNavButton