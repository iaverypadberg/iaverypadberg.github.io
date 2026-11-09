import React from 'react'
const About = () => {
    return (
        <div className='flex flex-col items-center justify-evenly bg-no-repeat bg-contain divider2'>

            <h1 className='font-heading text-l sm:text-xl md:text-2xl lg:text-4xl text-center font-bold text-black mt-4 mb-6 sm:mb-14'>Here's a little bit abOut me</h1>

            <div className='max-w-6xl'>

                <div className='mt-5 mx-10 font-body text-m font-normal'>
                    Vermont has been my home for as long as I can remember, and I love it here. I do my best to structure my free time around being outside and enjoying each of the wonderful seasons in VT so that when I’m old I won't have any regrets about being a couch potato. That time outdoors usually takes the form of a pickup soccer game, a bike ride, or the occasional trail run up one of Vermont's beautiful Green Mountains. To sustain such cardio intensive activities I’ve become something of a food fanatic.
                </div>

                <div className='mt-5 mx-10 font-body text-m font-normal'>
                    <span className='font-extrabold underline'>Learning</span> - I’ve made it a primary goal of mine to be a lifelong learner. There is nothing more satisfying than learning a new skill and putting it to good use. The various learning avenues available to us in the modern world is astounding. Recently, I’ve been taking violin lessons and exploring the field of psychoanalytic therapy.
                </div>

                <div className='mt-5 mx-10 font-body text-m font-normal'>
                    <span className='font-extrabold underline'>Team oriented </span> - Jumping into a substantial and complex task as a single person is heroic, but usually not the most effective strategy. Instead, approaching complex tasks as a team allows for different perspectives, thoughts, ideas, and insights that always lead to better results. I enjoy working with other people, so despite working on solo tasks, I regularly like to check in with peers to get their insight about the strengths and weaknesses of my approach.
                </div>

                <div className='mt-5 mx-10 font-body text-m font-normal'>
                    <span className='font-extrabold underline'>Focus & Discipline</span> - Two pillars of the human mind which are increasingly hard to find in such a distracted world. I take pride in living a disciplined and focused life. At work this helps me greatly, as I am not easily distracted, and can grind out difficult problems when the answer is not obvious.

                </div>
            </div>
            <div className='flex flex-row items-start justify-evenly m-5 font-body'>

                <div className='m-5'>
                    <h2 className='text-lg'>Here are some characteristics I’m cultivating within myself</h2>
                    <ul className='list-disc m-5'>
                        <li>Level-headed problem solving</li>
                        <li>Openness to new ways of looking at things</li>
                        <li>Enjoyment of learning</li>
                        <li>Thoughtfulness of those around me</li>
                    </ul>

                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center mx-5 my-10 w-5/6'>
                <div className='width-full rounded'>
                    <img src={require("../assets/about/profile.jpg")} alt='' />
                </div>

                <div className='width-full rounded'>
                    <img src={require("../assets/about/disc.jpg")} alt='' />
                </div>
                <div className='width-full rounded'>
                    <img src={require("../assets/about/cali.jpeg")} alt='' />
                </div>

                {/* <div className='width-full rounded'>
                    <img src={require("../assets/about/graduation.jpg")} alt='' />
                </div> */}

                <div className='width-full rounded'>
                    <img src={require("../assets/about/race.jpg")} alt='' />
                </div>
                <div className='width-full rounded'>
                    <img src={require("../assets/about/irr.jpg")} alt='' />
                </div>
                <div className='width-full rounded'>
                    <img src={require("../assets/about/overland.jpg")} alt='' />
                </div>

            </div>
            <footer className='bg-bot-dec3 bg-contain bg-no-repeat divider2 w-full' />
        </div>
    )
}
export default About