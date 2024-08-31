// CarContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import carData from "./db.json"; // Import your local db.json file
import * as assetImages from "../../assets/assets"; // Import all images from your assets file

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [filters, setFilters] = useState({
    type: [],
    capacity: [],
    price: { min: 0, max: 100 },
  });

  useEffect(() => {
    const processedCars = processCarData(carData.cars);
    const processedRecommendedCars = processCarData(carData.RecommendedCars);
    setCars(processedCars);
    setFilteredCars(processedCars);
    setRecommendedCars(processedRecommendedCars);
  }, []);

  const processCarData = (carArray) => {
    return carArray.map((car) => ({
      ...car,
      price: Number(car.price),
      image: assetImages[car.image.split("/").pop().split(".")[0]] || car.image,
    }));
  };

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  useEffect(() => {
    const newFilteredCars = cars.filter((car) => {
      const matchesType = filters.type.length === 0 || filters.type.includes("All") || filters.type.includes(car.type);
      const matchesCapacity = filters.capacity.length === 0 || filters.capacity.includes("All") || filters.capacity.includes(car.category);
      const matchesPrice = car.price >= filters.price.min && car.price <= filters.price.max;

      return matchesType && matchesCapacity && matchesPrice;
    });

    setFilteredCars(newFilteredCars);
  }, [filters, cars]);

  return (
    <CarContext.Provider value={{ cars: filteredCars, recommendedCars, updateFilters }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => useContext(CarContext);