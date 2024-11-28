import React from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";

const EuroPart = () => {
  return (
    <div className=" mx-auto lg:w-full w-full flex gap-4 lg:gap-8 flex-col lg:flex-row items-center justify-center">
      {/* Pickup */}
      <div className="w-full bg-white rounded-lg shadow-md lg:px-6 px-4 py-5 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center justify-center md:justify-start mb-4 gap-3 w-full">
          <MdMyLocation className="text-blue-700 text-xl md:text-2xl" />
          <span className="text-gray-800 font-medium text-sm md:text-base">Pick-up</span>
        </div>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
          <div className="flex flex-col gap-2 w-full items-center md:items-start">
            <span className="font-bold text-gray-700 text-sm md:text-base">Locations</span>
            <select className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all duration-200 hover:border-blue-500">
              <option value="Select Your City">Select Your City</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="berlin">Berlin</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full items-center md:items-start">
            <span className="font-bold text-gray-700 text-sm md:text-base">Dates</span>
            <input 
              type="date" 
              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all duration-200 hover:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2 w-full items-center md:items-start">
            <span className="font-bold text-gray-700 text-sm md:text-base">Time</span>
            <input 
              type="time" 
              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all duration-200 hover:border-blue-500"
            />
          </div>
        </div>
      </div>    
      
       {/* Switchbtn */}
      <div className="bg-blue-700 p-4 rounded-lg cursor-pointer hover:bg-blue-800 transition-colors duration-200">
        <HiOutlineSwitchVertical className="w-6 h-6 text-white" />
      </div>

      {/* dropoff */}
      <div className="w-full bg-white rounded-lg shadow-md lg:px-6 px-4 py-5 flex flex-col justify-center items-start">
        <div className="flex items-center justify-start mb-4 gap-3 w-full">
          <MdMyLocation className="text-blue-600 text-xl" />
          <span className="text-gray-800 font-medium">Drop-off</span>
        </div>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <span className="font-bold text-gray-700">Locations</span>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Select Your City">Select Your City</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="berlin">Berlin</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="font-bold text-gray-700">Dates</span>
            <input 
              type="date" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="font-bold text-gray-700">Time</span>
            <input 
              type="time" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuroPart;