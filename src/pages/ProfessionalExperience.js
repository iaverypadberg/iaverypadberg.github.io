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
                    <h2 className='font-main text-lg m-2 underline underline-offset-4'>Responabilities in a Nutshell</h2>
                    <ul className='list-disc mx-5'>
                        <li>Collaborating with teamates to execute technical work</li>
                        <li>Training & Evalutating Computer Vision models with Tensorflow & Pytorch</li>
                        <li>Designing and implementing frontend interfaces</li>
                        <li>Performing dataset analysis</li>
                        <li>Building datasets for Deep Learning models</li>
                        <li>Building Android Apps from scratch</li>
                        <li>Exporting and optimizing ML models for inference on embedded platforms</li>
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
                <p className='italic font-bold my-5 mx-3'>TLDR: I train, test, and evaluate computer vision models for eventual deployment on a small edge computer. I analyze datasets to optimize them for the task at hand. I design and build user interfaces for both websites and android apps. </p>

                <p className='font-body text-m'>Deep Analytics is a small R&D startup based in Montpelier Vermont. I was hired as a Software Engineer, but have also spent a significant portion of my time in a Machine Learning/Data Science role. The project I work on is aimed at deploying a computer vision model on a <a className='text-blue-400 hover:underline font-light' target="_blank" href='https://coral.ai/products/dev-board'>Coral Dev Board</a>.
                    <br />
                    <br />
                    Throughout the project I’ve been in charge of selecting, training and testing various computer vision models to yield the best results. The primary model I’ve chosen to focus on is Google’s Spaghettinet object detection model. It’s fast, precise, and synergizes well with the <a className='text-blue-400 hover:underline font-light' target="_blank" href='https://medium.com/codex/tpu-on-a-phone-the-pixel-6-by-google-803eac656b5b'>Tensor Processing Unit(TPU)</a> inside the Coral Dev Board. Setting up a reliable training environment for this model was quite a hassle, but as a result, I’ve gained a strong understanding of environment configuration on linux machines.
                    <br />
                    <br />
                    Faced with an ever present need for more data, I was called upon to beef up our dataset. Although my contributions were relatively small, they were high quality. The training results reflected this, and it was here that I first developed a strong appreciation for high quality data. A phrase my ML professor had drilled into my head years prior came to life: “Garbage in, garbage out”. To further improve on our dataset, I worked to better understand what characteristics our dataset needs to have in order for our production model to be successful in the field. Specifically, I analyzed the 2017 COCO dataset to create a benchmark for us to work from.
                    <br />
                    <br />
                    Moving forward, there became a need to test our models on an Android phone. There were plenty of ready built phone apps for executing object detection models, but our’s required a custom setup where the 4k input frames were chopped into more easily consumable 320x320 tiles and fed to the algorithm. The development of this application was my responsibility. I designed, built, and tested an <Link className='text-blue-400 hover:underline font-light' to="/projects">Android App</Link> for the purpose of testing our trained models. This was done entirely in Android Studios using Kotlin. Fast forward to now, I’m currently building the production version of this app which must communicate with the Coral Dev Board via a reverse tether connection. This app is similar, but different because the users of it will be customers who expect a clean user interface and no bugs.
                </p>
            </div>
            <footer className='bg-bot-dec2 bg-contain bg-no-repeat divider2 w-full' />
        </div >
    )
}

export default ProfessionalExperience