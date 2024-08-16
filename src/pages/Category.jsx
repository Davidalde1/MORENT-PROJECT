import React from "react";
import Button from "../ReusableComponents/Button";
import SideBar from "../ReusableComponents/SideBar";
import EuroPart from "../components/EuroPart";
import CarContainer from "./../components/CarCard/CarContainer";


const Category = () => {
  
  return (
    <div className="flex gap-2 min-h-screen">
      <div className="bg-[#ffffff] mt-1 w-1/6 hidden md:hidden lg:block">
        <SideBar/>
      </div>
      <div className="lg:w-5/6 w-full px-12 mt-6">
        <div className="w-full">
          <EuroPart/>
        </div>
        <div className="flex flex-wrap items-center flex-col justify-between">
            <CarContainer showAll={true}/>
          </div>
        <div className="flex items-center justify-center">
            <Button 
            btnText="Show more car" 
            className="mt-8 text-[12px] px-4 py-2"
            />
        </div>
      </div>
    </div>
  );
};

export default Category;
