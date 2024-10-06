import React from "react";
import Button from "../ReusableComponents/Button";
import SideBar from "../ReusableComponents/SideBar";
import EuroPart from "../components/EuroPart";
import CarContainer from "./../components/CarCard/CarContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useCars } from "../components/Context/CarContext";
// import CarCard from "../components/CarCard/CarCard"


const Category = () => {
  // const { cars, recommendedCars } = useCars();
  
  return (
    <div className="flex gap-2 min-h-screen">
      <Navbar/>
      <div className="bg-[#ffffff] mt-1 w-1/6 hidden md:hidden lg:block">
        <SideBar/>
      </div>
      <div className="lg:w-5/6 w-full px-12 mt-6">
        <div className="w-full">
          <EuroPart/>
        </div>
        <div className="p-12 flex-[3] flex min-w-[300px] flex-wrap items-center justify-between gap-y-12">
        {/* {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
          {recommendedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))} */}
            <CarContainer showAll={true}/>
          </div>
        <div className="flex items-center justify-center">
            <Button 
            btnText="Show more car" 
            className="mt-8 text-[12px] px-4 py-2"
            />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Category;
