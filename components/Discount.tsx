import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Discount() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto lg:px-6 md:px-5 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 md:gap-10 gap-8 items-center">
          {/* IMAGE COLUMN */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-102.5 lg:w-102.5">
              <Image
                src="/images/discount.png"
                alt="discount"
                width={410}
                height={440}
                className="w-full h-auto"
              />

              {/* BLACK BOX */}
              <div
                className="
                absolute 
                lg:bottom-30 lg:-right-20
                bottom-4 right-4
                bg-heading 
                w-36 h-48 
                lg:w-43 lg:h-57.5 
                z-10 
                p-6 lg:p-8 
                flex items-center justify-center
              ">
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/images/shapeabout1.svg"
                      alt="shape"
                      width={48}
                      height={48}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="lg:text-6xl md:text-5xl text-4xl font-lexend font-medium text-white">
                      6
                    </h2>
                    <p className="text-sm md:text-[16px] font-dm-sans font-normal text-[#BCBBC9]">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="text-headline uppercase text-sm font-semibold font-lexend tracking-[7px]">
              / Discount Up To 50%
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[56px] font-lexend font-semibold text-white leading-tight lg:leading-24 mt-3">
              Limited Time Offer – <br className="md:block hidden" />
              Enjoy Exclusive <br className="md:block hidden" />
              Cleaning Discounts!
            </h2>

            <p className="text-[18px] md:text-[20px] font-dm-sans font-normal text-[#BCBBC9] mt-4">
              Limited Time Offer — Save Big on Professional Cleaning
              <br className="md:block hidden" /> Services!
            </p>

            <div className="mt-6">
              <Link href="tel:(208)-570-8758">
                <button
                  className="
                  bg-white 
                  cursor-pointer 
                  text-heading 
                  px-8 py-4 
                  rounded-full 
                  font-semibold 
                  font-lexend 
                  w-full sm:w-auto
                ">
                  (208)-570-8758
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
