import Logo from "../../../assets/img/logobbek.jpg";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { IoWater } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Cookies } from "../../../util/Cookies";
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
        <div className="flex items-center px-2 justify-start h-12 gap-1 relative border-b-2 cursor-pointer"  onClick={()=>{
                           sessionStorage.setItem("navigateLandpage", "true");
                           navigate("/")
                         }}>
          <img src={Logo} alt="logo" className="h-6" />
          <h2 className="font-semibold text-sm">BBEK Church</h2>
          <FaAlignLeft className="text-xl absolute right-[-24px] cursor-pointer" />
        </div>
        <ul className="p-2 text-xs text-gray-500 flex flex-col h-[90%]">
          <h3 className="font-medium tracking-wide my-2">ADMIN PANEL</h3>
          <li className="w-full text-sm py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={() => navigate("/admin")}>
            <FaHome />
            <span className="font-normal flex-grow-1 ml-2">DASHBOARD</span>
          </li>
          <li className="w-full text-sm py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={displayDropDown1}>
            <FaDatabase />
            <span className="font-normal flex-grow-1 ml-2">CHURCH RECORDS</span>
            <FaAngleRight />
          </li>
          <div>
            <ul className={`${dropdown1 ? "" : "hidden"} w-[80%] ml-auto ease-in-out transition-all delay-100`}>
              <Link to="church-record/member-record" className="flex items-center gap-2 text-sm py-2"><FaUserGroup /><span>Member Record</span></Link>
              <Link to="church-record/church-leaders" className="flex items-center gap-2 text-sm py-2"><FaUserGroup /><span>Church Leaders</span></Link>
              <Link to="church-record/department-officers" className="flex items-center gap-2 text-sm py-2"><FaUserGroup /><span>Department Officers</span></Link>
              <Link to="church-record/event-record" className="flex items-center gap-2 text-sm py-2"><FaCalendar /><span>Events Records</span></Link>
              <Link to="church-record/tithe-offering" className="flex items-center gap-2 text-sm py-2"><FaGift /><span>Tithes & Offerings</span></Link>
              <Link to="church-record/ministries-record" className="flex items-center gap-2 text-sm py-2"><FaUserGroup /><span>Ministries</span></Link>
              <Link to="church-record/marriage-record" className="flex items-center gap-2 text-sm py-2"><IoNewspaper /><span>Marriage Record</span></Link>
            </ul>
          </div>
          <li className="w-full text-sm py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={displayDropDown2}>
            <FaGift />
            <span className="font-normal flex-grow-1 ml-2">SERVICES</span>
            <FaAngleRight />
          </li>
          <div>
            <ul className={`${dropdown2 ? "" : "hidden"} w-[80%] ml-auto ease-in-out transition-all delay-100`}>
              <Link to="service/waterbaptism" className="flex items-center gap-2 text-sm py-2"><IoWater /><span>Water Baptism</span></Link>
              <Link to="service/child-dedication" className="flex items-center gap-2 text-sm py-2"><IoNewspaper /><span>Child Dedication</span></Link>
              <Link to="service/marriage-record" className="flex items-center gap-2 text-sm py-2"><IoHeart /><span>Marriage</span></Link>
            </ul>
          </div>
          <li className="text-sm w-full py-2 px-1 flex items-center gap-1 cursor-pointer hover:bg-green-100" onClick={displayDropDown3}>
            <FaCog />
            <span className="font-normal flex-grow-1 ml-2">MAINTENANCE</span>
            <FaAngleRight />
          </li>
          <div>
            <ul className={`${dropdown3 ? "" : "hidden"} w-[80%] ml-auto ease-in-out transition-all delay-100`}>
              <Link to="maintenance/message" className="flex items-center gap-2 text-sm py-2"><IoChatboxSharp /><span>Message</span></Link>
              <Link to="maintenance/audit-trial" className="flex items-center gap-2 text-sm py-2"><IoNewspaper /><span>Audit Trial</span></Link>
            </ul>
          </div>
         
        </ul>
      </div>
    </>
  );
};
