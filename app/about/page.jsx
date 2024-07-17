import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full pt-24'>
            <h1 className='mb-10 text-4xl font-bold text-center'>About Me</h1>
            <div className='flex md:flex-row flex-col md:space-x-5 md:h-[610px] justify-center space-y-4 md:space-y-0 w-full items-center'>

                <div className=' h-full w-[350px] bg-white'>
                    <img src="lais.png" />
                    <div className=' text-black flex flex-col space-y-2 text-center p-5'>
                        <h6 className='font-bold'>Me</h6>
                        <div>Hi there! My name is Lais. I am a creative developer and hope to change the technology world with my designs.</div>
                    </div>


                </div>

                <div className=' h-full w-[350px] bg-white'>
                    <img src="photo2.jpeg" />
                    <div className=' text-black flex flex-col space-y-2 text-center p-5'>
                        <h6 className='font-bold '>Hobbies</h6>
                        <div>Many of my hobbies include: Traveling the world, hiking, doing outside activities.</div>
                    </div>


                </div>

                <div className=' h-full w-[350px] bg-white'>
                    <img src="photo1.jpg"/>
                    <div className=' text-black flex flex-col space-y-2 text-center p-5'>
                        <h6 className='font-bold'>Education</h6>
                        <div>I am a student majoring in computer science. My concentration is in the cybersecurity field. I would love to work in a big company</div>
                    </div>


                </div>
            </div>
        </div>
         
    )
}

export default page