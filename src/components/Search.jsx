import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { useCars } from "./Context/CarContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // contexts
  const { cars } = useCars();

  // filter cars
useEffect(() => {
  console.log(cars);
  if (searchTerm) {
    const filteredCars = cars.filter(
      (car) =>
        car.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.carType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.price.toString().includes(searchTerm) ||
        car.transmission.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredCars);
  } else {
    setSearchResults([]);
  }
}, [searchTerm, cars]);

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};

const handleCarSelect = (carId) => {
  navigate(`/car/${carId}`);
  setSearchTerm("");
  setSearchResults([]);
};

  return (
    <div>
      <div className="border-2 border-gray-200 rounded-full px-1 lg:px-2 py-1 flex items-center">
        <div className="pr-2">
          <CiSearch />
        </div>
        
        <input
          type="text"
          placeholder="Search something here"
          className="text-[12px] w-full focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      
        <div className="pl-6 lg:pl-24 flex">
          <HiOutlineArrowsRightLeft />
          <div>
            {searchResults.map((car) => (
              <div key={car.id}
              onClick={() => handleCarSelect(car.id)}
              >
                <img src={car.image} alt={car.carName} 
                />
                <div>
                  <span>{car.carName}</span>
                  <span>{car.carType}</span>
                  <span>{car.price}</span>
                  <span>{car.transmission}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
