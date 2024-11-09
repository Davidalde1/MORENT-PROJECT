import React from "react";
import SideBar from "../ReusableComponents/SideBar";
import { IoIosStar } from "react-icons/io";
import Button from "../ReusableComponents/Button";
import CarContainer from "./../components/CarCard/CarContainer";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import Footer from "../components/Footer";


const Details = () => {
  const location = useLocation();
  const { car } = location.state;
  
  if (!car) {
    return <div>Car not found</div>
  }

  const navigate = useNavigate();
  const goToPayment = () => {
    navigate("/payment", { state: { car } });
  }; 

  return (
    <div>
    <div className="flex min-h-screen font-plus">
      <div className="w-1/6 bg-white mt-1 hidden lg:block">
        <SideBar />
      </div>
      <div className="w-full lg:w-5/6 px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-[#3563E9] rounded-[10px] p-6 text-white">
              <h2 className="text-2xl lg:text-3xl mb-2">Sports car with the best design and acceleration</h2>
              <p className="text-sm mb-4">Safety and comfort while driving a futuristic and elegant sports car</p>
              <img src={car.image} alt={car.carName} className="w-full max-w-[380px] mx-auto" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#3563E9] border-2 border-white rounded-[10px] p-4 flex items-center justify-center">
                <img src={car.image} alt={car.carName} className="w-full max-w-[116px]" />
              </div>
              <div className="rounded-[10px] overflow-hidden">
                <img src="/interior1.png" alt="interior of a car" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[10px] overflow-hidden">
                <img src="/interior2.png" alt="interior of a car" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[10px] shadow">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#1A202C]">{car.carName}</h1>
              <IoMdHeart className="text-red-600 text-2xl" />
            </div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                {[...Array(4)].map((_, i) => <IoIosStar key={i} />)}
                <IoIosStar className="text-gray-400" />
              </div>
              <p className="ml-2 text-sm text-[#596780]">440+ Reviewer</p>
            </div>
            <p className="text-[#596780] mb-6">{car.description}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <CarSpec label="TypeCar" value="Sport" />
              <CarSpec label="Steering" value={car.transmission} />
              <CarSpec label="Capacity" value={car.seatingCapacity} />
              <CarSpec label="Gasoline" value={car.fuelCapacity} />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-[#1A202C]">${car.price}<span className="text-sm text-[#90A3BF] font-normal">/day</span></p>
                <p className="text-[#90A3BF]">$100.00</p>
              </div>
              <Button btnText="Rent Now" func={goToPayment} />
            </div>
          </div>
        </div>
        <ReviewSection />
        <RecentCars />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const CarSpec = ({ label, value }) => (
  <div>
    <p className="text-[#90A3BF] text-sm">{label}</p>
    <p className="text-[#596780]">{value}</p>
  </div>
);

const ReviewSection = () => (
  <div className="bg-white p-6 mt-8 rounded-[10px] shadow">
    <div className="flex items-center mb-6">
      <h2 className="text-lg font-bold text-[#1A202C]">Reviews</h2>
      <span className="ml-2 bg-[#3563E9] px-2 py-1 text-xs text-white rounded">13</span>
    </div>
    <ReviewItem
      image="/man.png"
      name="Alex Stanton"
      role="CEO at Bukalapak"
      date="21 July 2022"
      review="We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
    />
    <ReviewItem
      image="/A lady.png"
      name="Skylar Dias"
      role="CEO at Amazon"
      date="20 July 2022"
      review="We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
    />
    <div className="text-center mt-6">
      <button className="text-[#90A3BF] text-sm flex items-center mx-auto">
        Show All <RiArrowDropDownLine className="text-xl" />
      </button>
    </div>
  </div>
);

const ReviewItem = ({ image, name, role, date, review }) => (
  <div className="flex mb-6">
    <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
    <div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-bold text-[#1A202C]">{name}</p>
          <p className="text-sm text-[#90A3BF]">{role}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#90A3BF]">{date}</p>
          <div className="flex text-yellow-500">
            {[...Array(4)].map((_, i) => <IoIosStar key={i} className="text-sm" />)}
            <IoIosStar className="text-sm text-gray-400" />
          </div>
        </div>
      </div>
      <p className="text-sm text-[#596780]">{review}</p>
    </div>
  </div>
);

const RecentCars = () => (
  <div className="mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-[#1A202C]">Recent Cars</h2>
      <button className="text-[#3563E9] text-sm">View All</button>
    </div>
    <div className="flex-wrap gap-6">
      <CarContainer showAll={false} showRecommendedCount={4} />
    </div>
  </div>
);

export default Details;





















