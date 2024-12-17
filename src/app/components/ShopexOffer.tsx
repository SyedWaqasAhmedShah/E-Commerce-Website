import React from "react";

const ShopexOffer = () => {
  const offers = [
    {
      id: 1,
      icon: "🚚", // Replace with proper image or icon library
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      border: true, // Highlighted box
    },
    {
      id: 2,
      icon: "💰", // Replace with proper image or icon library
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      border: false,
    },
    {
      id: 3,
      icon: "🏅", // Replace with proper image or icon library
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      border: false,
    },
    {
      id: 4,
      icon: "📞", // Replace with proper image or icon library
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      border: false,
    },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold text-[#151875] mb-8">
        What Shopex <span className="text-[#151875]">Offer!</span>
      </h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`p-6 text-center shadow-md ${
              offer.border ? "border-2" : "border border-gray-200"
            } rounded-lg`}
          >
            {/* Icon */}
            <div className="text-6xl mb-4">{offer.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#151875] mb-2">
              {offer.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopexOffer;
