import React from 'react'
import ResponsiveTextHeader from '../components/ResponsiveTextHeader'

const Bonus = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-heading text-2xl m-5'>This is the bonus content page</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-5 h-screen w-5/6'>
                <img alt='' className='bg-france1 bg-cover h-96 w-96' />
                <img alt='' className='bg-france2 bg-cover h-96 w-96' />
                <img alt='' className='bg-france3 bg-cover h-96 w-96' />
                <img alt='' className='bg-france1 bg-cover h-96 w-96' />
                <img alt='' className='bg-france2 bg-cover h-96 w-96' />
                <img alt='' className='bg-france3 bg-cover h-96 w-96' />
                <img alt='' className='bg-france1 bg-cover h-96 w-96' />
                <img alt='' className='bg-france2 bg-cover h-96 w-96' />
                <img alt='' className='bg-france3 bg-cover h-96 w-96' />
            </div>
        </div>
    )
}

export default Bonus