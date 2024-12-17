import React from "react";
import Image from "next/image";


interface SlideProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  discount: string;
  metadata: string;
}

const slides: SlideProps[] = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Discover the latest furniture trends with our new collection. Shop now and save big!",
    buttonText: "Shop Now",
    imageUrl: "/images/sofa.png",
    discount: "50% off",
    metadata: "Best Furniture For Your Castle...",
  },
];

const Slider: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden bg-[#F2F0FF]">
      
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-2 px-5 py-8"
          >
            {/* Left Side - Bulb Image */}
            <div className="flex-shrink-0 self-center lg:self-start -mt-4 lg:-mt-8 ml-8">

            <Image
    src="/images/bulb.png"
    alt="bulb"
    width={280}
    height={250}
  />
            </div>


            {/* Center - Text Content */}
            <div className="text-center lg:text-left flex-grow mt-7">
              <p className="text-pink-500 text-sm font-medium">{slide.metadata}</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-gray-600 mb-6">{slide.description}</p>
              <button className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition">
                {slide.buttonText}
              </button>
            </div>

            {/* Right Side - Product Image */}
            <div className="relative flex-shrink-0 mr-[100px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                width={350}
                height={350}
                className="rounded-lg object-cover w-[300px] lg:w-[350px] mx-auto"
              />
              
              
              <div className="absolute -top-6 right-4  w-50 h-50">

            <Image
    src="/images/50.png"
    alt="bulb"
    width={80}
    height={80}
  />
            </div>
              
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
          aria-label="Previous Slide"
        >
        
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
          aria-label="Next Slide"
        >
        
        </button>
    
    </div>
  );
};

export default Slider;
