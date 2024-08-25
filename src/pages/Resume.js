import React from 'react'
import resume_pdf from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div className='flex flex-col items-center h-screen'>
            <object data={resume_pdf} type="application/pdf" width="100%" height="100%">
                <p>Resume was unable to display.</p>
            </object>
        </div>
    )
}

export default Resume