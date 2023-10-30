import React from 'react'
import am from '../assets/AM.jpg'
import jl from '../assets/JL.jpg'
import se from '../assets/SE.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-amber-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        <div style={{ backgroundImage: `url(${jl})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider p-2'>
                JobLib
              </span><p className='p-2'>JobLib connects talented individuals with their ideal jobs, effortlessly bridging the gap between employers and job seekers.</p>
              <div className='pt-8 text-center'>
                <a href='https://0rvdg073ohhoufocggoafao.on.drv.tw/www.joblib.com/Home.html'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Launch
                  </button>
                </a>
                <a href='https://github.com/Rajih7/Joblib.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${am})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider p-2'>
                Artes Marciales
              </span>
              <p className='p-2'>   
                 Led the development and launch of a dynamic website that effectively 
                highlighted various martial arts styles and local institutes in Kerala.
                </p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/Rajih7/Artes-Marciales.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${se})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider p-2'>
                SexEdu
              </span><p className='p-2'>Conceptualized and executed a centralized application to
                  address gaps in sexual health education due to religious and
                  cultural barriers.Implemented user-friendly features allowing individuals to
                  consult with certified counselors, access expert advice, and
                  book appointments seamlessly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work