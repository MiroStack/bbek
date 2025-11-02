import { useEffect, useState } from "react";
import Logo from "../../../assets/img/logobbek.jpg";
import { Link, useNavigate } from "react-router-dom";
import type { UserInfoModel } from "../../../datasource/models/User/UserInfoModel";
import { IoLogOut, IoPersonSharp, IoSettingsSharp } from "react-icons/io5";
import { LogoutFunction } from "../../../component/function/LogoutFunction";
import { FaAngleDown, FaHandPaper, FaServicestack, FaUserCircle } from "react-icons/fa";
import { FaMessage, FaUpwork } from "react-icons/fa6";
type NavProps = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Navigation = ({ setShowLogin, setShowSide }: NavProps) => {
  const setSide = setShowSide;
  const setShow = setShowLogin;
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [isNavigateLandpage, setIsNavigateLandpage] = useState<boolean>(false);
  const [isMemberLandPage, setIsMemberLandpage] = useState<boolean>(false);
  const textColor = scrolled ? "text-black" : "text-white";
  const logoutFunc = LogoutFunction();
  const userInfo = sessionStorage.getItem("userInfo");
  const [userInfoState, setUserInfoState] = useState<UserInfoModel>(
    userInfo == null ? ({} as UserInfoModel) : JSON.parse(userInfo)
  );
  const [showSidePanel, setSidePanel] = useState(false);
  const handleToggleSidePanel = () => {
    setSidePanel(!showSidePanel);
  };

  useEffect(() => {
    const isNavigate: boolean =
      sessionStorage.getItem("navigateLandpage") === "true";
    const isMember: boolean = sessionStorage.getItem("isMember") === "true";

    setIsMemberLandpage(isMember);
    setIsNavigateLandpage(isNavigate);
    const onScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollY > totalHeight / 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const displayLogin = () => {
    setShow(true);
    setShowSide(false);
  };
  const displaySide = () => {
    setSide(true);
  };
  const goToDashboard = () => {
    sessionStorage.removeItem("navigateLandpage");
    navigate("/");
  };

  return (
    <div className="w-[100%] h-auto top-0 flex items-center fixed z-10 ">
      <div
        className={`w-full  flex items-center gap-5 justify-between bg-slate-50 px-4 py-2 ${
          scrolled
            ? "bg-white text-black  shadow-md"
            : "bg-transparent text-black  "
        } transition-all ease-in-out`}
      >
        <div className="flex flex-grow items-center gap-2">
          <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
          <div>
            <h1
              className={`text-2xl font-bold tracking-wider ${
                scrolled ? " text-text-gray-800 " : " text-text-gray-800"
              }`}
            >
              BBEK
            </h1>
            <p
              className={`text-[0.5rem] tracking-wider  ${
                scrolled ? "text-gray-600" : " text-gray-600"
              } font-semibold`}
            >
              BIBLE BAPTIST OF EKLESSIA
            </p>
            <p
              className={`text-[0.5rem] tracking-wider  ${
                scrolled ? " text-gray-600 " : " text-gray-600"
              } font-semibold`}
            >
              KAWIT CAVITE
            </p>
          </div>
        </div>
        <ul className="flex items-center gap-5">
          <li
            className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            HOME
          </li>

          <div className="relative group">
            <li className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer">
              ABOUT
            </li>
            <div className="hidden group-hover:block fixed mt-18 bg-white text-black rounded p-3">
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <Link to="/landpage/about/aboutus">About Us</Link>
                <Link to="/landpage/about/leadersandofficers">
                  Leaders and Officers
                </Link>
              </ul>
            </div>
          </div>
          <li
            className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer"
            onClick={() => navigate("/landpage/give")}
          >
            GIVE
          </li>
          <li
            className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer"
            onClick={() => navigate("/landpage/events/allevents")}
          >
            EVENT
          </li>
          <li
            className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer"
            onClick={() => navigate("/landpage/ministries/allministry")}
          >
            MINISTRY
          </li>
        </ul>
        {isMemberLandPage ? (
          <div className="flex items-center justify-start h-12 gap-1  relative">
            <div
              className="h-100  flex ml-auto items-center cursor-pointer p-2 hover:bg-gray-100 hover:rounded-md"
              onClick={handleToggleSidePanel}
            >
              <FaUserCircle
                className="h-8 text-blue-500 rounded-md cursor-pointer"
              />
              <div className="flex items-center p-2">
                <div className="mx-2">
                  <h4 className="text-[.7rem] font-semibold">{`${userInfoState.firstname} ${userInfoState.lastname}`}</h4>
                  <p className="text-[.6rem] font-semibold text-gray-500">
                    Admin
                  </p>
                </div>
                <FaAngleDown className="font-normal text-gray-600 text-[.7rem]" />
              </div>
            </div>
            <div
              className={`${
                showSidePanel ? "absolute" : "hidden"
              } bottom-[-500%] right-2 h-auto w-52 shadow-md bg-white  flex flex-col p-2 rounded-md z-10`}
              onClick={handleToggleSidePanel}
            >
              <div className="flex items-center gap-2 p-2">
                <img src={Logo} alt="logo" className="h-6 rounded-md" />
                <div>
                  <h4 className="text-[.8rem] font-semibold">{`${userInfoState.firstname} ${userInfoState.lastname}`}</h4>
                  <p className="text-[.6rem] font-semibold text-gray-500">{`${userInfoState.email}`}</p>
                </div>
              </div>
              <hr className="my-2" />
              <ul className="flex flex-col gap-2">
                <li className="flex items-center text-sm gap-1 font-semibold text-gray-600 hover:text-blue-500 cursor-pointer">
                  <IoPersonSharp /> <span>My Account</span>
                </li>
                <li className="flex items-center text-sm gap-1 font-semibold text-gray-600 hover:text-blue-500 cursor-pointer">
                  <FaHandPaper /> <span>Services</span>
                </li>
                <li className="flex items-center text-sm gap-1 font-semibold text-gray-600 hover:text-blue-500 cursor-pointer">
                  <FaMessage /> <span>Message</span>
                </li>
                <li className="flex items-center text-sm gap-1 font-semibold text-gray-600 hover:text-blue-500 cursor-pointer">
                  <IoSettingsSharp /> <span>Settings</span>
                </li>
                <li
                  className="flex items-center text-sm gap-1 font-semibold text-red-600 hover:text-blue-500 cursor-pointer"
                  onClick={() => logoutFunc.logout()}
                >
                  <IoLogOut />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={isNavigateLandpage ? goToDashboard : displayLogin}
          >
            {isNavigateLandpage ? "Dashboard" : "Login"}
          </button>
        )}
      </div>
    </div>
  );
};
