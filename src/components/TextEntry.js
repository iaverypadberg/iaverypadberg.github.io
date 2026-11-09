import React from 'react'

const TextEntry = (props) => {
    return (

        <div className='flex flex-col items-center mt-6 sm:mt-10'>
            <div className='m-3'>
                <div className='font-body font-light text-center'>
                    <h2 className='text-xl md:text-2xl font-main underline underline-offset-2'>{props.header}</h2>
                    <h3 className='text-m'>{props.company} | {props.timeline}</h3>
                    <h3 className='text-s'>{props.location}</h3>
                </div>
                <div className='mx-5 my-3 font-body text-m'>{props.body}</div>
            </div>
        </div>

    )
}

export default TextEntry