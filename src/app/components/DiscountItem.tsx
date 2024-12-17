import Image from 'next/image';

const DiscountItem = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Discount Item */}
      <div className="mt-12 bg-purple-100 p-8 rounded-lg text-center relative">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">20% Discount Of All Products</h2>
        <p className="text-gray-600 mb-4">Eams Sofa Compact</p>
        <ul className="text-gray-600 mb-4">
          <li>Material exposed like metal</li>
          <li>Fully upholstered seat and back</li>
          <li>Stable and comfortable</li>
        </ul>
        <a
          href="#"
          className="bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Shop Now
        </a>
        <Image
          src="/images/discount-item.png"
          alt="Discount Item"
          width={160}
          height={160}
          className="absolute right-8 bottom-0 w-40 h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default DiscountItem;
