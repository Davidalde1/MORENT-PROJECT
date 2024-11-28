import { FaHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Search from "./Search";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';

import SideBar from "../ReusableComponents/SideBar";
import { useAuth } from "./Context/authContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [likedCars, setLikedCars] = useState([]);
  // state for carCount 
  const [newCarsCount, setNewCarsCount] = useState(0);

  // contexts 
  const {user, logout} = useAuth();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
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
      const data = await response.json();
      const currentCount = data.length;
      const oldCount = localStorage.getItem("carCount");
      
      if (oldCount) {
        const difference = currentCount - parseInt(oldCount);
        if (difference > 0) {
          setNewCarsCount(difference);
        }
      }
      
      localStorage.setItem("carCount", currentCount.toString());
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
    <div className="py-4 bg-white sticky left-0 top-0 z-50">
      <nav className="flex items-center justify-between gap-2 lg:gap-4 px-[20px] lg:px-[3rem] md:px-[3rem]">
        <div className="flex items-center gap-4 lg:gap-10">
          <a href="/"><span className="text-[#3563E9] text-[20px] lg:text-[32px]">MORENT</span></a>
          <Search/>
        </div>
        <div>
          <div className={`lg:flex items-center gap-6 lg:gap-4 absolute lg:static bg-white h-auto lg:h-auto p-6 lg:p-0 top-[60px] right-0 flex-col lg:flex-row w-[30%] md:w-[40%] lg:w-full justify-between shadow-lg lg:shadow-none rounded-lg lg:rounded-none transition-all duration-300 z-50 ${isMenuVisible ? "flex" : "hidden"}`}>
            <div className="lg:px-3 lg:py-2 mb-4 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600 relative hover:bg-gray-50 transition-all duration-200 cursor-pointer">
              {Object.keys(likedCars).length > 0 ? (
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <FaHeart color="red" className="text-xl hover:scale-110 transition-transform"/>
                    <span className="absolute top-[-22px] right-[-14px] border rounded-full p-1 px-[8px] bg-red-500 text-white text-[10px] animate-pulse">{Object.keys(likedCars).length}</span>
                  </div>
                </div>
              ) : ( 
                <IoMdHeartEmpty className="text-xl hover:scale-110 transition-transform"/>
              )}
            </div>
            <div className="lg:px-3 lg:py-2 mb-4 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600 relative hover:bg-gray-50 transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-center">
                <IoMdNotifications 
                  color={newCarsCount > 0 ? "#3563E9" : "inherit"}
                  className="text-xl hover:scale-110 transition-transform"
                />
                {newCarsCount > 0 && <span className="absolute top-[-12px] right-[-12px] border rounded-full p-1 px-[8px] bg-[red] text-white text-[10px] animate-pulse">{newCarsCount}</span>}
              </div>
            </div>
            <div className="lg:px-3 lg:py-2 mb-4 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600 cursor-pointer hover:bg-gray-50 transition-all duration-200"
              onClick={() => navigate('/settings')}
            >
              <IoSettingsSharp className="text-xl hover:scale-110 transition-transform"/>
            </div>
            <div className="rounded-full w-[40px] h-[40px] overflow-hidden border-2 border-blue-500 hover:border-blue-600 transition-all duration-200 cursor-pointer">
               <img src="/man.png" alt="face of a man to chest level" className="w-full h-full object-cover hover:scale-110 transition-transform"/>
            </div>
            <div className="w-full lg:w-auto">
              {user && (
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold rounded-full w-[90px] sm:w-[100px] mx-auto lg:w-[90px] h-[32px] sm:h-[35px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-1 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Logout</span>
                </button>
              )}
            </div>   
          </div>
        </div>
        <div className="flex lg:hidden cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-[4px] transition-colors duration-200" onClick={toggleSidebar}>
          <FiMenu className="size-8 text-white"/>
        </div>
      </nav>
      {showSidebar && (
        <aside className={`fixed lg:hidden top-0 left-0 w-64 h-full bg-[#f3f4f5] text-white shadow-lg transition-all duration-300 transform z-40 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <SideBar />
        </aside>
      )}
    </div>
  );
};

export default Navbar;





















