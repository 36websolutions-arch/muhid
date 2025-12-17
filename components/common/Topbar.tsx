import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

export default function topbar() {
  return (
    <section className="w-full bg-[#F9F9FE] py-10">
      <div className="flex md:flex-row sm:flex-col flex-col text-center justify-center items-center lg:gap-10 md:gap-6 gap-4">
        <span className="text-[16px] flex justify-center items-center font-dm-sans text-[#6B6A7E] font-normal">
          <MdOutlineWatchLater
            size={20}
            className="inline-flex mr-2 text-[#6B6A7E] "
          />
          Mon-Fri 08.00 - 17.00
        </span>
        <span className="text-[16px] flex font-dm-sans text-[#6B6A7E] font-normal">
          <FaPhoneAlt
            size={20}
            className="inline text-[#6B6A7E] mb-1 mr-2 text-[16px]"
          />
          (208)-570-8758
        </span>
      </div>
    </section>
  );
}
