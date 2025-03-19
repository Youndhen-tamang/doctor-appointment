import React, { useState } from 'react'
import { NavLink, useNavigate, useNavigation,Link } from 'react-router-dom'
import {assets} from '../assets/assets_frontend/assets'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] =useState(true);
  const [menu ,setMenu] = useState(false);

  return (
    <div className='flex  items-center justify-between text-sm py-4 border-b border-b-gray-300 '>
      <Link to={'/'}>  <img className='w-44 cursor-pointer' src={assets.logo} alt="" /></Link>
        <ul className='hidden md:flex gap-4 items-start font-medium'>
          <NavLink to='/'>
            <li  className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to={'/about'}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>

        {
          token === true?<div className='flex items-center cursor-pointer relative group gap-2 border'>
            <img className='w-8 rounded-full' src={assets.profile_pic}/>
            <img className='w-2.5 ' src={assets.dropdown_icon}/>
            <div className='absolute top-0 right-0 pt-14 font-medium text-base text-gray-600 z-20 hidden  group-hover:block' >
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
            <Link to='/my-profile'>   <p className='hover:text-black cursor-pointer'>My Profile</p></Link> 
           <Link to='/my-appointment'>   <p className='hover:text-black cursor-pointer'>My Appointment</p></Link>  
         <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>:<button onClick={()=>navigate('/login')} className='bg-primary text-white px-3 py-2 rounded-full font-medium '>Create Account</button>

        }
          <img src={assets.menu_icon} className='w-6 md-hidden' onClick={()=>setShowMenu(true)}/>

          <div className={`${showMenu === true?'fixed w-full ':'h-0 w-0'} md:hidden right-0 top-0 bottom-0  z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5  py-6'>
              <img className='w-36' src={assets.logo} alt=""  />
              <img className='w-7' src={assets.cross_icon} alt="" onClick={()=>setShowMenu(false)}/>
            </div> 
            <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium ' >
              <NavLink to='/' onClick={()=>setShowMenu(false)} className='w-full'> < p className={` w-full py-2 px-4 rounded  inline-block`} >HOME</p></NavLink>
              <NavLink to='/doctors' className='w-full' onClick={()=>setShowMenu(false)}> <p className={`w-full py-2 px-4 rounded  inline-block`} >ALL DOCTORS</p></NavLink>
              <NavLink to='/about' className='w-full' onClick={()=>setShowMenu(false)}> <p className={`w-full py-2 px-4 rounded  inline-block`} >ABOUT</p></NavLink>
              <NavLink to='/contact' className='w-full' onClick={()=>setShowMenu(false)}> <p className={` w-full py-2 px-4 rounded  inline-block`} >CONTACT</p></NavLink>
            </ul>
          </div>
        </div>
        
        
    </div>
  )
}

export default Navbar
