import { FaHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Search from "./Search";


const Navbar = () => {
  return (
    <div className="py-4 bg-white sticky left-0 top-0">
      <nav className="flex items-center justify-between gap-2 lg:gap-4 px-[10px] lg:px-[6rem]">
        <div className="flex items-center gap-4 lg:gap-10">
          <span className="text-[#3563E9] text-[20px] lg:text-[32px]">
            MORENT
          </span>
          <Search/>
        </div>
        <div>
          <ul className="flex items-center gap-2 lg:gap-4">
            <li className="px-2 py-2 rounded-full border border-gray-200 text-gray-600">
              <a href="/"></a>
              <FaHeart />
            </li>
            <li className="px-2 py-2 rounded-full border border-gray-200 text-gray-600">
              <a href="/"></a>
              <IoMdNotifications />
            </li>
            <li className="px-2 py-2 rounded-full border border-gray-200 text-gray-600">
              <a href="/"></a>
              <IoSettingsSharp />
            </li>
            <li className="rounded-full w-[35px] h-[35px]">
              <a href="/"></a>
              <img src="/man.png" alt="face of a man to chest level" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
