import React from "react";
import { FaCube } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import Image from "next/image";

const features = [
  {
    icon: <FiUsers />,
    title: "Reliable Cleaning",
    desc: "Reliable cleaning services for every commercial space.",
  },
  {
    icon: <IoTimeOutline />,
    title: "On-Time Services",
    desc: "On-time services you can rely on, every time.",
  },
  {
    icon: <FaCube />,
    title: "Flexible Packages",
    desc: "Flexible packages designed to fit every business.",
  },
  {
    icon: <BsEmojiSmile />,
    title: "Transparent Pricing",
    desc: "Transparent pricing with no hidden fees — ever.",
  },
];
const images = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
  "/images/brand5.png",
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-5 lg:px-6 bg-[#F9F9FE] rounded-3xl">
        <div className="max-w-6xl mx-auto py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              <span className="text-headline uppercase text-sm font-semibold font-lexend tracking-[7px]">
                / Why Choose Us
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-lexend font-semibold text-heading mt-3">
                Choose Excellence, <br /> Choose Umoja Cleaning
              </h2>
            </div>
            {/* RIGHT STATS CARD */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-heading text-white rounded-2xl flex flex-col justify-center items-start p-12 w-full max-w-72 h-48 relative">
                <div className="absolute top-6 right-7">
                  <Image
                    src="/images/shapeabout1.svg"
                    alt="shape"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-5xl font-lexend text-white font-semibold">
                  341+
                </h3>
                <p className="mt-2 text-[20px] text-[#BCBBC9] font-normal font-dm-sans">
                  Project Finished
                </p>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12 rounded-xl bg-[#2E2A8A] flex items-center justify-center text-white lg:text-[25px] md:text-[20px] sm:text-[16px] text-[12px]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-lexend text-2xl font-semibold text-heading">
                      {feature.title}
                    </h4>
                    <p className="text-[16px] text-[#6B6A7E] font-dm-sans mt-2">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <p className="text-heading text-[20px] font-normal font-dm-sans">
              Trusted by over 90K + companies worldwide
            </p>
            <div className="grid lg:grid-cols-5 gap-x-10">
              {images.map((image, index) => (
                <div key={index} className="mt-5">
                  <Image
                    src={image}
                    alt="brand"
                    width={100}
                    height={100}
                    className="w-auto h-20 "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
