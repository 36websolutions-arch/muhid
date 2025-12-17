import React from "react";
import {
  FaClock,
  FaCheckCircle,
  FaBoxOpen,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={20} />,
    title: "Reliable Cleaning",
    desc: "Reliable cleaning services for every commercial space.",
  },
  {
    icon: <FaClock size={20} />,
    title: "On-Time Services",
    desc: "On-time services you can rely on, every time.",
  },
  {
    icon: <FaBoxOpen size={20} />,
    title: "Flexible Packages",
    desc: "Flexible packages designed to fit every business.",
  },
  {
    icon: <FaDollarSign size={20} />,
    title: "Transparent Pricing",
    desc: "Transparent pricing with no hidden fees — ever.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-5 lg:px-6 bg-[#F9F9FE] rounded-3xl">
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              <span className="text-headline uppercase text-sm font-semibold font-lexend tracking-[7px]">
                / Why Choose Us
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-lexend font-semibold text-heading mt-3">
                Choose Excellence, <br /> Choose Umoja Cleaning
              </h2>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E2A8A] flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-lexend font-semibold text-heading">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[#6B6A7E] font-dm-sans mt-1">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT STATS CARD */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-[#1E1E26] text-white rounded-2xl p-8 w-full max-w-75 relative">
                <div className="absolute top-6 right-6 w-3 h-3 bg-lime-400 rounded-full" />
                <h3 className="text-4xl font-lexend font-semibold">
                  341<span className="text-primary">+</span>
                </h3>
                <p className="mt-2 text-sm text-gray-300 font-dm-sans">
                  Project Finished
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
