import React from 'react'
const About = () => {
    return (
        <div className='flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-center justify-start'>
                <h1 className='font-heading text-2xl m-10'>Some things you probably don't need to know but what the heck?</h1>
            </div>
            <div className='mt-5 mx-10 font-body font-normal'>In 2021 I received my undergraduate degree in computer science from the University of Vermont. I’ve lived in Vermont for my whole life, save a 6 month trip to Utah to be a ski bum and a semester abroad in Czech Republic's lesser known city Brno. I currently work at Deep Analytics, a small R&D firm based out of Montpelier VT. The nature of a small R&D firm requires its employees to be competent in a variety of areas. As such, I have picked up quite a few skills while working there.
            </div>
            <div className='mt-5 mx-10 font-body font-normal'>In my time away from work and the many responsibilities that come along with being a human, I like to get outside. Usually it's in the form of a pickup soccer game, a bike ride, or the occasional trail run up one of Vermont's beautiful green mountains. I enjoy photographing things that are in action. Birds flying, bikers zooming, cars flying…those types of things.</div>
            <div className='mt-5 mx-10 font-body font-normal'>In this first year out of school I tried moving to Mexico with ~$500 to my name and it didn’t work out too well. A friend and I thought that moving down there would grant us peace and quiet so that we could code our way building a software company, but we were greeted with obnoxious water trucks and 5am rooster wake up calls. I came back to the United States to arrive back in Burlington VT. Not really knowing what was to come next, I got hired at Deep Analytics in January of 2022 where I will continue to work for the foreseeable future.</div>
        </div>
    )
}
export default About