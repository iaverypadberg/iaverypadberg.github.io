import React from 'react'
import ResponsiveTextHeader from '../components/ResponsiveTextHeader'


const Bonus = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-heading text-2xl m-5'>This is the bonus content page</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-5 mb-10 w-5/6'>
                <div className='width-full rounded'>
                    <img src={require("../assets/Osprey-1.jpg")} alt='' />
                </div>

                <div className='width-full rounded'>
                    <img src={require("../assets/Osprey-2.jpg")} alt='' />
                </div>

                <div className='width-full rounded'>
                    <img src={require("../assets/Osprey-3.jpg")} alt='' />
                </div>

                <div className='width-full rounded'>
                    <img src={require("../assets/bird2.jpg")} alt='' />
                </div>

                <div className='width-full rounded'>
                    <img src={require("../assets/fisher-bird-1.jpg")} alt='' />
                </div>

                <div className='width-full rounded'>
                    <img src={require("../assets/fisher-bird-2.jpg")} alt='' />
                    <img src={require("../assets/fisher-bird-3.jpg")} alt='' />
                </div>

                {/* <div className='width-full rounded'>
                    <img src={require("../assets/fisher-bird-3.jpg")} alt='' />

                </div> */}
                {/* <div className='width-full rounded'>
                    <img src={require("../assets/Osprey-4.jpg")} alt='' />

                </div> */}
            </div>
        </div>
    )
}

export default Bonus