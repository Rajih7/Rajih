import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import img from '../assets/pic.jpg';

export const Home = () => {
  return (
    <section name='home' className='w-full h-screen bg-[#0a192f]'>       
     {/* Conatiner */}
        <div className='max-w-[1000px] mx-auto px-1 flex flex-col justify-center h-full'>
            <p className='text-amber-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rajih N</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[900px]'>I am a results-driven software developer with a strong foundation in multiple programming languages and a keen eye for detail. 
            My passion lies in crafting clean, efficient code and developing innovative applications that solve real-world problems.</p>
        <div><Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-900 hover:border-amber-900'>Explore My Works
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
            </span>
            </button></Link>
        </div>
        <img src={img} width={290} height={290} className='hidden absolute md:flex rounded-full border-2 right-10 p-1 border-blue-900 img_glow' alt=''/>
        </div>
    </section>
  )
}
