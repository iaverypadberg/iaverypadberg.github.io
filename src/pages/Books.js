import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveTextHeaderMain from '../components/ResponsiveTextHeaderMain'
import MainLink from '../components/MainLink'
import BookCard from '../components/BookCard'
const Books = () => {
    return (
        <div className='flex flex-col items-center justify-evenly mb-10'>
            <div className='flex flex-col items-center justify-start'>
                <h1 className='font-heading text-2xl m-10'> Books that insipire me, and some of my own writing.</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <ResponsiveTextHeaderMain text="Writing" />
                <div className='m-2'>
                    <MainLink linkTo="/books/impatience" text="Impatience" />
                </div>
                {/* <div className='m-2'>
                    <MainLink linkTo="/construction" text="Meditation" />
                </div>
                <div className='m-2'>
                    <MainLink linkTo="/construction" text="Soccer maybe" />
                </div> */}
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='m-5'>
                    <ResponsiveTextHeaderMain text="Books" />
                </div>

                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-5/6'>

                    {/* This is where I left off. I want to add in a hover effect that allows you to see a quick book review by me.
I should probably start with making it look good for mobile phone though. Then move to the hover effect. */}
                    <BookCard
                        bookTitle='The seven spiritual laws of success'
                        author="Deepok Chopra"
                        review="This book is essential for a balanced development."
                        link='https://www.amazon.com/Seven-Spiritual-Laws-Success/dp/B0000548LZ/ref=sr_1_1?gclid=EAIaIQobChMIypH0o87v-wIVFa_ICh2axglVEAAYAiAAEgIumfD_BwE&hvadid=174223377746&hvdev=c&hvlocphy=9003006&hvnetw=g&hvqmt=e&hvrand=8205079622100441369&hvtargid=kwd-1137031232&hydadcr=24602_9648846&keywords=the+7+spiritual+laws+of+success&qid=1670694583&sr=8-1'
                        image=<img className='bg-seven-spiritual bg-cover h-96 w-96 ' />
                    />

                    <BookCard
                        bookTitle='Crucial Conversations'
                        author="Joseph Grenny * Kerry Patterson * Ron McMillan * Al Switzler * Emily Gregory"
                        review="Talking to people when the stakes are high is hard, but it doesn't have to be."
                        link='https://www.amazon.com/Crucial-Conversations-Tools-Talking-Stakes/dp/1260474186/ref=asc_df_1260474186/?tag=hyprod-20&linkCode=df0&hvadid=508977995883&hvpos=&hvnetw=g&hvrand=14075139142789779693&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9003006&hvtargid=pla-1267108559751&psc=1'
                        image=<img className='bg-crucial bg-cover h-96 w-96' />
                    />

                    <BookCard
                        bookTitle='A New Earth'
                        author="Eckart Tolle"
                        review=""
                        link='https://www.amazon.com/New-Earth-Awakening-Purpose-Selection/dp/0452289963/ref=asc_df_0452289963/?tag=hyprod-20&linkCode=df0&hvadid=312021238077&hvpos=&hvnetw=g&hvrand=4673740838243995971&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9003006&hvtargid=pla-451287783058&psc=1'
                        image=<img className='bg-a-new-earth bg-cover h-96 w-96' />
                    />
                </div>
            </div>

        </div>
    )
}
export default Books