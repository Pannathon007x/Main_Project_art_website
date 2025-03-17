'use client';

import { HeartIcon } from "@heroicons/react/24/outline";

const Cade = () => {
  const artItems = [
    { id: 1, name: "Art 1", price: "$100", imageUrl: "/images/art1.jpg" },
    { id: 2, name: "Art 2", price: "$200", imageUrl: "/images/art2.jpg" },
    { id: 3, name: "Art 3", price: "$300", imageUrl: "/images/art3.jpg" },
    { id: 4, name: "Art 4", price: "$400", imageUrl: "/images/art4.jpg" },
    { id: 5, name: "Art 5", price: "$500", imageUrl: "/images/4k-wallpaper-abstract-expressionism-abstract-painting-acrylic-paint.jpg" },
    { id: 6, name: "Art 6", price: "$600", imageUrl: "/images/0759750a41964c5888557fa070d088d6.jpg" },
    { id: 7, name: "Art 7", price: "$700", imageUrl: "/images/wallpapersden.com_new-cool-swirl-4k-art_3840x2160.jpg" },
    { id: 8, name: "Art 8", price: "$800", imageUrl: "/images/art8.jpg" },
  ];

  return (
    <div className="overflow-x-scroll scrollbar-hide px-[100px]">
      <div className="flex gap-6 w-max">
        {artItems.map((item) => (
          <div
            key={item.id}
            className="relative w-[400px] h-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image and Heart Button */}
            <div className="relative w-full h-[300px] overflow-hidden rounded-t-lg">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
                <HeartIcon className="w-6 h-6 hover:text-red-500 transition duration-300 ease-in-out" />
              </button>
            </div>
            {/* Details */}
            <div className="mt-4 text-center p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.price}</p>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cade;
