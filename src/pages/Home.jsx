import React from "react";
import { MdLocalGasStation } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Button from "../ReusableComponents/Button";
import EuroPart from "../components/EuroPart";
import { useNavigate } from "react-router-dom";
import { Koenigsegg, NissanGT,} from "../assets/assets";
import CarContainer from "./../components/CarCard/CarContainer";
import Footer from "../components/Footer";
// import Jumbotron from "../components/jumbotron/jumbotron";

const Home = () => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate("/category");
  };
  return (
    <div className="w-[100%] min-h-screen">
      <main className="lg:px-[4rem] lg:py-[2rem] h-max bg-[#f6f7f9] pt-[2rem] p-[2rem]">
        <div className="lg:m-auto w-[100%]">
          {/* jumbotron */}
          {/* <div className="mt-[2rem] lg:flex flex-col items-center justify-center gap-[4rem]">
            <Jumbotron
              headText="The Best Platform for Car Rental"
              desc="Providing cheap car rental services and safe and comfortable facilities."
              img={carimage}
              className="bg-[#54a6ff]"
              // backdropImg={ellipse}
            />
            <Jumbotron
              headText="Easy way to rent a car at a low price"
              desc="Providing cheap car rental services and safe and comfortable facilities."
              img={car2}
              buttonStyle="button_light_blue"
              backdropImg={arrowsgroup}
            />
          </div> */}
          <div className="flex items-center gap-10 px-10 lg:px-4 flex-col lg:flex-row">
        <div className="w-[300px] md:w-[400px] lg:w-[100%] h-[280px] bg-[#54A6FF] rounded-[10px] px-3">
          <h2 className="text-[24px] text-white w-[220px]">
            The Best Platform for Car Rental
          </h2>
          <p className="text-white text-[12px] w-[240px] mt-2">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Button btnText="Rental car" className="mt-4" />
          <img 
          src="/carrental1.png" 
          alt="moving car" 
          className="w-[300px] h-[90px] mx-auto"
          />
        </div>
        <div className="w-[300px] md:w-[400px] lg:w-[100%] h-[280px] bg-[#3563E9] rounded-[10px] px-3">
          <h2 className="text-[24px] text-[white] w-[220px]">
            Easy way to rent a car at a low price
          </h2>
          <p className="text-white text-[12px] w-[240px] mt-2">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Button btnText="Rental car" className="bg-[#54A6FF] mt-4" />
          <img
            src="/carrental2.png"
            alt="moving car"
            className="w-[300px] h-[90px] mx-auto"
          />
        </div>
      </div>
          <div className="lg:w-[100%] w-[90%] mt-[4rem] px-4">
            <EuroPart/>
          </div>
          {/* view_all */}
          <div className="flex items-center justify-between mt-[2rem] px-4">
            <span className="font-medium text-[16px]">Popular Car</span>
            <Button btnText="View All" className="text-[#3563E9] cursor-pointer bg-[#f6f7f9]" />
          </div>
          <div className="flex items-center flex-col justify-between px-4">
            <CarContainer showAll={true}/>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[60px]">
          <Button
            btnText="Show More Cars"
            className="bg-blue-600 cursor-pointer text-white px-2 py-2"
            func={goToCategory}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;