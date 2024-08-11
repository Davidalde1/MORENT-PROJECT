import React from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";


const EuroPart = () => {
  return (
    <div className="w-[100%] flex gap-[2rem] items-center justify-center z-[500px]">
      {/* Pickup */}
      <div className="w-[100%] bg-white rounded-[10px] px-[30px] py-[10px] flex flex-col items-start justify-center">
        <div className="flex items-center justify-center mb-[18px] gap-6">
          <MdMyLocation className="text-blue-700 text-[18px]" />
          <span>Pick-up</span>
        </div>

        <div className="w-[100%] lg:h-[48%] h-auto grid lg:grid-cols-3 grid-cols-1 place-items-start gap-[20px]">
          <div className="flex flex-col justify-start items-start gap-[7px] w-[100%]">
            <span className="font-bold">locations</span>
            <select name="selectCity">
              <option value="Select Your City">Select Your City</option>
            </select>
          </div>
          <div className="border-none w-[100%] p-0 font-plus flex flex-col justify-start items-start gap-[7px] ">
            <span className="font-bold">Dates</span>
            <select name="selectDates">
              <option value="Select Your Date">Select Your Date</option>
            </select>
          </div>
          <div className="border-none w-[92%] p-0 font-plus flex flex-col justify-start items-start gap-[7px] ">
            <span className="font-bold">Time</span>
            <select name="selectTime">
              <option value="Select Your Time">Select Your Time</option>
            </select>
          </div>
        </div>
      </div>
      {/* Switchbtn */}
      <div className="bg-blue-700 p-[18px] rounded-[9px] cursor-pointer">
        <HiOutlineSwitchVertical className="w-[30px] h-[30px] text-white" />
      </div>
      {/* dropoff */}
      <div className="w-[100%] bg-white rounded-[10px] px-[30px] py-[10px] flex flex-col justify-center items-start">
        <div className="flex items-center justify-center mb-[18px] gap-[6px]">
          <MdMyLocation className="text-[18px] text-blue-600" />
          <span>Drop-off</span>
        </div>

        <div className="w-[100%] lg:h-[48px] h-auto grid lg:grid-cols-3 grid-cols-1 place-items-start gap-[20px]">
          <div className="flex flex-col items-start justify-start gap-[7px] w-[100%]">
            <span className="font-bold">locations</span>
            <select name="selectCity">
              <option value="Select Your City">Select Your City</option>
            </select>
          </div>
          <div className="flex flex-col items-start justify-start gap-[7px] w-[100%]">
            <span className="font-bold">Dates</span>
            <select name="selectDates">
              <option value="Select Your Date">Select Your Date</option>
            </select>
          </div>
          <div className="flex flex-col items-start justify-start gap-[7px] w-[100%]">
            <span className="font-bold">Time</span>
            <select name="selectTime">
              <option value="Select Your Time">Select Your Time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuroPart;
