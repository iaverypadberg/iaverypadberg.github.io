import React from 'react'

const ProjectCard = (props) => {

    const hasLeft = props.imageTitle || props.image;
    const rightTitle = props.videoTitle || props.imageTwoTitle;
    const hasRight = rightTitle || props.video || props.imageTwo;

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mx-5 my-2 max-w-6xl'>
                    <div className='font-body font-light mx-5 my-2'>
                        <h2 className='text-xl font-main underline underline-offset-4'>{props.header}</h2>
                        <h3 className='text-md'>{props.date}</h3>
                        <h4 className='text-blue-700 hover:underline'><a href={props.github} target="_blank">{props.linkName}</a></h4>

                    </div>

                    <div className='mx-5  font-body text-m'>{props.body}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body1}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body2}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body3}</div>
                    <div className='mx-5 my-4 font-body text-m'>
                        <ul>
                            <li>{props.item1}</li>
                            <li>{props.item2}</li>
                            <li>{props.item3}</li>
                        </ul>
                    </div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body4}</div>

                    {/* Image stuff here */}
                    <div className='flex flex-col lg:flex-row'>
                        {hasLeft && (
                        <div className='flex flex-col items-center justify-center m-2'>
                            {props.imageTitle && (
                            <div className='text-center font-main md:text-lg font-extrabold m-2 italic'>
                                {props.imageTitle}
                            </div>
                            )}
                            {props.image}
                        </div>
                        )}
                        {hasRight && (
                        <div className='flex flex-col items-center justify-center m-2'>
                            {rightTitle && (
                            <div className='text-center font-main md:text-lg font-extrabold m-2 italic'>
                                {props.videoTitle}
                                {props.imageTwoTitle}
                            </div>
                            )}
                            {props.video}
                            {props.imageTwo}
                        </div>
                        )}
                    </div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body5}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body6}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body7}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body8}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard