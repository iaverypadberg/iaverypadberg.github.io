import React from 'react'

const TextEntry = (props) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='m-5'>
                    <div className='font-body font-light text-center'>
                        <h2 className='text-xl font-main'>{props.header}</h2>
                        <h3 className='text-m'>{props.company} {props.timeline}</h3>
                        <h3 className='text-s'>{props.location}</h3>
                    </div>
                    <div className='mx-5 my-3 font-body text-m'>{props.body}</div>
                </div>
            </div>
        </div>
    )
}

export default TextEntry