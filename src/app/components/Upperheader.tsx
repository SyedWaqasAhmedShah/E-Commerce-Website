import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { TbUser } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

//Upperheader
const Upperheader = () => {
  return (
    <div className='flex w-auto h-[44px] bg-[#7E33E0]'>
      <span className='text-white ml-48 mt-3'>
        <MdMailOutline />
        </span>
      <span className='text-white ml-1 mt-2'>mhhasanul@gmail.com
        
      </span>
      <span className='text-white ml-10 mt-3'>
        <BiPhoneCall />
        </span>
      <span className='text-white ml-1 mt-2'>
        (12345)67890
        </span>
        
        <div className='flex mx-60 gap-6'>
            
      <select className='bg-[#7E33E0] text-white'>
        <option value="english">English</option>
      </select>

      <select className='bg-[#7E33E0] text-white '>
        <option value="usd">USD</option>
      </select>

      <span className='text-white mt-[10px] flex'>
        Login
        <span className='text-xl'><TbUser /></span>
      </span>

      <span className='text-white mt-[10px] flex'>
        Wishlist
        <span className='ml-1 mt-1'><FaRegHeart /></span>
      </span>
      <span className='text-white mt-3 ml-2 text-xl'>
      <FiShoppingCart />
      </span>
      </div>



</div>

  )
}

export default Upperheader

