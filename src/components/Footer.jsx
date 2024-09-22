import React from "react";
import {getCurrentDate} from "../assets/dateUtils"

const Footer = () => {
  return (
    <div className="px-8 lg:px-[3rem] mt-8 font-plus bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-gray-200 gap-4 lg:gap-32">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="text-[#3563E9] text-[24px] lg:text-[32px] py-2">
            MORENT
          </div>
          <p className="text-[12px] w-[52%] text-[#13131360] font-semibold">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex items-center justify-evenly md:justify-start gap-4 lg:gap-10 lg:px-32 py-3">
          <div className="flex flex-col">
            <h2 className="text-[14px] lg:text-[16px] text-[#1A202C] font-semibold">
              About
            </h2>
            <ul className="mt-6 flex flex-col gap-2 lg:gap-4 text-[#13131360] text-[12px] font-semibold">
              <li>
                <a href="/">How it works</a>
              </li>
              <li>
                <a href="/">Featured</a>
              </li>
              <li>
                <a href="/">Partnership</a>
              </li>
              <li>
                <a href="/">Business Relation</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[14px] lg:text-[16px] text-[#1A202C] font-semibold">
              Community
            </h2>
            <ul className="mt-6 flex flex-col gap-2 lg:gap-4 text-[#13131360] text-[12px] font-semibold">
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Podcast</a>
              </li>
              <li>
                <a href="/">Invite a friend</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[14px] lg:text-[16px] text-[#1A202C] font-semibold">
              Socials
            </h2>
            <ul className="mt-6 flex flex-col gap-2 lg:gap-4 text-[#13131360] text-[12px] lg:text-[12px] font-semibold">
              <li>
                <a href="/">Discord</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row mt-3 gap-3">
        <div className="text-[#1A202C] text-[12px] lg:text-[14px] font-semibold">
        <p>© {getCurrentDate()} MORENT.All rights reserved </p>
        </div>
        <div className="flex items-center gap-6 text-[12px] lg:text-[14px]">
          <span>Privacy&Policy</span>
          Terms and Condition
        </div>
      </div>
    </div>
  );
};

export default Footer;
