import { useEffect, useState } from "react";
import Logo from "../../assets/img/logobbek.jpg";
export const Navigation=()=>{
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
    return(
      <div className="w-[100%] h-auto top-0 flex items-center fixed z-50">
          <div className={`w-full  flex items-center justify-between bg-slate-50 px-4 py-2 ${scrolled ? "bg-white text-black  shadow-md" : "bg-transparent text-black "} transition-all ease-in-out`}>
            <div className="flex items-center gap-2">
                  <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
                  <div>
                    <h1 className={`text-xl font-bold tracking-wider ${scrolled ? " text-text-gray-800 " : " text-text-gray-800"}`}>BBEK</h1>
                    <p className={`text-[0.5rem] tracking-wider  ${scrolled ? "text-gray-600" : " text-gray-600"} font-semibold`}>BIBLE BAPTIST OF EKLESSIA</p>
                    <p className={`text-[0.5rem] tracking-wider  ${scrolled ? " text-gray-600 " : " text-gray-600"} font-semibold`}>KAWIT CAVITE</p>
                  </div>
            </div>

            <ul className="flex items-center gap-5">
                <li className="font-semibold hover:text-blue-400 cursor-pointer">HOME</li>
                <li className="font-semibold hover:text-blue-400 cursor-pointer">ABOUT</li>
                <li className="font-semibold hover:text-blue-400 cursor-pointer">GIVE</li>
                <li className="font-semibold hover:text-blue-400 cursor-pointer">EVENT</li>
                <li className="font-semibold hover:text-blue-400 cursor-pointer">MINISTRY</li>
            </ul>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Login
            </button>
        </div>
      </div>
    );
}