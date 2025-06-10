import Logo from "../../assets/img/logobbek.jpg"
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const SideNav=()=>{
    return(
        <>
           <div className="fixed bg-white h-screen lg:w-[12rem] border border-solid border-blue-500">
                   <div className="flex items-center justify-start h-auto p-2.5 gap-1 border-b-2 relative">
                        <img src={Logo} alt="logo" className="h-6"/>
                        <h2 className="font-semibold text-sm">BBEK Church</h2>
                        <FaAlignLeft className="text-xl absolute right-[-24px] cursor-pointer"/>
                   </div>
                   <ul className="p-2 text-xs  text-gray-500">
                      <h3 className="font-medium tracking-wide my-2">STAFF PANEL</h3>
                      <li className="flex items-center gap-1 mt-3"><FaHome /><span className="font-normal flex-grow-1 ml-2" >DASHBOARD</span></li>
                      <li className="flex items-center gap-1 mt-3"><FaDatabase /><span className="font-normal flex-grow-1 ml-2" >CHURCH RECORDS</span><FaAngleRight /></li>
                      <li className="flex items-center gap-1 mt-3"><FaGift /><span className="font-normal flex-grow-1 ml-2" >SERVICES</span><FaAngleRight /></li>
                      <li className="flex items-center gap-1 mt-3"><FaCog /><span className="font-normal flex-grow-1 ml-2" >MAINTENANCE</span><FaAngleRight /></li>
                   </ul>
           </div>
          
        </>
    )
}