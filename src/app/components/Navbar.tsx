// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/images/logo.png'; // Replace with your actual logo image
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-400 text-white py-4 fixed w-full z-10">
      <nav>
        <div className="container mx-auto flex justify-around items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image src={Logo} alt="Logo" width={100} height={100} className="mr-2 rounded-lg" />
              <span className="text-xl font-bold">ModWebSolution</span>
            </div>
          </Link>
          <div className="lg:flex lg:items-center lg:w-auto">
            <div className="text-lg lg:flex-grow">
              <Link href="/">
                <span className="block mt-4 lg:inline-block lg:mt-0 mr-4">Home</span>
              </Link>
              <Link href="/about">
                <span className="block mt-4 lg:inline-block lg:mt-0 mr-4">About</span>
              </Link>
              <Link href="/services">
                <span className="block mt-4 lg:inline-block lg:mt-0 mr-4">Services</span>
              </Link>
              <Link href="/portfolio">
                <span className="block mt-4 lg:inline-block lg:mt-0 mr-4">Portfolio</span>
              </Link>
              <Link href="/technologies">
                <span className="block mt-4 lg:inline-block lg:mt-0 mr-4">Technologies</span>
              </Link>
              <Link href="/contact">
                <span className="block mt-4 lg:inline-block lg:mt-0">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
