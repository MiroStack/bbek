
import Logo from "../../assets/img/image.png"
import { FaBars } from "react-icons/fa6";
import {Link} from "react-router-dom"
import { LandPage } from "../landpage";
export const Nav = () =>{
    return(
        <>
        <nav className="flex items-center p-3 bg-transparent fixed w-full text-white ">
              <div className="flex items-center gap-2">
                  <img src={Logo} className="rounded-full h-12 w-12 object-cover "/>
                  <h3 className="font-semibold text-lg">BBEK</h3>
              </div>

            <ul className="hidden lg:flex grow items-center justify-center gap-5 font-bold">
                <Link to="/landpage" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent">HOME</Link>
                <Link to="/landpage/about" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent">ABOUT</Link>
                <Link to="/landpage/ministries" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent" >MINISTRIES</Link>
                <Link to="/landpage/event" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent">EVENTS</Link>
                <Link to="/landpage/live" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent">LIVE</Link>
                <Link to="/landpage/give" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent">GIVE</Link>
                <Link to="/landpage/beoneofus" className="block text-white hover:!text-gray-200 active:!text-black bg-transparent">BE ONE OF US</Link>
            </ul>

              <button className="bg-white text-black ml-auto">
                Login
              </button>
              <div className="lg:hidden border border-white ml-3 p-2 cursor-pointer">
                 <FaBars/>
              </div>

        </nav>
       </>);
}