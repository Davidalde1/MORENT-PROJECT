import { FaHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Search from "./Search";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useLocation} from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';

import SideBar from "../ReusableComponents/SideBar";
// import { useAuth } from "./Context/authContext";

const Navbar = () => {
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [likedCars, setLikedCars] = useState([]);
  // state for carCount 
  const [newCarsCount, setNewCarsCount] = useState(0);

  // contexts 
  // const {user} = useAuth();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setIsMenuVisible(!isMenuVisible);
  };

  const showSidebar = location.pathname.includes('category') || location.pathname.includes('details');

  useEffect(() => {
    setIsSidebarVisible(false);
    setIsMenuVisible(false);
  }, [location]);

// Liked cars and other functionalities
useEffect(() => {
  const storedLikedCars = JSON.parse(localStorage.getItem("likedCars")) || {};
  setLikedCars(storedLikedCars);
  // console.log(storedLikedCars);
  const checkForNewCars = async () => {
    try {
      const response = await fetch("https://morentb.vercel.app/api/cars");
      const {count} = await response.json();
      const oldCount = localStorage.getItem("carCount");
      if (oldCount && count > parseInt(oldCount)) {
        setNewCarsCount(count - parseInt(oldCount));
      }
    localStorage.setItem("carCount", count.toString());
    } catch (error) {
      console.log(error);
    } 
  };

  checkForNewCars();

  // set up an interval to check for new cars every 5 minutes 
  const interval = setInterval(checkForNewCars, 5 * 6 * 1000);
  return () => clearInterval(interval);
}, []);


  return (
    <div className="py-4 bg-white sticky left-0 top-0">
      <nav className="flex items-center justify-between gap-2 lg:gap-4 px-[20px] lg:px-[3rem] md:px-[3rem]">
        <div className="flex items-center gap-4 lg:gap-10">
          <a href="/"><span className="text-[#3563E9] text-[20px] lg:text-[32px]">MORENT</span></a>
          <Search/>
        </div>
        <div>
          <div className={`lg:flex items-center gap-6 lg:gap-4 absolute lg:static bg-white h-[40vh] lg:h-auto p-8 lg:p-0 top-[60px] right-0 flex-col lg:flex-row w-[30%] lg:w-full justify-between ${isMenuVisible ? "flex" : "hidden"}`}>
            <div className="lg:px-2 lg:py-2 mb-5 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600 relative">
              {Object.keys(likedCars).length > 0 ? (
                <div>
                  <div>
                  <FaHeart color="red"/>
                  <span className="absolute top-[-12px] left-[20px] border rounded-full p-1 px-[8px] bg-red-500 text-white text-[10px]">{Object.keys(likedCars).length}</span>
                  </div>
                </div>
              ) : ( 
              <IoMdHeartEmpty />
              )}
                
            </div>
            <div className="lg:px-2 lg:py-2 mb-5 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600 relative">
              <div>
              <IoMdNotifications 
               color={newCarsCount > 0 ? "#3563E9" : "inherit"}
              />
              {newCarsCount > 0 && <span className="absolute top-[-12px] left-[20px] border rounded-full p-1 px-[8px] bg-[#3563E9] text-white text-[10px]">{newCarsCount}</span>}
              </div>
            </div>
            <div className="lg:px-2 lg:py-2 mb-5 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600"
            onClick={() => navigate("/settings")}
            >
              <IoSettingsSharp />
            </div>
            <div className="rounded-full w-[35px] h-[35px]">
               <img src="/man.png" alt="face of a man to chest level" />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden cursor-pointer bg-blue-600 rounded-[4px]" onClick={toggleSidebar}>
          <FiMenu className="size-8 text-white"/>
        </div>
      </nav>
      {showSidebar && (
        <aside className={`fixed lg:hidden top-14 left-0 w-60 h-full bg-[#f3f4f5] text-white transition-transform transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <SideBar />
        </aside>
      )}
    </div>
  );
};

export default Navbar;
























