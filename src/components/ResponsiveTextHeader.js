import React from 'react'

const ResponsiveTextHeader = (props) => {
    return (
        <div className='font-body text-l sm:text-xl md:text-2xl'>{props.text}</div>
    )
}

export default ResponsiveTextHeader