import React from 'react'
import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  const chooseUs = [
    {
      heading:'Efficiency:',
      desc:'Streamlined appointment scheduling that fits into your busy lifestyle.'
    },
    {
      heading:'Convenience:',
      desc:'Access to a network of trusted healthcare professionals in your area.'
    },
    {
      heading:'Personalization:',
      desc:'Tailored recommendations and reminders to help you stay on top of your health.'
    }
    
  ]
  return (
    <div className='flex flex-col gap-12 items-center' >
      <p className='text-3xl font-light  mt-8 '>ABOUT <span className='font-medium'> US</span></p>
      <div className='flex flex-col md:flex-row flex-shrink-0 justify-around gap-12'>
         <div className='w-full border'>
         <img className=' w-full  h-full' src={assets.about_image} alt="" />
         </div>

        <div className='flex flex-col gap-8 text-md font-light mt-4  sm:text-sm md:text-md'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <p className='font-medium text-lg'>Our Vision</p>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>

      </div>

      <div className='mt-8 flex flex-col gap-8'>
        <p className='font-light text-2xl'>WHY <span className='font-medium'>CHOOSE US</span></p>

        <div className='flex flex-col md:flex-row'>
        {
          chooseUs.map((item,index)=>(
            <div key={index} className=' flex flex-col gap-3 border border-gray-300 px-12 py-8 cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out duration-400'>
              <p className='text-lg gray-text-400'>{item.heading}</p>
              <p className='text-sm '>{item.desc}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default About

