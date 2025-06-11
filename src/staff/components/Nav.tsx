import Logo from "../../assets/img/logobbek.jpg"
import { FaAlignLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
export const Nav=()=>{
    return(<>
                <div className="flex items-center justify-start h-12 gap-1 border-b-2 relative">
                       <div className="h-100 ml-auto flex items-center cursor-pointer p-2 hover:bg-gray-100 hover:rounded-md">
                         <img src={Logo} alt="logo" className="h-6 rounded-md"/>
                         <div className="flex items-center p-2">
                            <div className="mx-2">
                                <h4 className="text-[.7rem] font-semibold">Staff Member</h4>
                            <p className="text-[.6rem] font-semibold text-gray-500">Staff</p>
                            </div>
                            <FaAngleDown className="font-normal text-gray-600 text-[.7rem]"/>
                         </div>
                       </div>
                </div>
    
    </>);
}