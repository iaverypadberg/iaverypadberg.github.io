import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-top-dec2 bg-no-repeat bg-contain divider2'>
            <h1 className='font-heading text-xl md:text-2xl lg:text-4xl text-center font-bold text-off-white mt-4 sm:mb-10 lg:mb-24 xl:mb-28'>PROJECTS</h1>

            <ProjectCard
                header='This Website'
                date='01/15/2023'
                imageTitle="A wire frame mockup of my website"
                image={<img src={require("../assets/figma.png")} alt='Figma Wireframe Mockup' className='w-full md:w-2/3' />}
                videoTitle="Responsive Design"
                video={<video className='w-full md:w-2/3' controls>
                    <source src={require("../assets/responsive_design_clip.mp4")} type="video/mp4" />
                </video>}
                body='This website is made using  React, Tailwind-css, html, and javascript. For the past year and a half I have been working on and off with this tech stack, mostly making mock up websites, portfolio pages, and task logger applications. For this website, I invested time up front to design each webpage in Figma. By designing each webpage beforehand, I was able to focus on just writing the website code, instead of designing and coding at the same time(a real nightmare). I use React because it enables me to make reusable components. I can make a single responsive component and use that throughout my website without worrying about rewriting code.'
            />

            <ProjectCard
                header={<a href='https://medium.com/@iaverypadberg/is-emotion-a-function-of-behavior-i-tried-to-find-out-for-myself-d9ee848c3806'>Behavior Tracking & Analysis</a>}
                date='06/10/2024'
                github='https://medium.com/@iaverypadberg/is-emotion-a-function-of-behavior-i-tried-to-find-out-for-myself-d9ee848c3806'
                linkName="Medium Post"
                body="A 6-month project aimed at investigating the connection between behavior and emotions. This project went really well and i'm excited that it concluded in a successful manner. I’ll be doing a follow up project as a sort of version 2 with improved data collection and analysis."
            />

        <ProjectCard
                header='User Authentication Using Json Web Tokens'
                date='08/18/2021'
                body={<p>Some web applications require users to login before they can access the full functionality of the webpage. I was interested in what the login process actually looked like, so I decided to build by own web app with a user login. I made a <a className="text-blue-400 hover:underline font-light" href="https://github.com/iaverypadberg/Basic-Passport-Auth" target="_blank">GitHub repository</a>  for this web app, where I wrote a detailed <a className="text-blue-400 hover:underline font-light" href="https://github.com/iaverypadberg/Basic-Passport-Auth/blob/master/README.md" target="_blank"> readme </a> about the project. In the readme I talk about the front-end and back-end builds, the passport library used for authentication, and a couple bugs that were such a pain. During this project I learned a lot about website security, http requests, the JWT lifecycle, and the overall user login/logout process.</p>}
                github='https://github.com/iaverypadberg/Basic-Passport-Auth'
                linkName="GitHub"
            />

            <ProjectCard
                header='UVM Mens Frisbee Website'
                date='01/29/2023'
                imageTitle="Wireframe mockup"
                image={<img src={require("../assets/uvm_frisbee_figma.png")} alt='uvm website video' className='w-full md:w-5/6' />}
                body="This is a website I've been working on when I have the time. Its built using React, Tailwind-CSS, HTML and Javascript. I also used figma to create wireframe mockups for this website, but have also been changing the design as I go. It's all hand built with no present components or UI layouts. In the future, I think that creating a libary of components I like to use would be an efficient use of my time."
            />


            <ProjectCard
                header='Learning Pandas for Data Analysis'
                date='01/15/2023'
                body={<p>One of my recent projects/tasks at Deep Analytics is in the realm of data analysis. Collecting, cleaning, structuring, graphing, and information extraction from the data are all key parts of this project. To help with this project and future projects, I’ve enrolled in a <a className='text-blue-400 hover:underline font-light' href='https://www.udemy.com/course/the-ultimate-pandas-bootcamp-advanced-python-data-analysis/'>Udemy course</a> aimed at learning the pandas library(python). It includes all of the tools required to clean, manipulate, restructure and filter data. While this library is most commonly used in the data science and machine learning world, its basic functionality is perfect for rudimentary data analysis projects.</p>}
                body1={<p>This 30 hr <a className='text-blue-400 hover:underline font-light' href='https://www.udemy.com/course/the-ultimate-pandas-bootcamp-advanced-python-data-analysis/'>online course</a> is not exhaustive, but has provided me with a solid foundation which I hope to build on in the future.</p>}
            />

            <ProjectCard
                header='COCO Dataset Analysis'
                date='12/15/2022'
                imageTitle="Right skewed distribution of bottle side lengths"
                image={<img src={require("../assets/COCO Images/bottle_zoomed.jpg")} alt='' className='w-full md:w-2/3' />}
                imageTwoTitle='9v battery predictions showing decreasing confidence scores as objects get smaller'
                imageTwo={<img src={require("../assets/COCO Images/9v_side_len_by_confidence.jpg")} alt='' className='w-full md:w-2/3' />}
                body="For a project at Deep Analytics, we are training a computer vision model that can detect objects accurately at range. All of our research and modifications are strictly on the dataset side as we do not modify the underlying structure of the CV models we use.  This study was led by myself with the guidance of Gregory Hewitt & Phil Stimic. "
                body1="To train a model that performs at distance we decided it might be best to work backwards and see if there were any existing models which performed well in this area. Lucky for us, there were! The Yolov5 model trained on the 2017 Common Objects in Context(COCO) dataset was able to detect a bottle at 50ft. We considered this impressive, so it became our new measure of success. To understand why this model performed so well on bottles at 50ft, we took a deep dive into the 2017 COCO dataset that was used to train this model. "
                body2="We choose to investigate the size of objects in the COCO dataset by analyzing the height and width of all bounding boxes in the dataset. It’s worth mentioning that we only analyzed the validation split of the dataset as it is much smaller, yet representative, of what is actually in the COCO train dataset."
                body3="By analyzing the height and width of the bounding boxes in the COCO dataset, we would be able to better understand the most common object size in the dataset. Object sizes are broken down into three categories:"
                item1="Small objects: area < 32^2"
                item2="Medium objects: 32^22 < area < 96^2"
                item3="Large objects: area > 96^2"
                body4="We found that most classes in the COCO dataset followed a distribution that looked something like the graph below."
                body5=""
                body6="As the above graph shows, there is a concentration of side lengths around 20-30 pixels. This was surprising at first, because when looking at the COCO dataset it does not appear to contain that many small objects. However, we ran multiple tests, reviewed the code that generated these graphs, and kept coming up with the same results. The high concentration of small objects in the COCO dataset confirmed our initial suspicion that to train a model to detect small objects, you need to train that model primarily on data containing small objects."
                body7={<p>This insight is one of the core principles of computer learning playing out in real time. The principle is: <span className='underline text-color-black'>Your data should be representative of the environment you would like your model to perform in.</span> Taking this for granted is pretty easy to do, but by investigating for ourselves we were able to understand at a more fundamental level the importance of this principle.</p>}
                body8="This understanding has informed our data collection & model training efforts, where we have already seen an increase in performance when detecting small objects."
            />

            <ProjectCard
                header='Training a Lightweight Object Detection Model'
                date='01/10/2023'
                imageTitle="Googles Spaghettinet Model"
                image={<img src={require("../assets/COCO Images/SpaghettiStats.png")} alt='Graph' className='w-full md:w-1/2' />}
                body='This object detection model is also the result of work for Deep Analytics. I spent 2 months learning about the various object detection models compatible with tensorflow before I was able to make a proper selection about which object detector to choose for our project. I settled on Google’s SpaghettiNet model as it is the fastest model to ever run on an edge device. Its execution time per 320x320 image with the correct TPU setup is ~1ms. Additionally, it is competitive with the prior MobilNetV2 model and the current Yolov5 model when it comes to mAP score on the coco dataset. The speed of execution and the strong mAP scores were the two reasons I decided to use this model. 
                    This is about where the smooth sailing ended however. Because of the specialized architecture used in the SpaghettNet model, Google’s engineers have not been able to port its training process from Tensorflow(TF) 1 to TF 2, so I was stuck training in TF 1.15. This became a headache and took me another two months to figure out how to get this thing from training, to exporting, and then finally converted to a .tflite model. I got some help from one of the TF engineers who had worked with SpaghettiNet in the past, and was able to figure out the whole pipeline.'
                github='https://github.com/iaverypadberg/Spaghettinet-Training'
                linkName="GitHub"
            />

            <ProjectCard
                header='Android Object Detection App'
                date='05/20/2022'
                body='I built this android app as a tool to help understand and evaluate the object detection models we trained(Google’s SpaghettiNet Model). It is a test app which allows the user to configure parameters such as: detection threshold, NMS iou threshold, number of predictions in a row before showing a detection, and the size of the tiles that the image is chopped into. By building in these configuration options for the user, I benefited greatly due to all of the extra learning and effort I had to put in to understand each configuration option and how to implement it. This app went through many iterations to reach its current state where it is being used by Deep Analytics to test our object detection models.'
            />
        </div>

    )
}

export default Projects