import React from 'react'

const ProjectCard = (props) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='m-5'>
                    <div className='font-body font-light text-center'>
                        <h2 className='text-xl font-main'>{props.header}</h2>
                        <h3 className='text-blue-400 hover:underline'><a href={props.github} target="_blank">{props.linkName}</a></h3>
                    </div>
                    <div className='mx-5 my-3 font-body text-m'>{props.body}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard