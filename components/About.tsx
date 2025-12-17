import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className=" container mx-auto lg:px-6 md:px-5 px-4">
        <span className="text-headline uppercase text-sm font-semibold font-lexend tracking-[7px]">
          / About Us
        </span>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-20 mt-6">
          <div className="w-[95%]">
            <h2 className="lg:text-6xl md:text-5xl font-lexend text-heading">
              Elevating Cleanliness <br className="hidden md:block" /> to
              Perfection
            </h2>
          </div>
          <div className="lg:w-[35%] md:w-full">
            <p className="text-text-light font-dm-sans font-normal text-[20px] mt-4 lg:mt-0">
              At Umoja Cleaning Co, LLC, we’re committed to elevating
              cleanliness to perfection for every business we serve.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-10 items-stretch">
          {/* LEFT CARD */}
          <div className="lg:col-span-4">
            <div className="w-full h-full relative min-h-[320px] rounded-4xl bg-[#AEADF1] flex flex-col items-center justify-between py-10 px-6 text-center">
              <div className="w-full p-4">
                <Image
                  src="/images/shapeabout1.svg"
                  alt="Decoration"
                  width={80}
                  height={80}
                  className="w-auto flex  h-auto"
                />
              </div>

              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-lexend font-medium">
                  99%
                </h1>
                <p className="mt-2 text-heading font-normal text-[20px] font-dm-sans">
                  Satisfied Clients
                </p>
              </div>

              <div className="w-full flex justify-end p-4">
                <Image
                  src="/images/shapeabout2.svg"
                  alt="Decoration"
                  width={80}
                  height={80}
                  className="w-auto flex  h-auto"
                />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-8">
            <div className="w-full h-full overflow-hidden rounded-4xl">
              <Image
                src="/images/about.png"
                alt="Cleaning Service"
                width={720}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
