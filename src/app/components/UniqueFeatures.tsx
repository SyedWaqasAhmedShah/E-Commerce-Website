import React from 'react';
import Image from 'next/image';

const UniqueFeatures: React.FC = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Unique Features Of Latest & Trending Products</h2>
      <div className="flex items-center">
        {/* Product Image */}
        <div className="w-1/2 h-64 overflow-hidden rounded-md">
          <Image
            src="/images/chair11.png"
            alt="Armchair"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Product Details */}
        <div className="ml-8 flex flex-col justify-center">
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">Add to Cart</button>
          <p className="mb-4 text-xl font-bold">Price: $299.00</p>
          <span className="bg-red-500 text-white p-2 rounded">50% Discount</span>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
