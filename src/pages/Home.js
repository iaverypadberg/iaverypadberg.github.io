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
            <h1 className='font-heading text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-6xl'>isAAc pAdberg</h1>
            <div className='bg-profile bg-cover rounded-full h-32 w-32 mt-5 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:hidden' />
            <h2 className='hidden lg:flex lg:text-2xl font-main mt-5'>Trees that are slow to grow bear the best fruit.</h2>
            <div className='hidden lg:flex flex-row items-center justify-between lg:h-fit w-4/5'>
                <Link to='/professional-exp' className='flex flex-col justify-center items-center bg-runner bg-cover bg-right my-10 lg:h-96 lg:w-56 hover:opacity-80 '>
                    <p className='font-main text-4xl text-white text-center'>Professional Experience</p>
                </Link>

                <Link to='/about' className='flex flex-col justify-center items-center bg-isaac-boat bg-cover bg-right my-10 lg:h-96 lg:w-56 hover:opacity-80 '>
                    <p className='font-main text-4xl text-white text-center'>About Me</p>
                </Link>

                <Link to="/projects" className='flex flex-col justify-center items-center bg-moon bg-cover bg-center my-10 lg:h-96 lg:w-56 hover:opacity-80 '>
                    <p className='font-main text-4xl text-white text-center'>Projects</p>
                </Link>
            </div>

            <div className='mx-8 lg:hidden'>
                <p className='font-body font-light text-2xl text-blue-900 text-center my-2 sm:text-2xl md:text-3xl lg:text-4xl'>Hello, I’m Isaac.</p>
                <ResponsiveTextHeader text={<p className='text-left'>I live in Burlington Vermont, where I work as an <Link to="/bonus" className='font-extralight hover:opacity-0 ease-in-out duration-300'>atypical</Link> Software Engineer.</p>} />
            </div>

            <Link to="/books" className='hidden lg:flex flex-col justify-center items-center bg-books bg-cover lg:h-32 lg:w-4/5 hover:opacity-80'>
                <p className='font-main text-4xl text-white text-center'>Writing & Books</p>
            </Link>

            <div className='flex flex-col items-center justify-start w-screen h-screen font-main font-thin lg:hidden'>

                <MainNavButton linkName="/professional-exp" text="Professional Experience" />
                <MainNavButton linkName="/about" text="About" />
                <MainNavButton linkName="/projects" text="Projects." />
                <MainNavButton linkName="/books" text="Books & Writing..." />

                <div className='flex flex-row justify-evenly w-screen my-8'>
                    <SmallNavButton linkName="/contact" text="Contact" />
                    <SmallNavButton linkName="/bonus" text="?" addStyle="hover:bg-blue-200" />
                </div>
            </div>
            <div className='hidden lg:flex flex-row justify-evenly w-screen my-8 font-main font-thin'>
                <SmallNavButton linkName="/contact" text="Contact" />
                <SmallNavButton linkName="/bonus" text="?" addStyle="hover:bg-blue-200" />
            </div>
        </div >

    )
}

export default Home