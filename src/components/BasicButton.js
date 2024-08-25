import React from 'react'
import { Link } from 'react-router-dom'

const BasicButton = (props) => {
    return (
        <Link to={props.to} className='flex flex-col items-center m-2 px-2 py-1 rounded-md bg-slate-400 hover:opacity-25'>
            <p>{props.text}</p>
        </Link>
    )
}

export default BasicButton