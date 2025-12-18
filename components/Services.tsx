import React from "react";
import Image from "next/image";
const cardData = [
  {
    id: 1,
    image: "/images/Card1.png",
    title: "Office cleaning",
    desc: "Creating cleaner, healthier offices—day after day.",
  },
  {
    id: 2,
    image: "/images/Card2.png",
    title: "Restaurant cleaning",
    desc: "Creating cleaner, safer restaurants—front to back.",
  },
  {
    id: 3,
    image: "/images/Card3.png",
    title: "Warehouse cleaning ",
    desc: "Keeping warehouses clean, organized, and inspection-ready.",
  },
  {
    id: 4,
    image: "/images/Card4.png",
    title: "Bank cleaning",
    desc: "Tellus aliquam faucibus imperdiet eget interdum risus diam.",
  },
  {
    id: 5,
    image: "/images/Card5.png",
    title: "Government cleaning ",
    desc: "Tellus aliquam faucibus imperdiet eget interdum risus diam.",
  },
  {
    id: 6,
    image: "/images/Card6.png",
    title: "Construction cleanup",
    desc: "Tellus aliquam faucibus imperdiet eget interdum risus diam.",
  },
  {
    id: 7,
    image: "/images/Card7.png",
    title: "Industrial cleaning ",
    desc: "Tellus aliquam faucibus imperdiet eget interdum risus diam.",
  },
];
export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto lg:px-6 md:px-5 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 col-span-1">
            <span className="text-headline uppercase text-sm font-semibold font-lexend tracking-[7px]">
              / Our services
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-lexend font-semibold text-heading mt-3">
              Elevate Your Cleanliness <br className="md:block hidden" /> with
              Umoja Cleaning
            </h2>
          </div>
          {/* RIGHT STATS CARD */}
          <div className="lg:col-span-4 col-span-1 flex lg:justify-end">
            <button className="bg-primary px-7 py-4 text-[16px] font-semibold text-white rounded-full">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10 mt-6 lg:mt-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative w-full max-w-sm mx-auto h-auto md:h-110">
              {/* Background Shape */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt="card shape"
                  width={384}
                  height={440}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content Box */}
              <div className="relative z-10 bg-white rounded-lg p-4 sm:p-5 md:p-6 max-w-[320px] mx-auto mt-60 md:mt-64 shadow-sm sm:mb-5 mb-5">
                <h5 className="text-lg sm:text-xl md:text-2xl font-semibold font-lexend text-heading">
                  {card.title}
                </h5>

                <p className="text-sm sm:text-[15px] md:text-[16px] text-[#6B6A7E] font-dm-sans font-normal mt-3 md:mt-4">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
