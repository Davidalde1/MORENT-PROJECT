import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const Search = () => {
  return (
    <div>
      <div className="border-2 border-gray-200 rounded-full px-1 lg:px-2 py-1 flex items-center">
        <div className="pr-2">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="Search something here"
          className="text-[12px] border-none"
        />
        <div className="pl-6 lg:pl-24">
          <HiOutlineArrowsRightLeft />
        </div>
      </div>
    </div>
  );
};

export default Search;
