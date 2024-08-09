import React from "react";
import SideBar from "../ReusableComponents/SideBar";
import { IoIosStar } from "react-icons/io";
import Button from "../ReusableComponents/Button";
import Card from "../ReusableComponents/Card";
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Details = () => {
  return (
    <div className="flex gap-8 min-h-screen font-plus">
      <div className="bg-[#ffffff] mt-1 w-1/6 hidden md:hidden lg:block">
        <SideBar />
      </div>
      <div>
        <div className="flex flex-row mt-4 gap-10">
          <div>
            <div className="w-[300px] md:w-[400px] lg:w-[500px] h-[250px] bg-[#3563E9] rounded-[10px] px-3">
              <h2 className="text-[24px] text-[white] w-[370px]">
                Sports car with the best design and acceleration
              </h2>
              <p className="text-white text-[12px] w-[284px] mt-2">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>
              <img
                src="/car_rental2.png"
                alt="moving car"
                className="w-[380px] h-[120px] mx-auto "
              />
            </div>
            <div className="flex flex-row gap-5 mt-4">
              <div className="w-[153PX] h-[127px] bg-[#3563E9] border-2 border-white px-4 py-9">
                <img
                  src="/car_rental2.png"
                  alt="moving car"
                  className="w-[116px] h-[36px]"
                />
              </div>
              <div className="w-[153PX] h-[124px]">
                <img src="/interior1.png" alt="interior of a car" />
              </div>
              <div className="w-[153PX] h-[124px]">
                <img src="/interior2.png" alt="interior of a car" />
              </div>
            </div>
          </div>
          <div className="bg-white px-4">
            <div className="mt-3">
              <h2 className="text-[28px] text-[#1A202C] font-bold">
                Nissan GT - R
              </h2>
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
            <p className="w-[440px] mt-7 text-[#596780] text-[18px]">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
            <div className="flex flex-row justify-between mt-7">
              <p className="flex flex-col gap-3 text-[#90A3BF] text-[14px]">
                <span>TypeCar</span>Sterling
              </p>
              <p className="flex flex-col gap-3 text-[#596780] text-[14px]">
                <span>Sport</span>Manual
              </p>
              <p className="flex flex-col gap-3 text-[#90A3BF] text-[14px]">
                <span>Capacity</span>Gasoline
              </p>
              <p className="flex flex-col gap-3 text-[#596780] text-[14px]">
                <span>2Person</span>70L
              </p>
            </div>
            <div className="flex items-center justify-between mt-7">
              <div>
                <div className="flex items-center text-[#90A3BF]">
                  <p>
                    <span className="text-[24px] text-[#1A202C] font-bold">
                      $80.00/
                    </span>
                  </p>
                  day
                </div>
                <div className="text-[#90A3BF]">
                  <p>$100.00</p>
                </div>
              </div>
              <div>
                <a href="/payment">
                  <Button btnText="Rent Now" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white px-4 py-2 mt-5">
            <div className="flex items-center flex-row">
              <div className="text-[#1A202C] text-[16px] font-bold">
                Reviews
              </div>
              <div className="bg-[#3563E9] px-2 text-[12px] text-[#f5f5f3] shadow">
                13
              </div>
            </div>
            <div className="flex  flex-row gap-4 mt-6">
              <div>
                <img
                  src="/man.png"
                  alt="a man face"
                  className="w-[45px] h-[40px]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="flex flex-col text-[12px] text-[#90A3BF]">
                    <span className="text-[#1A202C] text-[14px] font-bold">
                      Alex Stanton
                    </span>
                    CEO at Bukalapak
                  </p>
                  <div className="flex flex-col items-end">
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
                <p className="text-[#596780] text-[12px] w-[896px]">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
            <div className="flex  flex-row gap-4 mt-6">
              <div>
                <img
                  src="/A lady.png"
                  alt="a lady face"
                  className="w-[45px] h-[40px]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="flex flex-col text-[12px] text-[#90A3BF]">
                    <span className="text-[#1A202C] text-[14px] font-bold">
                      Skylar Dias
                    </span>
                    CEO at Amazon
                  </p>
                  <div className="flex flex-col items-end">
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
                <p className="text-[#596780] text-[12px] w-[896px]">
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
        <div className="flex items-center justify-between mt-6 px-8 lg:px-4 md:px-32">
          <div className="text-[12px] text-[#90A3BF]">
            <p>Recent car</p>
          </div>
          <div className="text-[#3563E9] text-[12px]">
            <p>View All</p>
          </div>
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
      </div>
    </div>
  );
};

export default Details;
