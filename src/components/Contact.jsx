import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f]  p-4'>
        <div className='flex justify-center items-center'>
        <form method="post" action="https://getform.io/f/d535a785-1045-4817-a620-8a5b330eea57" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-xl'>Intrested in working together? Let's talk</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='bg-[#ccd6f6] p-2 my-4' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-amber-700 hover:border-amber-700 px-4 py-3 my-8 mx-auto flex items-center'>Contat Me</button>
        </form>
        </div>
        <ul className='md:hidden flex justify-center items-center'>
            <li>
                <a className=" w-full text-gray-300" href="https://github.com/Rajih7">
                <FaGithub size={30}/>
                </a>
            </li>
            <li>
                <a className=" w-full text-gray-300" href="https://www.linkedin.com/in/Rajih-N">
                <FaLinkedin size={30}/>
                </a>
            </li>
            <li>
                <a className=" w-full text-gray-300" href="mailto:rajih2001@gmail.com">
                <HiOutlineMail size={30}/>
                </a>
            </li>
            <li>
                <a className=" w-full text-gray-300" href="https://drive.google.com/file/d/13KcTVI4dp75TE3L1RKDpjDpwFr6ST0Ec/view?usp=sharing">
                <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Contact