// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/images/logo.png'; // Replace with your actual logo image
import React from 'react';

const Navbar = () => {
  return (
    <div className="text-white fixed w-full z-10">
      <nav>
        <div className="flex flex-row md:flex-row justify-between py-4 md:py-2 px-4 md:px-12">
          {/* Logo and Brand */}
          <Link href="/">
            <div className="flex items-center">
              <Image src={Logo} alt="Logo" width={100} height={100} className="rounded-full" />
              <span className="text-base lg:text-lg font-semibold lg:font-bold ml-2">ModWebSolution</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:font-bold">
              <Link href="/">
                <span className="block md:inline-block">Home</span>
              </Link>
              <Link href="/about">
                <span className="block md:inline-block">About</span>
              </Link>
              <Link href="/services">
                <span className="block md:inline-block">Services</span>
              </Link>
              <Link href="/portfolio">
                <span className="block md:inline-block">Portfolio</span>
              </Link>
              <Link href="/technologies">
                <span className="block md:inline-block">Technologies</span>
              </Link>
              <Link href="/contact">
                <span className="block md:inline-block">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
