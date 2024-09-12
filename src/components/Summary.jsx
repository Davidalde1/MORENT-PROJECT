import React from "react";
import { IoIosStar } from "react-icons/io";
import { useLocation } from "react-router-dom";



const Summary = () => {
  const location = useLocation();
  const { car } = location.state;

  return (
    <div className="bg-[#ffffff] rounded-[10px] px-4 py-2">
      <div>
        <h3 className="text-[#1A202C] text-[18px] font-bold">Rental Summary</h3>
        <p className="text-[#90A3BF] text-[12px] lg:w-[380px] w-[300px]">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="w-[132px] h-[108px] bg-[#3563E9] px-4 py-8">
          <img
            src={car.image}
            alt={car.name}
            className="w-[116px] h-[36px]"
          />
        </div>
        <div >
          <div>
            <p className="lg:text-[28px] text-[18px] text-[#1A202C] font-bold">{car.carName}</p>
          </div>
          <div>
            <p className="flex items-center lg:text-[12px] text-[12px]">
              <span className="flex items-center text-yellow-500">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar className="text-gray-400"/>
              </span>
              440+ Reviewer
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full mt-8"></div>
      <div className="mt-10">
        <p className="flex items-center justify-between text-[#1A202C] text-[12px]"><span className="text-[#90A3BF] text-[14px]">Subtotal</span>$80.00</p>
        <p className="flex items-center justify-between text-[#1A202C] text-[12px] mt-3"><span className="text-[#90A3BF] text-[14px]">Tax</span>$0</p>
      </div>
      <div className="flex items-center justify-between px-3 py-1 bg-[#f6f7f9] rounded-[10px] mt-3">
        <span><input type="text" placeholder="Apply promo code" className="focus:outline-none bg-[#f6f7f9] text-[#1A202C] text-[12px] w-[30vh]"/></span>
        <span className="text-[#90A3BF] text-[14px]"><button>Apply now</button></span>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-3"><p className="flex flex-col text-[#90A3BF] text-[10px] font-bold"><span className="text-[18px] text-[#1A202C] font-bold">TotalRentalPrice</span>Overall price and includes rental discount</p></div>
        <div className="text-[28px] text-[#1A202C] font-bold"><p>${car.price}.00</p></div>
      </div>
    </div>
  );
};

export default Summary;
