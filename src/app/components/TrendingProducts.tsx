import React from 'react';
import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-center text-4xl font-bold text-[#15104C] mb-8">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="p-4 bg-white shadow-2xl">
          <div className="h-[250px] flex justify-center bg-[#F5F6F8] items-center mb-4 border-2">
            <Image
              src="/images/chair12.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          
          <h3 className="text-[#151875] text-center font-bold text-lg">Cantilever chair</h3>
          <div className="flex gap-2 mt-1 ml-[75px]">
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-[#1518754D] line-through">$42.00</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-white shadow-2xl">
          <div className="h-[250px] flex justify-center bg-[#F5F6F8] items-center mb-4 border-2">
            <Image
              src="/images/chair13.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          
          <h3 className="text-[#151875] text-center font-bold text-lg">Cantilever chair</h3>
          <div className="flex gap-2 mt-1 ml-[75px]">
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-[#1518754D] line-through">$42.00</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 bg-white shadow-2xl">
          <div className="h-[250px] flex justify-center bg-[#F5F6F8] items-center mb-4 border-2">
            <Image
              src="/images/chair14.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          
          <h3 className="text-[#151875] text-center font-bold text-lg">Cantilever chair</h3>
          <div className="flex gap-2 mt-1 ml-[75px]">
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-[#1518754D] line-through">$42.00</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-4 bg-white shadow-2xl">
          <div className="h-[250px] flex justify-center bg-[#F5F6F8] items-center mb-4 border-2">
            <Image
              src="/images/chair15.png"
              alt="Chair"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          
          <h3 className="text-[#151875] text-center font-bold text-lg">Cantilever chair</h3>
          <div className="flex gap-2 mt-1 ml-[75px]">
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-[#1518754D] line-through">$42.00</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;
