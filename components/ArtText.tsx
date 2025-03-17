'use client';

import { HeartIcon } from "@heroicons/react/24/outline";

const ArtText = () => {
  const artInfo = {
    title: "Majestic Landscape",
    description:
      "A breathtaking view of the mountain ranges during sunset, capturing the essence of nature's beauty.",
    imageUrl: "/images/landscape.jpg",
  };

  return (
    <>
      {/* First Section */}
      <div className="flex flex-wrap items-center justify-between bg-black text-white p-10">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">ABOUT ART</h2>
          <p className="text-lg leading-relaxed mb-4">
            Art is a significant form of human expression that has existed since ancient times. It serves as a connection to culture, thought, belief, and the emotions of people across different eras.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Art has evolved in its forms and concepts, from traditional to modern art, adapting alongside societal and technological changes. Today, art continues to be a powerful means of communication, both socially and culturally.
          </p>
          <p className="text-lg leading-relaxed">
            Through various mediums, such as paintings, sculptures, mixed media, or even digital art, artists can convey their emotions, feelings, and ideas. These artistic forms play a crucial role in bridging the gap between cultures and generations.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/art5.jpg"
            alt="Beautiful artwork"
            className="w-[800px] h-[440px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-wrap items-center justify-between bg-black text-white p-10">
        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
          <img
            src="/images/art8.jpg"
            alt="Beautiful artwork"
            className="w-[800px] h-[440px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold mb-4">FINE ART</h2>
          <p className="text-lg leading-relaxed mb-4">
          Fine Art refers to works of art created with a focus on aesthetic value and artistic expression, often without limitations in terms of materials or methods used. Examples include paintings, sculptures, prints, and photographic art. Fine Art typically emphasizes evoking emotions or reflecting the thoughts of the creator through skill and meticulous craftsmanship, allowing each piece to convey profound meanings and reflect cultural or social values. Today, artists continue to create and present works that express their identities and life experiences through this form of art. Online platforms, such as your website, enable artists to easily showcase their work to a broader audience.
          </p>
        </div>
      </div>

              {/* First Section */}
      <div className="flex flex-wrap items-center justify-between bg-black text-white p-10">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">DIGITAL ART</h2>
          <p className="text-lg leading-relaxed mb-4">
          Digital art is a form of art created through the use of computer technology and software, encompassing digital painting in graphic design programs, photo editing with digital tools, and 3D modeling. Digital artworks can convey ideas and beauty using advanced equipment. This form of art has gained significant popularity due to its flexibility in creation, ease of dissemination over the internet, and adaptability to meet the creator's needs. As a result, artists can reach new audiences and benefit from broad opportunities for collaboration and exchange of ideas. Additionally, the rise of NFTs (Non-Fungible Tokens) has given digital art economic value, enabling it to be bought and sold like other art forms.
          </p>
          
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/art6.jpg"
            alt="Beautiful artwork"
            className="w-[800px] h-[440px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ArtText;
