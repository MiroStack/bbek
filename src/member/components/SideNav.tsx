import Logo from "../../assets/img/logobbek.jpg";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaHeart, FaUserGroup } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import { IoGiftSharp, IoNewspaper } from "react-icons/io5";
import { IoWater } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Cookies } from "../../util/Cookies";
import { LuBaby } from "react-icons/lu";
export const SideNav = () => {
  const navigate = useNavigate();
  const [dropdown1, showDropdown1] = useState(false);
  const [dropdown2, showDropdown2] = useState(false);
  const [dropdown3, showDropdown3] = useState(false);

  const displayDropDown1 = () => showDropdown1(dropdown1 ? false : true);
  const displayDropDown2 = () => showDropdown2(dropdown2 ? false : true);
  const displayDropDown3 = () => showDropdown3(dropdown3 ? false : true);


  return (
    <>
      <div className="fixed overflow-y-auto overflow-x-hidden bg-white h-screen lg:w-[14rem] border border-solid border-blue-500 z-50">
        <div className="flex items-center px-2 justify-start h-12 gap-1 relative border-b-2">
          <img src={Logo} alt="logo" className="h-6" />
          <h2 className="font-semibold text-sm">BBEK Church</h2>
          <FaAlignLeft className="text-xl absolute right-[-24px] cursor-pointer" />
        </div>
        <ul className="p-2 text-xs text-gray-500 flex flex-col h-[90%]">
          <h3 className="font-medium tracking-wide my-2">MEMBER PANEL</h3>
          <li className="w-full text-sm py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={() => navigate("/member")}>
            <FaHome />
            <span className="font-normal flex-grow-1 ml-2">DASHBOARD</span>
          </li>
          <li className="w-full text-sm py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={displayDropDown1}>
            <IoPersonSharp />
            <span className="font-normal flex-grow-1 ml-2">MY PROFILE</span>
            <FaAngleRight />
          </li>
          <div>
            <ul className={`${dropdown1 ? "" : "hidden"} w-[80%] ml-auto ease-in-out transition-all delay-100`}>
              <Link to="my-profile" className="flex items-center gap-2 text-sm py-2"><IoPersonSharp /><span>My Profile</span></Link>
              <Link to="my-certificate" className="flex items-center gap-2 text-sm py-2"><FaAward /><span>My Certificate</span></Link>
            </ul>
          </div>
          <li className="w-full text-sm py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={displayDropDown2}>
            <FaCog />
            <span className="font-normal flex-grow-1 ml-2">SERVICES</span>
            <FaAngleRight />
          </li>
          <div>
            <ul className={`${dropdown2 ? "" : "hidden"} w-[80%] ml-auto ease-in-out transition-all delay-100`}>
              <Link to="my-donation" className="flex items-center gap-2 text-sm py-2"><IoGiftSharp /><span>My Donations</span></Link>
              <Link to="my-ministries" className="flex items-center gap-2 text-sm py-2"><FaUserGroup /><span>Ministries</span></Link>
              <Link to="my-waterbaptism" className="flex items-center gap-2 text-sm py-2"><IoWater /><span>Water Baptism</span></Link>
              <Link to="my-marriage" className="flex items-center gap-2 text-sm py-2"><IoHeart /><span>Marriage</span></Link>
              <Link to="my-childdedication" className="flex items-center gap-2 text-sm py-2"><LuBaby /><span>Child Dedication</span></Link>
              <Link to="my-events" className="flex items-center gap-2 text-sm py-2"><FaCalendar /><span>Church Events</span></Link>
            </ul>
          </div>
          <li className="text-sm w-full py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={displayDropDown3}>
            <IoChatboxSharp />
            <span className="font-normal flex-grow-1 ml-2">COMMUNICATION</span>
            <FaAngleRight />
          </li>
          <div>
            <ul className={`${dropdown3 ? "" : "hidden"} w-[80%] ml-auto ease-in-out transition-all delay-100`}>
              <Link to="my-message" className="flex items-center gap-2 text-sm py-2"><IoChatboxSharp /><span>Message</span></Link>
              <Link to="my-prayerrequest" className="flex items-center gap-2 text-sm py-2"><FaHeart /><span>Prayer Request</span></Link>
            </ul>
          </div>
         
        </ul>
      </div>
    </>
  );
};
