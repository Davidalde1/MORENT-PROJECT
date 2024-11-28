import React from "react";
import {getCurrentDate} from "../assets/dateUtils"

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-[3rem] font-plus bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-gray-200 gap-6 lg:gap-32 py-8">
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="text-[#3563E9] text-2xl sm:text-3xl lg:text-[32px] font-bold">
              MORENT
            </div>
            <p className="text-sm lg:text-[14px] max-w-md text-[#13131360] font-semibold">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-10 lg:px-8 xl:px-16">
            <div className="flex flex-col">
              <h2 className="text-base lg:text-[16px] text-[#1A202C] font-semibold">
                About
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-3 lg:gap-4 text-[#13131360] text-xs sm:text-sm font-semibold">
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
              <h2 className="text-base lg:text-[16px] text-[#1A202C] font-semibold">
                Community
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-3 lg:gap-4 text-[#13131360] text-xs sm:text-sm font-semibold">
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
              <h2 className="text-base lg:text-[16px] text-[#1A202C] font-semibold">
                Socials
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-3 lg:gap-4 text-[#13131360] text-xs sm:text-sm font-semibold">
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
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
          <div className="text-[#1A202C] text-xs sm:text-sm lg:text-[14px] font-semibold">
            <p>©{getCurrentDate()} MORENT. All rights reserved</p>
          </div>
          <div className="flex items-center gap-6 text-xs sm:text-sm lg:text-[14px] text-[#13131360] font-semibold">
            <a href="/" className="hover:text-[#3563E9] transition-colors">Privacy & Policy</a>
            <a href="/" className="hover:text-[#3563E9] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;