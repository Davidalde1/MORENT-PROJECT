
import React from "react";
import CarCard from "../CarCard/CarCard";
import {useCars} from "../Context/CarContext";

const CarContainer = () => {
  const { cars, recommendedCars } = useCars();

  return (
    <div className>
      <div className="flex flex-wrap items-center justify-between mt-[40px] gap[40px]">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <h2 className="mt-[40px]">Recommended Cars</h2>
      <div className="flex flex-wrap items-center justify-between mt-[40px] gap[40px]">
        {recommendedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
    
  );
};

export default CarContainer;