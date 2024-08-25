import React from 'react'


const Contact = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center m-2'>
                <h1 className='font-heading text-3xl text-center m-2'>Lets Talk!</h1>
                <div className='font-body text-center text-xl m-5'>
                    <p className='text-2xl'>I’m always open to meeting new people and discussing project or business ideas.</p>
                    <div className='flex flex-col items-center'>
                        <img src={require("../assets/curious.jpg")} alt="Image of a curious alpaca" className='w-4/5 md:w-3/5 lg:w-2/5 my-5' />
                    </div>
                    <p className='font-light'>If you would like to meet, have a question, or would just like to send some spam,
                        you can email me at: </p>
                    <p className='m-5 text-xl '>iaverypadberg@gmail.com</p>

                    <p className='font-light m-5'>Expect a response within 2-3 days.</p>

                    <p className='text-xl font-light'>Alternatively, contact me through <a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/isaac-padberg-796a4b196/">LinkedIn</a>.</p>


                </div>
            </div>
        </div >
    )

}

export default Contact