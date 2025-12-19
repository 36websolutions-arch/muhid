"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // ✅ Force Home when at top
      if (window.scrollY < 100) {
        setActive("home");
        return;
      }

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white">
      <div className="container mx-auto lg:px-6 md:px-5 px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`relative font-medium font-lexend text-[16px] transition-colors ${
                active === link.id
                  ? "text-primary"
                  : "text-heading hover:text-primary"
              }`}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          title="btn"
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-heading">
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50">
            <div className="flex items-center justify-between px-6 py-4">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
              <button title="btn" onClick={() => setMenuOpen(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-6 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium font-lexend ${
                    active === link.id
                      ? "text-primary font-bold"
                      : "text-heading"
                  }`}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
