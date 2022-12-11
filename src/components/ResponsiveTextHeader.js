import React from 'react'

const ResponsiveTextHeader = (props) => {
    return (
        <div className='font-body text-xl sm:text-2xl md:text-3xl'>{props.text}</div>
    )
}

export default ResponsiveTextHeader