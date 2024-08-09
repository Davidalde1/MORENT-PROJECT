import React from "react";
import Card from "../ReusableComponents/Card";
import { MdLocalGasStation } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Button from "../ReusableComponents/Button";
import EuroPart from "../components/EuroPart";

const Home = () => {
  return (
    <div className="w-[80%] mx-auto font-plus mt-4">
       <div className="flex items-center gap-10 px-10 lg:px-4 flex-col lg:flex-row">
        <div className="w-[300px] md:w-[400px] lg:w-[600px] h-[250px] bg-[#54A6FF] rounded-[10px] px-3">
          <h2 className="text-[24px] text-white w-[220px]">
            The Best Platform for Car Rental
          </h2>
          <p className="text-white text-[12px] w-[240px] mt-2">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Button btnText="Rental car" className="mt-4" />
          <img
            src="/car_rental1.png"
            alt="moving car"
            className="w-[270px] h-[75px] mx-auto"
          />
        </div>
        <div className="w-[300px] md:w-[400px] lg:w-[600px] h-[250px] bg-[#3563E9] rounded-[10px] px-3">
          <h2 className="text-[24px] text-[white] w-[220px]">
            Easy way to rent a car at a low price
          </h2>
          <p className="text-white text-[12px] w-[240px] mt-2">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Button btnText="Rental car" className="bg-[#54A6FF] mt-4" />
          <img
            src="/car_rental2.png"
            alt="moving car"
            className="w-[270px] h-[75px] mx-auto "
          />
        </div>
      </div>
      <div>
        <EuroPart />
      </div>
      <div className="flex items-center justify-between mt-6 px-8 lg:px-4 md:px-32">
        <div className="text-[12px] text-[#90A3BF]">
          <p>Popular car</p>
        </div>
        <div className="text-[#3563E9] text-[12px]">
          <p>View All</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 flex-wrap gap-2">
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/carImage.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="90L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="NissanGT-R"
          heart={<FaHeart />}
          labelType="sport"
          image="/car2.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="80L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$80.00/"
        />
        <Card
          label="Rolls-Royce"
          heart={<FaHeart />}
          labelType="seden"
          image="/Car 3.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="70L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$96.00/"
        />
        <Card
          label="NissanGT-R"
          heart={<FaHeart />}
          labelType="sport"
          image="/Car4.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="80L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$80.00/"
        />
      </div>
      <div className="mt-6 px-8 lg:px-4 md:px-32">
        <p className="text-[12px] text-[#90A3BF]">Recomendation car car</p>
      </div>
      <div className="flex justify-center mt-6 flex-wrap gap-2">
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv3.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="70L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv brown.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="80L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv3.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="90L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv brown.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="80L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
      </div>
      <div className="flex justify-center mt-6 flex-wrap gap-2">
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv blue.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="70L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv4.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="80L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv blue.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="90L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
        <Card
          label="Koenigsegg"
          heart={<FaHeart />}
          labelType="sport"
          image="/suv4.png"
          imageAlt="moving car"
          gasIcon={<MdLocalGasStation />}
          gasUnit="80L"
          steeringIcon={<TbSteeringWheel />}
          motor="Manual"
          userIcon={<FaUserFriends />}
          userName="People"
          amount="$99.00/"
        />
      </div>
      <div className="flex items-center justify-center">
        <a href="/category">
          <Button
            btnText="Show more car"
            className="mt-8 text-[12px] px-6 py-2"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
