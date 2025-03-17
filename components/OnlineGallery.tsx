'use client';
import { useState, useEffect } from "react";

const OnlineGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/images/4k-wallpaper-abstract-expressionism-abstract-painting-acrylic-paint.jpg", title: "Artwork 1", price: "฿3,500" },
    { src: "/images/0759750a41964c5888557fa070d088d6.jpg", title: "Artwork 2", price: "฿4,200" },
    { src: "/images/wallpapersden.com_new-cool-swirl-4k-art_3840x2160.jpg", title: "Artwork 3", price: "฿5,000" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center h-100 bg-gray-100">
      <div className="w-[1600px] h-[800px] relative overflow-hidden rounded-lg shadow-xl border-4 border-gray-300">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
              <h3 className="text-xl font-semibold">{image.title}</h3>
              <p className="text-lg">{image.price}</p>
              <button className="mt-4 bg-white hover:bg-blue-600 text-black py-2 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineGallery;
