import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const Search = () => {
  return (
    <div>
      <div className="md:border-2 lg:border-2 border-gray-200 rounded-full px-1 lg:px-2 py-1 flex items-center">
        <div className="pr-2">
          <CiSearch />
        </div>
        
        <input
          type="text"
          placeholder="Search something here"
          className="text-[12px] hidden md:flex lg:flex focus:outline-none"
        />
      
        <div className="pl-6 lg:pl-24 hidden md:flex lg:flex">
          <HiOutlineArrowsRightLeft />
        </div>
      </div>
    </div>
  );
};

export default Search;
