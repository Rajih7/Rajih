import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols 2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 flex'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-600'>
                    About
                </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi i'm Rajih, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>
                    I am a dedicated and innovative software developer with a profound passion for crafting robust, user-friendly, and high-performance applications. 
                    With a keen eye for detail and a deep understanding of the latest technological trends, 
                    I am excels in translating complex ideas into seamless, intuitive software solutions. Armed with a strong foundation in programming languages such as 
                    Java, Python, and JavaScript, I has a proven track record of delivering exceptional results in various projects. 
                    Their ability to work collaboratively in multidisciplinary teams and communicate technical concepts in a clear, 
                    concise manner sets them apart. A natural problem solver, I thrives in challenging environments, where they leverage their creativity and technical expertise 
                    to overcome obstacles and deliver outstanding software products. With a relentless drive for continuous learning and improvement, 
                    I am not only a proficient developer but also a valuable asset to any project, ensuring it reaches new heights of success.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
