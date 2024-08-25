import React from 'react'

const BookCard = (props) => {
    return (
        <div classname="flex flex-col items-center">

            <a href={props.link} target="_blank" className='group'>
                <div className='border-2 border-gray-500 hover:opacity-70 ease-in duration-200'>
                    {props.image}
                </div>

            </a>
            <div className='text-center font-main mt-2'>
                <p className='text-xl font-bold'>{props.bookTitle}</p>
                <p className='text-md font-extralight'>{props.author}</p>

                <p className='font-body border-b-2 border-indigo-200 m-2 pb-5 p-2'>{props.review}</p>
            </div>

        </div>
    )
}

export default BookCard