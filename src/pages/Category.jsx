import React from "react";
import Card from "../ReusableComponents/Card";
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import Button from "../ReusableComponents/Button";
import SideBar from "../ReusableComponents/SideBar";
import EuroPart from "../components/EuroPart";

const Category = () => {
  return (
    <div className="flex gap-2 min-h-screen">
      <div className="bg-[#ffffff] mt-1 w-1/6 hidden md:hidden lg:block">
        <SideBar/>
      </div>
      <div className="lg:w-5/6 w-full px-12">
        <div className="w-full">
          <EuroPart/>
        </div>
        <div className="flex justify-center mt-6 gap-2 flex-wrap overflow-y-auto">
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
            <Button btnText="Show more car" className="mt-8 text-[12px] px-4 py-2"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
