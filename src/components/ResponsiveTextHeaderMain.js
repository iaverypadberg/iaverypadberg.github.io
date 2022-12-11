import React from 'react'

const ResponsiveTextHeaderMain = (props) => {
    return (
        <div className='font-main text-xl sm:text-2xl md:text-3xl'>{props.text}</div>
    )
}

export default ResponsiveTextHeaderMain