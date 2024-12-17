import React from 'react';
import Image from 'next/image'; // For optimized images in Next.js

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/category-1.png",
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/category-2.png",
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/category-3.png",
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/category-4.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top Categories</h2>
      <div className="flex justify-center gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="text-center bg-white p-6 rounded-full shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mb-4">
              <Image
                src={category.image}
                alt={category.name}
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-medium mb-1">{category.name}</h3>
            <p className="text-blue-600 font-bold">{category.price}</p>
          </div>
        ))}
      </div>
      {/* Add carousel dots */}
      <div className="flex justify-center mt-6 gap-2">
        {categories.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-purple-600' : 'bg-gray-300'} cursor-pointer`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
