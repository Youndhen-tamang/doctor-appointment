import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-wrap  bg-primary rounded-lg px-6 md:px-10 lg:px-20 ' >
      {/*left side*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl  md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appointment <br /> With Trustded Doctors </p>
        <div className='flex flex-col md:flex-row md:items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>Schedule your appointment with our extensive list of <br className='hidden sm:block' />trusted doctors hassel-free.</p>
        </div>
        <a href="#specility" className='flex items-center text-gray-600 px-8 py-3 gap-2 bg-white text-sm m-auto md:m-0 hover:scale-105 transotion-all duration-300 rounded-full '>
          Book Appointment<img className='w-3' src={assets.arrow_icon}/>
        </a>
      </div>

         {/*right side*/}
         <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute	 bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
         </div>
    </div>
  )
}

export default Header
