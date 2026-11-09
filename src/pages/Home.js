import React from 'react'
import { Link } from "react-router-dom"
import MainNavButton from '../components/MainNavButton'
import SmallNavButton from '../components/SmallNavButton'
import ResponsiveTextHeader from '../components/ResponsiveTextHeader'
// sm 640
// md 768
// lg 1024
// xl 1280
// 2xl 1536
// Styles are applied once the screen size reaches the specified size. Otherwise, the smaller size styling applies
const Home = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-heading text-center text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-5xl'>
                <span className='text-rainbow-100'>i</span>
                <span className='text-rainbow-200'>s</span>
                <span className='text-rainbow-300'>a</span>
                <span className='text-rainbow-400'>a</span>
                <span className='text-rainbow-500'>c </span>
                <span className='text-rainbow-500'>p</span>
                <span className='text-rainbow-400'>a</span>
                <span className='text-rainbow-300'>d</span>
                <span className='text-rainbow-250'>b</span>
                <span className='text-rainbow-200'>er</span>
                <span className='text-rainbow-100'>g</span>
            </h1>
            <div className='bg-profile bg-cover rounded-full h-32 w-32 mt-5 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:hidden' />

            <div className='mt-5'>Hi! I'm Isaac. I'm after a full life and a better world.</div>
            <div className='hidden lg:flex flex-row items-center lg:h-fit w-4/5 z-10'>
                <Link to='/professional-exp' className='flex flex-col justify-center items-center bg-runner bg-cover bg-right my-10 lg:h-96 lg:w-1/3 ease-in duration-200 hover:opacity-90 hover:-translate-y-1'>
                    <p className='font-main text-4xl text-white text-center'>Professional Experience</p>
                </Link>

                <Link to='/about' className='flex flex-col justify-center items-center bg-isaac-profile2 bg-cover bg-right my-10 lg:h-96 lg:w-1/3 ease-in duration-200 hover:opacity-90 hover:-translate-y-1 '>
                    <p className='font-main text-4xl text-white text-center'>About Me</p>
                </Link>

                <Link to="/projects" className='flex flex-col justify-center items-center bg-moon bg-cover bg-center my-10 lg:h-96 lg:w-1/3 ease-in duration-200 hover:opacity-90 hover:-translate-y-1 '>
                    <p className='font-main text-4xl text-white text-center'>Projects</p>
                </Link>
            </div>


            <div className='mx-8 lg:hidden'>
                <p className='font-body font-light text-2xl text-blue-900 text-center my-2 sm:text-2xl md:text-3xl lg:text-4xl'>Hello, I’m Isaac.</p>
                <ResponsiveTextHeader text={<p className='text-left'>I live in Burlington Vermont, where I work as an <Link to="/bonus" className='font-extralight hover:opacity-0 ease-in-out duration-300'>atypical</Link> Software Engineer.</p>} />
            </div>

            <Link to="/skills" className='hidden lg:flex flex-col justify-center items-center m-5 bg-sugarbush bg-cover bg-center lg:h-32 lg:w-4/5 ease-in duration-200 hover:opacity-90'>
                <p className='font-main text-4xl text-white text-center z-10'>Skills & Qualifications</p>

            </Link>

            {/* <Link to="/books" className='hidden lg:flex flex-col justify-center items-center bg-books bg-cover lg:h-32 lg:w-4/5 ease-in duration-200 hover:opacity-90 '>
                <p className='font-main text-4xl text-white text-center'>Writing & Books</p>
            </Link> */}

            <div className='flex flex-col items-center justify-start w-screen h-screen font-main font-thin lg:hidden'>

                <MainNavButton linkName="/professional-exp" text="Professional Experience" />
                <MainNavButton linkName="/about" text="About" />
                <MainNavButton linkName="/projects" text="Projects." />
                <MainNavButton linkName="/books" text="Books & Writing..." />

                <div className='flex flex-row justify-evenly w-screen my-8'>
                    <SmallNavButton linkName="/contact" text="Contact" />
                    <SmallNavButton linkName="/resume" text="Resumé" addStyle="hover:bg-blue-200" />
                    <SmallNavButton linkName="/bonus" text="Bonus" addStyle="hover:bg-blue-200" />
                </div>
            </div>
            <div className='hidden lg:flex flex-row justify-evenly w-screen my-8 font-main font-thin'>
                <SmallNavButton linkName="/contact" text="Contact" />
                <SmallNavButton linkName="/resume" text="Resumé" addStyle="hover:bg-blue-200" />
                <SmallNavButton linkName="/bonus" text="Bonus" addStyle="hover:bg-blue-200" />
            </div>

            <h2 className='hidden lg:flex lg:text-2xl font-main mt-2 mb-5 italic'>Everyone takes the limits of his own vision for the limits of the world.</h2>
        </div>

    )
}

export default Home