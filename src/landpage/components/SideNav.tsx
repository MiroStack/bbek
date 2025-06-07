import { FaAngleDown } from "react-icons/fa6";
import Logo from "../../assets/img/logobbek.jpg"
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
type SideNavProps = {
  side:boolean  
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SideNav:React.FC<SideNavProps> = ({side, setShowSide, setShowLogin}) => {
    const showSide = side;
    const setSide = setShowSide;
    const setLogin = setShowLogin;
    const closeSide = ()=>{
        setSide(false)
    }
    const displayLogin=()=>{
        setLogin(true);
        setSide(false);
    }
    const [dropAbout, setDropAbout] = useState(false);
    const displayDropdownAbout = () => {
        setDropAbout(dropAbout ? false : true);
    }
    const [dropEvent, setDropEvent] = useState(false);
    const displayDropdownEvent = () => {
        setDropEvent(dropEvent ? false : true);
    }
    const [dropBeOne, setDropBeOne] = useState(false);
    const displayDropdownBeOne = () => {
        setDropBeOne(dropBeOne ? false : true);
    }
    return (
        <>
            <div className={`overflow-x-auto bg-white lg:w-[20rem] h-[100vh] p-3 rounded-tl-lg rounded-bl-lg shadow-lg items-center justify-center flex-col z-50  top-1/2 -translate-y-1/2 fixed ${showSide?"right-0" : "right-[-300px]"} transition-all duration-300 ease-in-out delay-700`}>
                <IoMdClose className="ml-auto hover:text-red-600 hover:text-lg ease-in-out all delay-200 cursor-pointer" onClick={closeSide}/>
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className="h-12" />
                    <h3 className="text-md font-semibold"> Bible Baptist Ekklesia of Kawit</h3>
                </div>
                <hr className="my-3" />
                <ul className="flex flex-col mt-2 items-center justify-center gap-2 font-bold ease-in-out all delay-200">
                    <div className="relative group">
                        <Link to="/landpage" className={`block hover:!text-gray-200 active:!text-black bg-transparent`}>HOME</Link>
                    </div>
                    <div className="relative group ">
                        <h3
                            className={` hover:!text-gray-200 active:!text-black bg-transparent flex items-center gap-1 cursor-pointer`}
                            onClick={displayDropdownAbout}
                        >
                            ABOUT
                        </h3>
                    </div>

                    <div className={`${dropAbout ? "" : "hidden"} mt-18 bg-gray-200 w-100 text-black rounded p-3`}>
                        <ul className="flex flex-col gap-2 text-sm font-normal">
                            <Link to="/landpage/about/aboutus">About Us</Link>
                            <Link to="/landpage/about/mission">Mission</Link>
                            <Link to="/landpage/about/vision">Vision</Link>
                            <Link to="/landpage/about/leadership">Leadership</Link>
                            <Link to="/landpage/about/officers">Church Officers</Link>
                        </ul>
                    </div>
                    <div className="relative group"><Link to="/landpage/ministries" className={`block hover:!text-gray-200 active:!text-black bg-transparent`} >MINISTRIES</Link></div>
                    <div className="relative group ">
                        <h3
                            onClick={displayDropdownEvent}
                            className={` hover:!text-gray-200 active:!text-black bg-transparent flex items-center gap-1 cursor-pointer`}
                        >
                            EVENTS
                        </h3>
                    </div>
                    <div className={`${dropEvent ? "" : "hidden"} mt-18 bg-gray-200 w-100 text-black rounded p-3`}>
                        <ul className="flex flex-col gap-2 text-sm font-normal">
                            <Link to="/landpage/events/allevents">All Events</Link>
                            <Link to="/landpage/events/upcomingevents">Upcoming Events</Link>
                            <Link to="/landpage/events/yearlyevents">Yearly Events</Link>
                        </ul>
                    </div>
                    <div className="relative group"> <Link to="/landpage/live" className={`block hover:!text-gray-200 active:!text-black bg-transparent`}>LIVE</Link></div>
                    <div className="relative group"> <Link to="/landpage/give" className={`block hover:!text-gray-200 active:!text-black bg-transparent`}>GIVE</Link></div>
                    <div className="relative group ">
                        <h3
                            className={`cursor-pointer hover:!text-gray-200 active:!text-black bg-transparent flex items-center gap-1`}
                            onClick={displayDropdownBeOne}
                        >
                            BE ONE OF US
                        </h3>
                    </div>
                    <div className={`${dropBeOne?"":"hidden"} mt-18 bg-gray-200 w-100 text-black rounded p-3`}>
                        <ul className="flex flex-col gap-2 text-sm font-normal">
                            <Link to="/landpage/beoneofus/waterbaptism">Water Baptism</Link>
                            <Link to="/landpage/beoneofus/sendprayer">Send a Prayer</Link>
                        </ul>
                    </div>
                </ul>
                <hr className="my-3" />
                <button className="bg-blue-950 hover:bg-blue-500 w-100 h-10 text-white rounded-lg"
                        onClick={displayLogin}>
                    Login
                </button>
            </div>
        </>
    )
}