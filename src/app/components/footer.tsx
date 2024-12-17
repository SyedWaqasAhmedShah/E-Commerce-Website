import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <div className='bg-[#EEEFFB]'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      
      <a className="flex title-font font-bold items-center md:justify-start justify-center text-[#000000]">
        <span className="ml-[70px] text-xl">Hekto</span>
      </a>
      
      <div className="flex flex-row items-center mt-3 ml-[70px]">
  <input
    type="text"
    id="hero-field"
    name="hero-field"
    className="w-[200px] bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-black text-base outline-none text-gray-700 leading-8 transition-colors duration-200"
  />
  <div className="">
    <div className="flex justify-center items-center w-[100px] h-8 bg-[#FB2E86] text-white cursor-pointer">
      <p>Sign Up</p>
    </div>
  </div>
</div>




<div className=" mt-7 ml-16 text-[#8A8FB9]">
  <p className="mt-3 text-sm">Contact Info</p>
  <span className="whitespace-nowrap">
    17 Princess Road, London, Greater London NW1 8JR, UK
  </span>
</div>


      
    </div>
    <div className="flex-grow gap-12 flex flex-wrap md:pl-20  md:mt-0 mt-10 ml-[200px] text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-[#000000] tracking-widest text-sm mb-6">
        Catagories
        </h2>
        <nav className="list-none">
  <li>
    <p className="text-[#8A8FB9] whitespace-nowrap">Laptops & Computers</p>
  </li>
  <li>
    <a className="text-[#8A8FB9] whitespace-nowrap">Cameras & Photography</a>
  </li>
  <li>
    <a className="text-[#8A8FB9] whitespace-nowrap">Smart Phones & Tablets</a>
  </li>
  <li>
    <a className="text-[#8A8FB9] whitespace-nowrap">Video Games & Consoles</a>
  </li>
  <li>
    <a className="text-[#8A8FB9] whitespace-nowrap">Waterproof Headphones</a>
  </li>
</nav>

      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-[#000000] tracking-widest text-sm mb-3">
        Customer Care
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">My Account</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Discount</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Returns</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Orders History</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-[#000000] font-bold tracking-widest text-sm mb-3">
        Pages
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Blog</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Browse the Shop</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Category</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Pre-Built Pages</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] whitespace-nowrap">WooCommerce Pages</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-white">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
      <p className="text-gray-500 text-sm text-center sm:text-left ml-[250px]">
      ©Webecy - All Rights Reserved 
      </p>
      <span className="inline-flex sm:ml-auto mr-[250px] gap-3">
        <a className="text-[#151875]">
        <FaFacebook />
        </a>
        <a className="text-[#151875]">
        <AiFillInstagram />
        </a>
        <a className="text-[#151875]">
        <FaTwitter />
        </a>
        
        
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default footer