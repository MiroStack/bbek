
import Logo from "../../../assets/img/image.png"
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

type NavProps = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSide:React.Dispatch<React.SetStateAction<boolean>>;
};
export const Nav: React.FC<NavProps> = ({ setShowLogin, setShowSide}) => {
  const setSide = setShowSide;
  const setShow =setShowLogin;
  const [scrolled, setScrolled] = useState(false);
  const textColor = scrolled ? "text-black" : "text-white";
  useEffect(() => {
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


  const displayLogin = ()=>{
    setShow(true);
    setShowSide(false);
  }
  const displaySide =()=>{
    setSide(true);
  }


  return (
    <>
      <nav className={`flex items-center p-3  fixed w-full z-50 ${scrolled ? "bg-white text-black mynav" : "bg-transparent text-white"} transition-all ease-in-out`}>
        <div className="flex items-center gap-2">
          <img src={Logo} className="rounded-full h-12 w-12 object-cover " />
          <div>
            <h3 className="font-semibold text-lg">BBEK</h3>
            <p className={`text-sm ${scrolled ? "text-gray-950" : ""}`}>Kawit, Cavite</p>
          </div>

        </div>
        <ul className="hidden lg:flex grow items-center justify-center gap-5 font-bold">
          <div className="relative group">
            <Link to="/landpage" className={`block ${textColor} hover:!text-gray-200 active:!text-black bg-transparent`}>HOME</Link>
          </div>
          <div className="relative group ">
            <Link
              to="/landpage/about/aboutus"
              className={` hover:!text-gray-200 active:!text-black bg-transparent flex items-center gap-1`}
            >
              ABOUT <FaAngleDown />
            </Link>

            <div className="hidden group-hover:block fixed mt-18 bg-white text-black rounded p-3">
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <Link to="/landpage/about/aboutus">About Us</Link>
                <Link to="/landpage/about/mission">Mission</Link>
                <Link to="/landpage/about/vision">Vision</Link>
                <Link to="/landpage/about/leadership">Leadership</Link>
                <Link to="/landpage/about/officers">Church Officers</Link>
              </ul>
            </div>
          </div>
          <div className="relative group"><Link to="/landpage/ministries" className={`block ${textColor} hover:!text-gray-200 active:!text-black bg-transparent`} >MINISTRIES</Link></div>
          <div className="relative group ">
            <Link
              to="/landpage/events/allevents"
              className={` hover:!text-gray-200 active:!text-black bg-transparent flex items-center gap-1`}
            >
              EVENTS <FaAngleDown />
            </Link>

            <div className="hidden group-hover:block fixed mt-18 bg-white text-black rounded p-3">
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <Link to="/landpage/events/allevents">All Events</Link>
                <Link to="/landpage/events/upcomingevents">Upcoming Events</Link>
                <Link to="/landpage/events/yearlyevents">Yearly Events</Link>
              </ul>
            </div>
          </div>
          <div className="relative group"> <Link to="/landpage/live" className={`block ${textColor} hover:!text-gray-200 active:!text-black bg-transparent`}>LIVE</Link></div>
          <div className="relative group"> <Link to="/landpage/give" className={`block ${textColor} hover:!text-gray-200 active:!text-black bg-transparent`}>GIVE</Link></div>
          <div className="relative group ">
            <Link
              to="/landpage/beoneofus/waterbaptism"
              className={` ${textColor} hover:!text-gray-200 active:!text-black bg-transparent flex items-center gap-1`}
            >
              BE ONE OF US <FaAngleDown />
            </Link>

            <div className="hidden group-hover:block fixed mt-18 bg-white text-black rounded p-3">
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <Link to="/landpage/beoneofus/waterbaptism">Water Baptism</Link>
                <Link to="/landpage/beoneofus/sendprayer">Send a Prayer</Link>
              </ul>
            </div>
          </div>
        </ul>

        <button className={`${scrolled ? "bg-black text-white" : "bg-white text-black"} hidden lg:block h-10 w-[100px] rounded-lg  font-semibold ml-auto hover:!bg-blue-950 hover:!text-white`}
                onClick={displayLogin}>
          Login
        </button>
        <div className="lg:hidden border border-white p-2 cursor-pointer ml-auto" onClick={displaySide}>
          <FaBars />
        </div>

      </nav>
    </>);
}