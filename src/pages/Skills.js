import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-no-repeat bg-contain divider'>
            <h1 className='font-heading text-2xl md:text-3xl text-center mt-8 pb-6'>SkillS & QualificationS</h1>
            <div className='flex flex-col items-start ml-5 md:ml-10 max-w-6xl'>
                <div className='flex flex-col items-start my-5 p-2'>
                    <h2 className='font-main text-xl md:text-2xl underline underline-offset-2'>Qualifications</h2>
                    <ul className='font-body list-disc ml-5'>
                        <li>B.S in Computer Science - University of Vermont(2021)</li>
                        <li>4.5 years working professionally as a software engineer</li>
                    </ul>
                </div>

                {/* <div className='flex flex-col items-start my-5 p-2'>
                    <h2 className='font-main text-xl md:text-2xl underline underline-offset-2'>Courses</h2>
                    <ul className='font-body list-disc ml-5'>
                        <li>Pandas Data Analysis Bootcamp</li>
                        <li>Web Development Bootcamp</li>
                    </ul>
                </div> */}



                <div className='flex flex-col items-start mt-5 p-2'>
                    <h2 className='font-main text-xl md:text-2xl underline underline-offset-2'>Skills</h2>

                    <div className='flex flex-col my-2 items-start p-2'>
                        <h2 className='font-main text-xl'>Computer Vision</h2>
                        <ul className='ml-5'>
                            <li className='p-2'>
                                <p className='font-bold'>Ultralytics & PyTorch</p>
                                <p className='px-2'>I've worked with Ultralytics and by that token, PyTorch, for the past 4 years. I'm deeply familiar with the inner workings of the library and how it can be leveraged to train & fine tune models for deployment in custom applications.</p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>Fiftyone</p>
                                <p className='px-2'>Managing image datasets was a headache, until Fiftyone came along. Fiftyone is a fully equipped python library used to QA, manipulate, version, tag, and export image datasets. This is my go to tool because its has an open source version which makes the grunt work so. much. easier.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col my-2 items-start p-2'>
                        <h2 className='font-main text-xl'>Edge Computing</h2>
                        <ul className='ml-5'>
                            <li className='p-2'>
                                <p className='font-bold'>Resource Constrained ML</p>
                                <p className='px-2'>Small computers deployed in the wild cannot run top shelf vision models. Much like normal person cannot run a 1 trillion parameter foundational model on their home desktop. This is why each release of a new model architecture usually comes in 3-7 different sizes, allowing the user to select the model size best suited to their use case. Depending on wheather or not the system needs to operate in real time will have a large impact on which model gets selected.</p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>Architectural design</p>
                                <p className='px-2'>Writing optimized to get the most out of the hardware is essential to a high performing edge device. Lots of the bells and whistles used for initial prototyping need to be removed or written in a way so that they reduce their footprint on the OS. Usually these edge devices run on limited battery power, making it all the more important to write optimized code. Rigorous testing at this step is key to making sure the device functions for an acceptable duration.</p>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col m-2 items-start p-2'>
                        <h2 className='font-main text-xl'>Website Design</h2>
                        <ul className='ml-5'>
                            <li className='p-2'>
                                <p className='font-bold'>Tailwind CSS</p>
                                <p className='px-2'>Tailwind is a front-end CSS library which allows users to place their styling code(css) in the same location as the underlying HTML it is styling. Prior to using Tailwind, I had very little interest in styling websites because using vanilla CSS was so unbearable. Now, after using Tailwind for 2 years, I thoroughly enjoy styling websites from scratch.</p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>ReactJS</p>
                                <p className='px-2'>I regularly use React to make websites because of its strong community, innate support of reusable components, and regular use in production code</p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>HTML</p>
                                <p className='px-2'>Hyper Text Markup Protocol defines the structure of web-pages. You need it to build websites, so I’ve naturally gained understanding of how to use it effectively.</p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>Figma</p>
                                <p className='px-2'>Figma is the best online design tool available. It excels at creating wire-frame mock-ups which are invaluable in the creation of websites.
                                    Designing a website in Figma is an upfront time investment that eliminates the haphazard designs most often found when designing and coding at the same time. Interacting with a well designed user interface is a rewarding experience, which is only be possible when the UI is designed with intention, instead of thrown in on the fly. I take extra care when designing UI’s so that the end users can enjoy themselves and feel understood.</p>
                            </li>
                        </ul>
                    </div>

                    {/* <div className='flex flex-col my-2 items-start p-2'>
                        <h2 className='font-main text-xl'>Data Analysis</h2>
                        <ul className='ml-5'>
                            <li className='p-2'>
                                <p className='font-bold'>Python</p>
                                <p className='px-2'>Python has been a part of my language pool since I started coding 6 years ago. I've recently been using it to perform data analysis on computer vision datasets.</p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>Pandas Library</p>
                                <p className='px-2'>Pandas is a Python library that is regularly used in all forms of data analysis. The core functionality of the pandas library lies in its ability to filter and manipulate DataFrames, which is basically the pandas equivalent of a Microsoft excel spreadsheet. I have a strong understanding of pandas because of an online Udemy course I’ve been taking. I enjoy using pandas, and hope to continue using it throughout my career.</p>
                            </li>
                        </ul>
                    </div> */}



                    <div className='flex flex-col m-5 items-start p-2'>
                        <h2 className='font-main text-xl'>Android App Development</h2>
                        <ul className='ml-5'>
                            <li className='p-2'>
                                <p className='font-bold'>Kotlin</p>
                                <p className='px-2'>I’ve designed, built and tested two android apps using kotlin. The purpose of these apps is to provide a user interface for a real time video feed while simultaneously running a computer vision model in the background. With a focus on object oriented programming, kotlin is similar to java, but has some added features which makes it a better development tool overall. </p>
                            </li>
                            <li className='p-2'>
                                <p className='font-bold'>Android Studios</p>
                                <p className='px-2'>Both of the apps I’ve made have been built in Android Studios. I regularly use the debug tool and app profiler, but still have yet to fully master the development environment. I particularly enjoy the direct connection between the xml layout files and their activity counterparts(which contain the real application logic). This connection allows for easy understanding and targeting of UI elements inside the applications logic.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className='bg-bot-dec bg-contain bg-no-repeat divider2 w-full' />
        </div>

    )
}

export default Skills