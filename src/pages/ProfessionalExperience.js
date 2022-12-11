import React from 'react'
import TextEntry from '../components/TextEntry'

const ProfessionalExperience = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center m-2'>
                <h1 className='font-heading text-2xl text-center'>Professional Experience</h1>
            </div>
            <TextEntry
                header="Machine Learning/Software Engineer"
                company="Deep Analytics"
                timeline="01/10/2022 --> Current"
                location="Montpelier, VT"
            />
            <p className='font-body text-m md:text-lg mx-5'>My time at Deep Analytics has been primarily spent working on a project aimed at deploying a computer vision model on a coral dev board. I've been lucky enough to have a hand in almost every part of this project. I started out with researching object detection models that would suit our needs and work well with the coral dev board. Once an apt model was selected, I was then in charge of setting up a training environment on one of our Lambda workstations. This was quite difficult as the model we chose(Google’s Spaghettinet model) was only compatible with Tensorflow 1, an older version of Tensorflow.
                <br />
                <br />
                The next important milestone I was in charge of was building our preliminary dataset. Built entirely from photos taken, cropped, and labeled by me, I was quite familiar with the contents of the dataset. Although the dataset was somewhat small, it was high quality. The training results reflected this, and it was here that I first developed a strong appreciation for building datasets with high quality data. One phrase my ML professor, Safwan,  said during my time in school became reality: “Garbage in, garbage out”.
                <br />
                <br />
                Once this model was trained, we wanted to see how it would perform on Google's newest Pixel 6. To test this model on the Pixel 6, I built a custom Android app which gave the user access to various ‘backend’ settings.
                <br />
                <br />
                Most of what I have done up until now was our preliminary stab at laying the groundwork for this project. In more recent months, I’ve been  working to better understand what characteristics our final dataset needs to have in order for our model to be successful in the field. Specifically, I’ve been analyzing the 2017 COCO dataset to create a sort of benchmark for us to work from.
            </p>
        </div>
    )
}

export default ProfessionalExperience