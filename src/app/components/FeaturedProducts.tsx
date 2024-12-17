import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-center text-4xl font-bold text-[#15104C] mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="shadow-2xl">
          <div className="h-[236px] flex justify-center items-center mb-4 bg-[#F6F7FB]">
            <Image
              src="/images/chair1.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          <h3 className="text-[#FB2E86] font-bold text-lg text-center">Cantilever chair</h3>
          <div className="flex justify-center mt-2 gap-1">
            <div className="h-[5px] w-[20px] rounded bg-[#05E6B7]"></div>
            <div className="h-[5px] w-[20px] rounded bg-[#F701A8]"></div>
            <div className="h-[5px] w-[20px] rounded bg-[#00009D]"></div>
          </div>
          <p className="text-sm text-[#15104C] mb-1 mt-4 text-center">Code - Y523201</p>
          <p className="text-[#15104C] font-bold text-lg mt-2 text-center">$42.00</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2E2EFF]">
          {/* Top Icons */}
          <div className="bg-[#F6F7FB] flex gap-2">
            <span className="text-[#2F1AC4] cursor-pointer"><FiShoppingCart /></span>
            <span className="text-[#1389FF] cursor-pointer"><FaRegHeart /></span>
            <span className="text-[#1389FF] cursor-pointer"><FaSearchPlus /></span>
          </div>

          {/* Chair Image */}
          <div className="h-[236px] flex items-center justify-center bg-[#F6F7FB] shadow-2xl relative">
            <Image
              src="/images/chair2.png"
              alt="Chair"
              width={170}
              height={170}
              className="object-cover -mt-20"
            />
            {/* View Details Button */}
            <button className="absolute bottom-[20px] bg-green-500 text-white px-4 py-1 rounded shadow-lg">
              View Details
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-1">
            <h3 className="text-white font-bold text-lg text-center">Cantilever chair</h3>
            <div className="flex justify-center mt-2 gap-1">
              <div className="h-[5px] w-[20px] rounded bg-[#05E6B7]"></div>
              <div className="h-[5px] w-[20px] rounded bg-[#F701A8]"></div>
              <div className="h-[5px] w-[20px] rounded bg-[#FFEAC1]"></div>
            </div>
            <p className="text-sm text-white mb-1 mt-4 text-center">Code - Y523201</p>
            <p className="text-white font-bold text-lg mt-2 text-center">$42.00</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-2xl">
          <div className="h-[236px] flex justify-center items-center mb-4 bg-[#F6F7FB]">
            <Image
              src="/images/chair3.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <h3 className="text-[#FB2E86] font-bold text-lg text-center">Cantilever chair</h3>
          <div className="flex justify-center mt-2 gap-1">
            <div className="h-[5px] w-[20px] rounded bg-[#05E6B7]"></div>
            <div className="h-[5px] w-[20px] rounded bg-[#F701A8]"></div>
            <div className="h-[5px] w-[20px] rounded bg-[#00009D]"></div>
          </div>
          <p className="text-sm text-[#15104C] mb-1 mt-4 text-center">Code - Y523201</p>
          <p className="text-[#15104C] font-bold text-lg mt-2 text-center">$42.00</p>
        </div>

        {/* Card 4 */}
        <div className="shadow-2xl">
          <div className="h-[236px] flex justify-center items-center mb-4 bg-[#F6F7FB]">
            <Image
              src="/images/chair4.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <h3 className="text-[#FB2E86] font-bold text-lg text-center">Cantilever chair</h3>
          <div className="flex justify-center mt-2 gap-1">
            <div className="h-[5px] w-[20px] rounded bg-[#05E6B7]"></div>
            <div className="h-[5px] w-[20px] rounded bg-[#F701A8]"></div>
            <div className="h-[5px] w-[20px] rounded bg-[#00009D]"></div>
          </div>
          <p className="text-sm text-[#15104C] mb-1 mt-4 text-center">Code - Y523201</p>
          <p className="text-[#15104C] font-bold text-lg mt-2 text-center">$42.00</p>
        </div>
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        <div className="h-[5px] w-11 rounded bg-[#F701A8]"></div>
        <div className="h-[5px] w-7 rounded bg-[#FEBAD7]"></div>
        <div className="h-[5px] w-7 rounded bg-[#FEBAD7]"></div>
        <div className="h-[5px] w-7 rounded bg-[#FEBAD7]"></div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
