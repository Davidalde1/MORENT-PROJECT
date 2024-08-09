import React from "react";
import { IoEllipse } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSwapVertical } from "react-icons/io5";

const EuroPart = () => {
  return (
    <div className="font-plus">
      <div className="flex items-center justify-start mt-8 gap-8 flex-col lg:flex-row px-4">
        <div className="flex-1">
          <div className="bg-white py-2">
            <p className="flex items-center gap-1 px-3 text-[#1A202C] text-[14px]">
              <span className="text-[#3563E9]">
                <IoEllipse className='border-2 border-gray-300 rounded-full' />
              </span>
              Pick-up
            </p>
            <div className="flex items-center">
              <div className="border-r-2 border-r-gray-100 px-3">
                <p className="text-[#1A202C] text-[14px]">Locations</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#90A3BF]">
                    <p>select your city</p>
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="border-r-2 border-r-gray-100 px-3">
                <p className="text-[#1A202C] text-[14px]">Date</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#90A3BF]">
                    <p>select your date</p>
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="px-3">
                <p className="text-[#1A202C] text-[14px]">Time</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#90A3BF]">
                    <p>select your time</p>
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#3563E9] p-3 rounded-[10px]">
          <button>
            <IoSwapVertical className="text-white" />
          </button>
        </div>
        <div className="flex-1">
          <div className="bg-white py-2">
            <p className="flex items-center gap-1 px-3 text-[#1A202C] text-[14px]">
              <span className="text-[#3563E9]">
                <IoEllipse className='border-2 border-gray-300 rounded-full' />
              </span>
              Drop-off
            </p>
            <div className="flex items-center">
              <div className="border-r-2 border-r-gray-100 px-3">
                <p className="text-[#1A202C] text-[14px]">Locations</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#90A3BF]">
                    <p>select your city</p>
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="border-r-2 border-r-gray-100 px-3">
                <p className="text-[#1A202C] text-[14px]">Date</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#90A3BF]">
                    <p>select your date</p>
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="px-3">
                <p className="text-[#1A202C] text-[14px]">Time</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#90A3BF]">
                    <p>select your time</p>
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuroPart;
