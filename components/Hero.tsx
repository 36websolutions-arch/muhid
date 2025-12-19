import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white py-4 overflow-hidden">
      {/* BACKGROUND BLOCK */}
      <div className="absolute bottom-0 left-0 w-full h-125 md:h-100 bg-primary z-0" />

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-5">
        {/* Decorative Shape */}
        <div className="absolute lg:right-70 md:right-10 top-10 z-0 hidden md:block">
          <Image
            src="/images/shapehero.svg"
            alt="Hero Left Background"
            width={80}
            height={80}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Image + Stats */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col items-center md:items-start">
            <Image
              src="/images/hero.png"
              alt="Hero Right Background"
              width={300}
              height={400}
              className="w-auto h-auto"
            />

            <div className="mt-4 flex gap-4 items-center md:pr-10">
              <h6 className="text-2xl text-heading font-lexend font-semibold">
                126
                <span className="text-[#AEADF1] pl-2 text-2xl font-lexend">
                  +
                </span>
              </h6>
              <p className="text-[16px] font-dm-sans font-normal text-[#6B6A7E]">
                Professional <br /> Tools
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="md:col-span-8 lg:col-span-8 text-center md:text-left">
            <span className="text-headline uppercase text-sm font-semibold font-lexend tracking-[7px]">
              / Umoja Cleaning Co, LLC
            </span>

            <h1 className="text-heading text-4xl md:text-6xl lg:text-7xl font-semibold font-lexend mt-4 leading-tight">
              Commercial <br className="hidden md:block" /> Cleaning Experts
            </h1>
          </div>

          {/* Right CTA */}
          <div className="md:col-span-12 lg:col-span-2 flex justify-center lg:justify-start">
            <div className="max-w-xs text-center lg:text-left">
              <h4 className="text-2xl font-semibold font-lexend text-heading">
                Exceptional Service
              </h4>

              <p className="text-[14px] font-dm-sans font-normal text-[#6B6A7E] mt-2">
                Professional commercial cleaning trusted by businesses since
                2016.
              </p>

              <Link href="tel:(208)-570-8758">
                <button className="mt-4 bg-primary text-white px-8 py-4 rounded-full font-semibold font-lexend w-full sm:w-auto">
                  (208)-570-8758
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative w-full h-135 md:h-160 overflow-hidden mt-16">
          <video
            src="/images/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
