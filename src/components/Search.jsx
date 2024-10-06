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
    <div className="relative">
      <div className="border-2 border-gray-200 rounded-full px-4 py-2 flex items-center bg-white shadow-sm">
        <CiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search car here"
          className="text-sm w-full focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <HiOutlineArrowsRightLeft className="text-gray-400 ml-2" />
      </div>

      {searchResults.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto">
          {searchResults.map((car) => (
            <div
              key={car.id}
              onClick={() => handleCarSelect(car.id)}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out">
              <img
                src={car.image}
                alt={car.carName}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-sm font-semibold text-gray-800">{car.carName}</h3>
                <p className="text-xs text-gray-600">{car.carType}</p>
                <div className="flex justify-between mt-1">
                  <span className="text-xs font-medium text-gray-700">${car.price}</span>
                  <span className="text-xs text-gray-500">{car.transmission}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;


