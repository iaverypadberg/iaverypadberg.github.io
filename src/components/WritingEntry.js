import React from 'react'

const WritingEntry = (props) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='m-5'>
                    <div className='font-body m-5'>
                        <h2 className='text-xl font-main underline underline-offset-4'>{props.section1Header}</h2>
                    </div>

                    <div className='mx-5 my-4 font-body text-m'>{props.body}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body1}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body2}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body3}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body4}</div>

                    <div className='font-body m-5'>
                        <h2 className='text-xl font-main underline underline-offset-4'>{props.section2Header}</h2>
                    </div>

                    <div className='font-body font-light m-5'>
                        <h2 className='text-lg font-main '>{props.section2SubHeader1}</h2>
                    </div>

                    <div className='mx-5 my-4 font-body text-m'>{props.body5}</div>

                    <div className='font-body font-light m-5'>
                        <h2 className='text-lg font-main '>{props.section2SubHeader2}</h2>
                    </div>

                    <div className='mx-5 my-4 font-body text-m'>{props.body6}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body7}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body8}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body9}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body10}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body11}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body12}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body13}</div>

                    <div className='font-body font-light m-5'>
                        <h2 className='text-lg font-main '>{props.section2SubHeader3}</h2>
                    </div>

                    <div className='mx-5 my-4 font-body text-m'>{props.body14}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body15}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body16}</div>
                    <div className='mx-5 my-4 font-body text-m'>{props.body17}</div>
                </div>
            </div>
        </div>
    )
}

export default WritingEntry
