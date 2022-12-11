import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center m-2'>
                <h1 className='font-heading text-2xl text-center'>Code & Projects</h1>
            </div>
            <ProjectCard
                header='This Website'
                body='This website is made using  React, Tailwind-css, html, and javascript. For the past year and a half I have been working on and off with this tech stack, mostly making mock up websites, portfolio pages, and task logger applications. For this website, I invested time up front to design each webpage in Figma. By designing each webpage beforehand, I was able to focus on just writing the website code, instead of designing and coding at the same time(a real nightmare). I use React because it enables me to make reusable components. I can make a single responsive component and use that throughout my website without worrying about rewriting code.'


            />
            <ProjectCard
                header='Training a Lightweight Object Detection Model'
                body='This object detection model is also the result of work for Deep Analytics. I spent 2 months learning about the various object detection models compatible with tensorflow before I was able to make a proper selection about which object detector to choose for our project. I settled on Google’s SpaghettiNet model as it is the fastest model to ever run on an edge device. Its execution time per 320x320 image with the correct TPU setup is ~1ms. Additionally, it is competitive with the prior MobilNetV2 model and the current Yolov5 model when it comes to mAP score on the coco dataset. The speed of execution and the strong mAP scores were the two reasons I decided to use this model. 
                    This is about where the smooth sailing ended however. Because of the specialized architecture used in the SpaghettNet model, Google’s engineers have not been able to port its training process from Tensorflow(TF) 1 to TF 2, so I was stuck training in TF 1.15. This became a headache and took me another two months to figure out how to get this thing from training, to exporting, and then finally converted to a .tflite model. I got some help from one of the TF engineers who had worked with SpaghettiNet in the past, and was able to figure out the whole pipeline.'
                github='https://github.com/iaverypadberg/Spaghettinet-Training'
                linkName="GitHub"
            />
            <ProjectCard
                header='Android Object Detection App'
                body='I built this android app as a tool to help understand and evaluate the object detection models we trained(Google’s SpaghettiNet Model). It is a test app which allows the user to configure parameters such as: detection threshold, NMS iou threshold, number of predictions in a row before showing a detection, and the size of the tiles that the image is chopped into. By building in these configuration options for the user, I benefited greatly due to all of the extra learning and effort I had to put in to understand each configuration option and how to implement it. This app went through many iterations to reach its current state where it is being used by Deep Analytics to test our object detection models.'
            />

            {/* <ProjectCard header='Task Logger' body='The focus of this app was to build something that helped me to better understand the connection between front end websites and backend servers.' /> */}
            {/* <ProjectCard header='3D Printed Bottle Cages from Recycled Plastic' body="This project has not been started, but I'm very interested to work out the process and iterate on some designes." /> */}
        </div>

    )
}

export default Projects