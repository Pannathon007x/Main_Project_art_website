'use client';

import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="ml-[100px]">
          <Image
            src="/images/logoV3.jpg.png" // ใช้รูปภาพแทนตัวอักษร "V"
            alt="Logo"
            width={100} // ขนาด 100px
            height={100}
            className="rounded-full" // ทำให้รูปภาพกลม
          />
        </div>

        {/* Award Text Section */}
        <div className="text-center">
          <p className="text-sm">
            Awarded 5th place in the 2024 American Art Awards, Abstract Category.
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-6 mr-[100px]">
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
