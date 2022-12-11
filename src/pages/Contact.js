import React from 'react'


const Contact = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center m-2'>
                <h1 className='font-heading text-3xl text-center m-2'>Contact Information</h1>
                <div className='font-body text-center text-xl'>
                    <p className='font-light'>You can reach me most reliably through my email. Expect a response within 1-2 days.</p>
                    <p className='m-5 text-xl '>iaverypadberg@gmail.com</p>

                    <p className='text-xl'>Alternatively, contact me through <a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/isaac-padberg-796a4b196/">LinkedIn</a>.</p>
                </div>
            </div>
        </div >
    )

}

export default Contact