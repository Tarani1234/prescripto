import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/assets/assets_frontend/logo.svg'
import profilePic from '../assets/assets/assets_frontend/profile_pic.png'
import dropdown from '../assets/assets/assets_frontend/dropdown_icon.svg'
import { useState } from 'react';

const Navbar = () => {

   const navigate = useNavigate();
   const[showMenu, setShowMenu] = useState(false);
   const[token, setToken] = useState(true);
   
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
       <img className='w-44 cursor-pointer' src={logo} alt=''/>
       <ul className='hidden md:flex items-start gap-5 font-medium'>
         <li className='py-1'><NavLink to="/"> HOME
         </NavLink><hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
         </li>
         <li className='py-1'><NavLink to="/doctors"> ALL DOCTORS
         </NavLink><hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
         </li>
         <li className='py-1'><NavLink to="/about"> ABOUT
         </NavLink><hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
         </li>
         <li className='py-1'><NavLink to="/contact"> CONTACT
         </NavLink><hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
         </li>
       </ul>
       <div className='flex items-center gap-4 '>
         {
           token ? 
           <div className='flex gap-2 items-center group relative cursor-pointer'>
              <img src={profilePic} alt='' className='w-10 h-10 rounded-full '/>
              <img src={dropdown} alt='' className='w-2.5'/>
               <div className='absolute top-0 right-0 pt-14 z-20 group hidden group-hover:block text-base font-medium text-gray-600'>
              <div className='flex flex-col gap-4 bg-stone-100 rounded  min-w-48 p-4 '>
               <p onClick={()=>navigate('/profile')} className='hover:text-black cursor-pointer'>Profile</p>
               <p onClick={()=> navigate('/myappoitment')} className='hover:text-black cursor-pointer'>My Appoitment</p>
               <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
               </div>
         </div>
           </div> :
          <button onClick={()=>navigate('/login')} className='px-8 py-3 bg-primary text-white border rounded-full font-light
          hidden md:block'>create account</button>
         }
       </div>
    </div>
  )
}

export default Navbar



