import { FaHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Search from "./Search";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import SideBar from "../ReusableComponents/SideBar";

const Navbar = () => {
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setIsMenuVisible(!isMenuVisible);
  };

  const showSidebar = location.pathname.includes('category') || location.pathname.includes('details');

  useEffect(() => {
    setIsSidebarVisible(false);
    setIsMenuVisible(false);
  }, [location]);

  return (
    <div className="py-4 bg-white sticky left-0 top-0">
      <nav className="flex items-center justify-between gap-2 lg:gap-4 px-[20px] lg:px-[3rem] md:px-[3rem]">
        <div className="flex items-center gap-4 lg:gap-10">
          <a href="/"><span className="text-[#3563E9] text-[20px] lg:text-[32px]">MORENT</span></a>
          <Search/>
        </div>
        <div>
          <ul className={`lg:flex items-center gap-6 lg:gap-4 absolute lg:static bg-white h-[40vh] lg:h-auto p-8 lg:p-0 top-[60px] right-0 flex-col lg:flex-row w-[30%] lg:w-full justify-between ${isMenuVisible ? "flex" : "hidden"}`}>
            <li className="lg:px-2 lg:py-2 mb-5 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600">
              <a href="/"><FaHeart /></a>
            </li>
            <li className="lg:px-2 lg:py-2 mb-5 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600">
              <a href="/"><IoMdNotifications /></a>
            </li>
            <li className="lg:px-2 lg:py-2 mb-5 lg:mb-0 rounded-full lg:border border-gray-200 text-gray-600">
              <a href="/"><IoSettingsSharp /></a>
            </li>
            <li className="rounded-full w-[35px] h-[35px]">
              <a href="/"><img src="/man.png" alt="face of a man to chest level" /></a>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden cursor-pointer bg-blue-600 rounded-[4px]" onClick={toggleSidebar}>
          <FiMenu className="size-8 text-white"/>
        </div>
      </nav>
      {showSidebar && (
        <aside className={`fixed lg:hidden md:hidden top-14 left-0 w-60 h-full bg-[#f3f4f5] text-white transition-transform transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <SideBar />
        </aside>
      )}
    </div>
  );
};



export default Navbar;







