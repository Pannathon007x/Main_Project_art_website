'use client';

import Cade from "@/components/Cade";

const AboutVarranrat = () => {
  return (
    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-[50vh] bg-gray-300 flex items-center">
          {/* Background Image */}
          <img
            src="images/art10.jpg" // Replace with your image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Text Container */}
          <div className="relative z-10 bg-white text-black p-4 px-[100px] w-[fit-content] ml-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ABOUT<br />VARRANRAT T.
            </h1>
          </div>
        </div>

        {/* BIO Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">BIO</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Varranrat T. is a Thai fine-art acrylic abstract artist and designer, awarded 5th place in the 2024 American Arts Awards for abstraction. All of my works merge philosophy with art, creating authentic narratives in my unique style. I invite you to experience these stories through my paintings.
          </p>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        {/* AWARDS Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">AWARDS</h2>
          <div className="flex justify-center">
            <img src="/images/awards1.jpg" alt="Award" className="w-[1000px] h-[700px]" />
          </div>
        </div>


        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        {/* GALLERY AND FIND BUY HER ARTWORK Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">GALLERY AND FIND BUY HER ARTWORK</h2>
          <ul className="text-gray-700 text-lg leading-relaxed text-center space-y-4">
            <li><a href="https://www.etsy.com/shop/Varranratt" target="_blank" className="text-blue-500">Etsy: Varranratt</a></li>
            <li><a href="https://opensea.io" target="_blank" className="text-blue-500">Nft: OpenSea</a></li>
            <li><a href="http://localhost:3000" target="_blank" className="text-blue-500">Website: localhost:3000</a></li>
            <li><a href="mailto:Varranratt@gmail.com" className="text-blue-500">Email: Varranratt@gmail.com</a></li>
            <li><a href="https://www.tiktok.com/@varranratt" target="_blank" className="text-blue-500">Tiktok: @varranratt</a></li>
            <li><a href="https://www.instagram.com/@Varranratt" target="_blank" className="text-blue-500">Instagram: @Varranratt</a></li>
            <li><a href="https://twitter.com/Chouchu123" target="_blank" className="text-blue-500">X: @Chouchu123</a></li>
          </ul>
        </div>

        {/* QR Code Section */}
        <div className="max-w-5xl mx-auto py-1 px-6">
          <div className="flex justify-center space-x-20">
            <div>
              <img src="/images/qr1.jpg" alt="QR Code 1" className="w-32 h-32" />
            </div>
            <div>
              <img src="/images/qr2.jpg" alt="QR Code 2" className="w-32 h-32" />
            </div>
          </div>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        {/* VARRANRAT STUDIO Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">VARRANRAT STUDIO</h2>
          <div className="flex justify-between">
            <img src="/images/studio1.jpg" alt="Varranrat Studio 1" className="w-1/2 h-auto" />
            <img src="/images/studio2.jpg" alt="Varranrat Studio 2" className="w-1/2 h-auto" />
          </div>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        {/* HER ARTWORKS Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">HER ARTWORKS</h2>
          <div className="flex justify-between">
            <div className="w-1/2 space-y-4">
              <img src="/images/herart1.jpg" alt="Artwork 1" className="w-full h-auto" />
              <img src="/images/herart2.jpg" alt="Artwork 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 space-y-4">
              <img src="/images/herart3.jpg" alt="Artwork 3" className="w-full h-auto" />
              <img src="/images/herart4.jpg" alt="Artwork 4" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        {/* HER ORIGINAL ARTWORKS Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">HER ORIGINAL ARTWORKS</h2>
          {/* Additional content for original artworks */}
        </div>
          <Cade/>
      </div>
      <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>
    </>
  );
};

export default AboutVarranrat;
