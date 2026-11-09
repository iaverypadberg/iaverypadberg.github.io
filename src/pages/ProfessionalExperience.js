import React from 'react'
import { Link } from "react-router-dom"
import TextEntry from '../components/TextEntry'



const ProfessionalExperience = () => {

    return (
        <div className='flex flex-col bg-top-dec2 bg-no-repeat bg-contain divider2'>
            {/* mt-12 sm:mt-28 md:mt-36 lg:mt-48 */}
            <h1 className='font-heading text-xl md:text-2xl lg:text-4xl text-center font-bold text-off-white mt-4'>Professional Experience</h1>

            <TextEntry
                header="Machine Learning/Software Engineer"
                company="Deep Analytics"
                timeline="01/10/2022 to Current"
                location="Montpelier, VT"
            />
            <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='flex flex-col items-top mx-10 mt-0 font-body'>
                    <h2 className='font-main text-lg m-2 underline underline-offset-4'>Responabilities in a nutshell</h2>
                    <ul className='list-disc mx-5'>
                        <li>Collaborating with teamates to execute technical work</li>
                        <li>Training & Evalutating Computer Vision models with Pytorch</li>
                        <li>Building & iterating on datasets for Computer Vision models</li>
                        <li>Designing and implementing frontend interfaces</li>
                        <li>Building Android Apps from scratch</li>
                        <li>Optimizing ML model runtimes for inference on embedded platforms</li>
                    </ul>
                </div>
                <div className='width-full m-10 lg:mx-10 lg:my-0 rounded hover:opacity-80'>
                    <a href="https://www.deepanalyticsllc.com">
                        <img src={require("../assets/deep.png")} alt='' />
                    </a>
                </div>
            </div>
            {/* <div className='bg-divider-1 bg-cover bg-no-repeat divider2 w-full' /> */}
            <div className='flex flex-col mx-10 mt-0 font-body'>
                <h3 className='font-main text-lg my-2 underline underline-offset-4'>Brief Summary</h3>
                <p className='italic font-bold my-5 mx-3'>TLDR: I work on every step of building a computer vision system - from training/testing to deployment on edge devices. I design user interfaced and backend code. I build datasets and tools to navigate them effectively. </p>

                <p className='font-body text-m'>Deep Analytics is a small R&D startup based in Montpelier Vermont. I was hired as a Software Engineer, but have also spent a significant portion of my time in a Machine Learning/Data Science role.
                    <br />
                    <br />
                    Throughout my time at DA I’ve gained a strong appreciation for getting things done. I work closely with a team of skilled engineers to deliver on our projects and learn new skillsets. I generally work in 6 month long ‘sprints’ where I’ll focus heavily on one part of a project. Most often I work on building out high quality datasets and pipelines to optimize our computer vision models. Other times I work on the implementation side and design code and UI’s to give the models a place to be deployed to. My experience at DA has shown me that the development and deployment of computer vision models is a complex task demanding skills in both machine learning and software engineering, both of which I now feel comfortable in.
                    <br />
                    <br />
                </p>
            </div>
            <footer className='bg-bot-dec2 bg-contain bg-no-repeat divider2 w-full' />
        </div >
    )
}

export default ProfessionalExperience