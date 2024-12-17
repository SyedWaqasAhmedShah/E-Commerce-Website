import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Image from 'next/image';

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/chair5.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      oldPrice: 65.0,
    },
    {
      id: 2,
      image: "/images/chair6.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      oldPrice: 65.0,
      sale: true,
      showIcons: true,
    },
    {
      id: 3,
      image: "/images/chair7.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      oldPrice: 65.0,
    },
    {
      id: 4,
      image: "/images/chair8.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      oldPrice: 65.0,
    },
    {
      id: 5,
      image: "/images/chair9.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      oldPrice: 65.0,
    },
    {
      id: 6,
      image: "/images/chair10.png",
      name: "Comfort Handy Craft",
      price: 42.0,
      oldPrice: 65.0,
    },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold text-[#15104C] mb-6">
        Latest Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-6">
        <button className="text-[#E21B70] border-b-2 border-[#E21B70] font-semibold">
          New Arrival
        </button>
        <button className="text-[#15104C] hover:text-[#E21B70]">
          Best Seller
        </button>
        <button className="text-[#15104C] hover:text-[#E21B70]">
          Featured
        </button>
        <button className="text-[#15104C] hover:text-[#E21B70]">
          Special Offer
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid lg:grid-cols-3 gap-16 mx-auto">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* Product Card */}
            <div
              className={`relative p-4 ${product.id === 2 ? "bg-transparent" : "bg-[#F6F7FB]"}`}
            >
              {product.sale && (
                <span className="absolute bg-[#3F509E] text-white text-xl px-4 py-1 rounded-full shadow-lg">
                  Sale
                </span>
              )}

              <div className="h-[300px] flex items-center justify-center mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={280}
                  className={`object-cover ${product.id === 2 ? "bg-transparent" : ""}`}
                />
              </div>

              {product.showIcons && product.id === 2 && (
                <div className="absolute left-2 bottom-8 flex flex-col gap-8 text-[#2E2EFF]">
                  <span className="cursor-pointer text-xl"><LuShoppingCart /></span>
                  <span className="cursor-pointer text-xl"><FaRegHeart /></span>
                  <span className="cursor-pointer text-xl"><FaSearchPlus /></span>
                </div>
              )}
            </div>

            {/* Product Details - Text Below */}
            <div className="flex justify-between items-center gap-7 mt-8">
              {/* Product Name */}
              <h3 className="text-[#15104C] font-semibold">{product.name}</h3>

              {/* Price Section */}
              <div className="flex items-center gap-2">
                <p className="text-[#15104C] font-bold">${product.price.toFixed(2)}</p>
                <p className="text-[#FB2E86] line-through text-sm">${product.oldPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
