import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    
    <div>
        
        <header className="text-[#0D0E43]">
    <div className="container ml-32  flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
      </a>
      <nav className="flex ml-10">
        
      <div className='mr-48'>
        <span>Hekto</span>
        </div>
        <a className="mr-5 hover:text-gray-900 text-[#FB2E86]"><select><option value="home">Home</option></select></a>
        <a className="mr-5 hover:text-gray-900">Pages</a>
        <a className="mr-5 hover:text-gray-900">Products</a>
        <a className="mr-5 hover:text-gray-900">Blog</a>
        <a className="mr-5 hover:text-gray-900">Shop</a>
        <a className="mr-5 hover:text-gray-900">Contact</a>
        
        <input type="text" id="hero-field" name="hero-field" className="w-[200px] bg-gray-100  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-black text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out ml-20"/>
  <div className='bg-[#FB2E86] text-white size-8 flex justify-center cursor-pointer'>
  <span className='mt-2'><IoSearchOutline /></span>
  </div>
  
      </nav>
    </div>
  </header>
  </div>
  )
}

export default Header