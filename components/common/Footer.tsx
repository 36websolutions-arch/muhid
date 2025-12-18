import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LOGO & ABOUT */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.svg" // replace with your logo
                alt="logo"
                width={100}
                height={70}
                className=""
              />
            </div>

            <p className="text-[16px] font-dm-sans font-normal leading-6 text-[#BCBBC9] max-w-xs">
              Leo elementum iaculis quam massa vitae odio sed. Morbi tincidunt
              senectus.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-white">
              <Link href="#" className="hover:text-primary transition">
                <FaTwitter size={18} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-semibold text-2xl font-lexend mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-[16px] font-dm-sans font-normal text-[#BCBBC9]">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES 1 */}
          <div>
            <h4 className="text-white font-semibold text-2xl font-lexend mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-[16px] font-dm-sans font-normal text-[#BCBBC9]">
              <li>Office Cleaning</li>
              <li>Restaurant Cleaning</li>
              <li>Warehouse Cleaning</li>
              <li>Bank Cleaning</li>
            </ul>
          </div>

          {/* SERVICES 2 */}
          <div>
            <h4 className="text-white font-semibold font-lexend mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-[16px] font-dm-sans font-normal text-[#BCBBC9]">
              <li>Government Cleaning</li>
              <li>Construction Cleaning</li>
              <li>Industrial Cleaning</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#BCBBC9] mt-14 pt-6 text-center font-dm-sans text-sm text-[#BCBBC9]">
          Copyright © 2023 Lensade | Design by TokoTema
        </div>
      </div>
    </footer>
  );
}
