import { use, useEffect, useState } from "react";
import Logo from "../../../assets/img/logobbek.jpg"
import { FaAngleDown } from "react-icons/fa";
import { IoPersonSharp, IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { Cookies } from "../../../util/Cookies";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../datasource/redux/modules/hooks/hooks";
import { clearUserInfo } from "../../../datasource/redux/user/UserSlice";
import type { UserInfoModel } from "../../../datasource/models/User/UserInfoModel";
import { hideErrorDialog, hideLoader, hideSuccessDialog } from "../../../datasource/redux/dialog/DialogSlice";
import { LogoutFunction } from "../../../component/function/LogoutFunction";
export const Nav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutFunc = LogoutFunction();  
  const token = Cookies.getCookie("auth_token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [])
  // const userInfo = useAppSelector((state) => state.userInfo.value);
  const userInfo = sessionStorage.getItem("userInfo")
  const [userInfoState, setUserInfoState] = useState<UserInfoModel>(userInfo == null?  {} as UserInfoModel : JSON.parse(userInfo));
  const [showSidePanel, setSidePanel] = useState(false);
  const handleToggleSidePanel = () => {
    setSidePanel(!showSidePanel);
  };
  return (<div className="">
    <div className="flex items-center justify-start h-12 gap-1 border-b-2 relative">
      <div className="h-100  flex ml-auto items-center cursor-pointer p-2 hover:bg-gray-100 hover:rounded-md" onClick={handleToggleSidePanel}>
        <img src={Logo} alt="logo" className="h-6 rounded-md cursor-pointer" />
        <div className="flex items-center p-2">
          <div className="mx-2">
            <h4 className="text-[.7rem] font-semibold">{`${userInfoState.firstname} ${userInfoState.lastname}`}</h4>
            <p className="text-[.6rem] font-semibold text-gray-500">Staff</p>
          </div>
          <FaAngleDown className="font-normal text-gray-600 text-[.7rem]" />
        </div>
      </div>
      <div className={`${showSidePanel ? 'absolute' : 'hidden'} bottom-[-350%] right-2 h-40 w-52 shadow-md bg-white  flex flex-col p-2 rounded-md z-10`} onClick={handleToggleSidePanel}>
        <div className="flex items-center gap-2 p-2">
          <img src={Logo} alt="logo" className="h-6 rounded-md" />
          <div>
            <h4 className="text-[.8rem] font-semibold">{`${userInfoState.firstname} ${userInfoState.lastname}`}</h4>
            <p className="text-[.6rem] font-semibold text-gray-500">{`${userInfoState.email}`}</p>
          </div>
        </div>
        <hr className="my-2" />
        <ul className='flex flex-col gap-2'>
          <li className="flex items-center text-sm gap-1 font-semibold text-gray-600 hover:text-blue-500 cursor-pointer"><IoPersonSharp /> <span>My Account</span></li>
          <li className="flex items-center text-sm gap-1 font-semibold text-gray-600 hover:text-blue-500 cursor-pointer"><IoSettingsSharp /> <span>Settings</span></li>
          <li className="flex items-center text-sm gap-1 font-semibold text-red-600 hover:text-blue-500 cursor-pointer" onClick={() => logoutFunc.logout()}><IoLogOut /><span>Logout</span></li>
        </ul>

      </div>
    </div>

  </div>);
}