import React from "react";
import SideBar from "../ReusableComponents/SideBar";
import { IoIosStar } from "react-icons/io";
import Button from "../ReusableComponents/Button";
import CarContainer from "./../components/CarCard/CarContainer";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import {useCars} from "../components/Context/CarContext"
import { IoMdHeart } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";




const Details = () => {
  const location = useLocation();
  const { car } = location.state;
  
  if (!car) {
    return <div>Car not found</div>
  }

  const navigate = useNavigate();
  const goToPayment = () => {
    navigate("/payment",{ state: { car } });
  };
  return (
    <div className="flex gap-8 min-h-screen font-plus lg:w-full">
      <div className="bg-[#ffffff] mt-1 w-1/6 hidden md:hidden lg:block">
        <SideBar />
      </div>
      <div className="w-5/6 m-auto lg:m-0">
        <div className="flex lg:flex-row flex-col mt-4 gap-10 px-4">
          <div>
            <div className="w-full md:w-[500px] lg:w-[550px] h-[280px] bg-[#3563E9] md:m-auto rounded-[10px] px-3">
              <h2 className="lg:text-[24px] text-[22px] text-[white]">
                Sports car with the best design and acceleration
              </h2>
              <p className="text-white text-[12px] lg:w-[284px] w-[240px] mt-2">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>
              <img
                src={car.image}
                alt={car.carName}
                className="lg:w-[380px] w-[280px] lg:h-[120px] h-[90px] mx-auto mt-4"
              />
            </div>
            <div className="flex lg:flex-row flex-col gap-11 mt-4">
              <div className="lg:w-[153PX] w-full md:w-[500px] m-auto lg:m-0 lg:h-[127px] md:h-[300px] h-[200px] bg-[#3563E9] border-2 border-white px-4 py-9 rounded-[10px]">
                <img
                  src={car.image}
                  alt={car.carName}
                  className="w-[116px] h-[36px]"
                />
              </div>
              <div className="lg:w-[153PX] w-full md:w-[500px] m-auto lg:m-0 lg:h-[124px] h-[200px] mb-6 lg:mb-0">
                <img src="/interior1.png" alt="interior of a car" />
              </div>
              <div className="lg:w-[153PX] w-full md:w-[500px] m-auto lg:m-0 lg:h-[124px] h-[200px] mb-6 lg:mb-0">
                <img src="/interior2.png" alt="interior of a car" />
              </div>
            </div>
          </div>
          <div className="bg-white px-3 lg:w-[530px]">
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[28px] text-[#1A202C] font-bold">
                {car.carName}
              </span>
              <span>
              <IoMdHeart className="text-red-600" />
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-500 gap-[2px]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar className="text-gray-400" />
              </div>
              <div className="text-[14px] text-[#596780]">
                <p>440+Reviewer</p>
              </div>
            </div>
            <p className="lg:w-[440px] w-full mt-7 text-[#596780] text-[18px]">
              {car.description}
            </p>
            <div className="flex flex-row gap-2 lg:gap-16 mt-7">
              <p className="flex flex-col gap-3 text-[#90A3BF] text-[14px]">
                <span>TypeCar</span>Steering
              </p>
              <p className="flex flex-col gap-3 text-[#596780] text-[14px]">
                <span>Sport</span>{car.transmission}
              </p>
              <p className="flex flex-col gap-3 text-[#90A3BF] text-[14px]">
                <span>Capacity</span>Gasoline
              </p>
              <p className="flex flex-col gap-3 text-[#596780] text-[14px]">
                <span>{car.seatingCapacity}</span>{car.fuelCapacity}
              </p>
            </div>
            <div className="flex items-center justify-between mt-12 ">
              <div>
                <div className="flex items-center text-[#90A3BF]">
                  <p>
                    <span className="text-[24px] text-[#1A202C] font-bold">
                      ${car.price}/
                    </span>
                  </p>
                  days
                </div>
                <div className="text-[#90A3BF]">
                  <p>$100.00</p>
                </div>
              </div>
              <div>
                  <Button
                   btnText="Rent Now"
                   func={goToPayment} 
                   />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[15px] lg:px-[25px] lg:w-[95%]">
          <div className="bg-white px-4 py-4 mt-5">
            <div className="flex items-center flex-row gap-2">
              <div className="text-[#1A202C] text-[16px] font-bold">
                Reviews
              </div>
              <div className="bg-[#3563E9] px-2 text-[12px] text-[#f5f5f3] shadow">
                13
              </div>
            </div>
            <div className="flex  lg:flex-row flex-col gap-4 mt-6">
              <div>
                <img
                  src="/man.png"
                  alt="a man face"
                  className="w-[45px] h-[40px]"
                />
              </div>
              <div className="w-full">
                <div className="flex items-start justify-between lg:flex-row flex-col mt-2 lg:mt-0">
                  <div>
                  <p className="flex flex-col text-[12px] text-[#90A3BF]">
                    <span className="text-[#1A202C] text-[14px] font-bold">
                      Alex Stanton
                    </span>
                    CEO at Bukalapak
                  </p>
                  </div>
                  <div className="flex flex-col lg:items-end items-start mt-2">
                    <div className="text-[#90A3BF] text-[12px]">
                      <p>21 July 2022</p>
                    </div>
                    <div className="flex text-yellow-500 gap-[2px]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar className="text-gray-400" />
                    </div>
                  </div>
                </div>
                <p className="text-[#596780] text-[12px] w-full mt-2 lg:mt-0">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-6">
              <div>
                <img
                  src="/A lady.png"
                  alt="a lady face"
                  className="w-[45px] h-[40px]"
                />
              </div>
              <div className="w-full">
                <div className="flex items-start justify-between lg:flex-row flex-col mt-2 lg:mt-0">
                  <div>
                  <p className="flex flex-col text-[12px] text-[#90A3BF]">
                    <span className="text-[#1A202C] text-[14px] font-bold">
                      Skylar Dias
                    </span>
                    CEO at Amazon
                  </p>
                  </div>
                  <div className="flex flex-col lg:items-end items-start mt-2">
                    <div className="text-[#90A3BF] text-[12px]">
                      <p>20 July 2022</p>
                    </div>
                    <div className="flex text-yellow-500 gap-[2px]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar className="text-gray-400" />
                    </div>
                  </div>
                </div>
                <p className="text-[#596780] text-[12px] w-full mt-2 lg:mt-0">
                  We are greatly helped by the services of the MORENT
                  Application. Morent has low prices and also a wide variety of
                  cars with good and comfortable facilities. In addition, the
                  service provided by the officers is also very friendly and
                  very polite.
                </p>
              </div>
            </div>
            <div className="flex justify-center m-6 text-[#90A3BF] text-[12px]">
              <p className="flex items-center">
                <span>Show All</span>
                <RiArrowDropDownLine />
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 px-8 lg:px-10 md:px-32 w-[94%]">
          <div className="text-[12px] text-[#90A3BF]">
            <p>Recent car</p>
          </div>
          <div className="text-[#3563E9] text-[12px]">
            <p>View All</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-between px-6">
            <CarContainer showAll={false} showRecommendedCount={4}/>
          </div>
      </div>
    </div>
  );
};

export default Details;
