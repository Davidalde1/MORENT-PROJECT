import React from "react";
import {getCurrentDate} from "../assets/dateUtils"

const Footer = () => {
  return (
    <div className="px-8 lg:px-[3rem] font-plus bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-gray-200 gap-4 lg:gap-32 pb-8">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="text-[#3563E9] text-[24px] lg:text-[32px] font-bold py-2">
            MORENT
          </div>
          <p className="text-[12px] lg:text-[14px] w-[80%] lg:w-[52%] text-[#13131360] font-semibold">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex items-start justify-evenly md:justify-start gap-4 lg:gap-10 lg:px-32 py-3">
          <div className="flex flex-col">
            <h2 className="text-[14px] lg:text-[16px] text-[#1A202C] font-semibold">
              About
            </h2>
            <ul className="mt-6 flex flex-col gap-2 lg:gap-4 text-[#13131360] text-[12px] font-semibold">
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">How it works</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Featured</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Partnership</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Business Relation</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[14px] lg:text-[16px] text-[#1A202C] font-semibold">
              Community
            </h2>
            <ul className="mt-6 flex flex-col gap-2 lg:gap-4 text-[#13131360] text-[12px] font-semibold">
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Events</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Blog</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Podcast</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Invite a friend</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[14px] lg:text-[16px] text-[#1A202C] font-semibold">
              Socials
            </h2>
            <ul className="mt-6 flex flex-col gap-2 lg:gap-4 text-[#13131360] text-[12px] font-semibold">
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Discord</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Instagram</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Twitter</a>
              </li>
              <li>
                <a href="/" className="hover:text-[#3563E9] transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row py-6 gap-3">
        <div className="text-[#1A202C] text-[12px] lg:text-[14px] font-semibold">
          <p>©{getCurrentDate()} MORENT. All rights reserved</p>
        </div>
        <div className="flex items-center gap-6 text-[12px] lg:text-[14px] text-[#13131360] font-semibold">
          <a href="/" className="hover:text-[#3563E9] transition-colors">Privacy & Policy</a>
          <a href="/" className="hover:text-[#3563E9] transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;