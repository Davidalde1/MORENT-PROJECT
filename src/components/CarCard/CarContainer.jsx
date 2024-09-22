
import React from "react";
import CarCard from "../CarCard/CarCard";
import {useCars} from "../Context/CarContext";

const CarContainer = ({ showAll = true, showRecommendedCount = 3 }) => {
  const { cars, recommendedCars } = useCars();
  console.log(cars);
  console.log(recommendedCars);

  const displayedCars = showAll ? cars : cars.slice(0, 4);
  const displayedRecommendedCars = showAll
    ? recommendedCars
    : recommendedCars.slice(0, showRecommendedCount);

 


  return (
    <div className>
      <div className="flex flex-wrap items-center justify-between mt-[40px] gap-[40px]">
        {displayedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <h2 className="mt-[40px] px-4">Recommended Cars</h2>
      <div className="flex flex-wrap items-center justify-between mt-[40px] gap-[40px]">
        {displayedRecommendedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
    
  );
};

export default CarContainer;