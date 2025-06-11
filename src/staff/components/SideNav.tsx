import Logo from "../../assets/img/logobbek.jpg";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const SideNav = () => {
  return (
    <>
      <div className="fixed bg-transparent h-screen lg:w-[12rem] border border-solid border-blue-500 z-50">
        <div className="flex items-center px-2 justify-start h-12 gap-1 relative">
          <img src={Logo} alt="logo" className="h-6" />
          <h2 className="font-semibold text-sm">BBEK Church</h2>
          <FaAlignLeft className="text-xl absolute right-[-24px] cursor-pointer" />
        </div>
        <ul className="p-2 text-xs  text-gray-500">
          <h3 className="font-medium tracking-wide my-2">STAFF PANEL</h3>
          <li className="w-full py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100">
            <FaHome />
            <span className="font-normal flex-grow-1 ml-2">DASHBOARD</span>
          </li>
          <li className="w-full py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100">
            <FaDatabase />
            <span className="font-normal flex-grow-1 ml-2">CHURCH RECORDS</span>
            <FaAngleRight />
          </li>
          <div>
            <ul>
              <li>Member Record</li>
              <li>Events Records</li>
              <li>Tithes & Offerings</li>
              <li>Ministries</li>
              <li>Marriage Record</li>
            </ul>
          </div>
          <li className="w-full py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100">
            <FaGift />
            <span className="font-normal flex-grow-1 ml-2">SERVICES</span>
            <FaAngleRight />
          </li>
          <div>
            <ul>
              <li>Ministry Record</li>
              <li>Water Baptism</li>
              <li>Child Dedication</li>
              <li>Marriage</li>
            </ul>
          </div>
          <li className="w-full py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100">
            <FaCog />
            <span className="font-normal flex-grow-1 ml-2">MAINTENANCE</span>
            <FaAngleRight />
          </li>
          <div>
            <ul>
              <li>Message</li>
              <li>Audit Trial</li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
};
