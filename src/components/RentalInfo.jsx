import React from "react";
import { IoEllipse } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const RentalInfo = ({ description, className }) => {
  return (
    <div className="w-full">
      <div>
        <div>
          <p
            className={`flex items-center gap-1 text-[#1A202C] text-[14px] font-bold ${className}`}
          >
            <span className="text-[#3563E9]">
              <IoEllipse className="border-2 border-gray-300 rounded-full" />
            </span>
            {description}
          </p>
        </div>
        <div className="lg:flex md:flex-row flex-row gap-6 mt-3">
          <div>
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold">
              Locations
            </h4>
            <div className="flex items-center justify-between bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full">
              <div>
                <input
                  type="text"
                  placeholder="select your city"
                  className="bg-[#f5f4f3] focus:outline-none text-[12px]"
                />
              </div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold">Date</h4>
            <div className="flex items-center justify-between bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full">
              <div>
                <input
                  type="text"
                  placeholder="Select your date"
                  className="bg-[#f5f4f3] focus:outline-none text-[12px]"
                />
              </div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold mt-4">
            Time
          </h4>
          <div className="flex items-center justify-between bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full">
            <div>
              <input
                type="text"
                placeholder="Select your time"
                className="bg-[#f5f4f3] focus:outline-none text-[12px]"
              />
            </div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
