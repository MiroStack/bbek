import { useEffect, useState } from "react";
import Logo from "../../assets/img/logobbek.jpg";
import { Link, useNavigate } from "react-router-dom";
type NavProps = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Navigation = ({ setShowLogin, setShowSide }: NavProps) => {
  const setSide = setShowSide;
  const setShow = setShowLogin;
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
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
  const displayLogin = () => {
    setShow(true);
    setShowSide(false);
  }
  const displaySide = () => {
    setSide(true);
  }

  return (
    <div className="w-[100%] h-auto top-0 flex items-center fixed z-50">
      <div className={`w-full  flex items-center gap-5 justify-between bg-slate-50 px-4 py-2 ${scrolled ? "bg-white text-black  shadow-md" : "bg-transparent text-black "} transition-all ease-in-out`}>
        <div className="flex flex-grow items-center gap-2">
          <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
          <div>
            <h1 className={`text-2xl font-bold tracking-wider ${scrolled ? " text-text-gray-800 " : " text-text-gray-800"}`}>BBEK</h1>
            <p className={`text-[0.5rem] tracking-wider  ${scrolled ? "text-gray-600" : " text-gray-600"} font-semibold`}>BIBLE BAPTIST OF EKLESSIA</p>
            <p className={`text-[0.5rem] tracking-wider  ${scrolled ? " text-gray-600 " : " text-gray-600"} font-semibold`}>KAWIT CAVITE</p>
          </div>
        </div>

        <ul className="flex items-center gap-5">
          <li className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>HOME</li>

          <div className="relative group">
            <li className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer">ABOUT</li>
            <div className="hidden group-hover:block fixed mt-18 bg-white text-black rounded p-3">
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <Link to="/landpage/about/aboutus">About Us</Link>
                <Link to="/landpage/about/leadersandofficers">Leaders and Officers</Link>
              </ul>
            </div>
          </div>
          <li className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer" onClick={() => navigate("/landpage/give")}>GIVE</li>
          <li className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer" onClick={() => navigate("/landpage/events/allevents")}>EVENT</li>
          <li className="font-semibold hover:text-blue-400 active:text-blue-600 cursor-pointer" onClick={() => navigate("/landpage/ministries")}>MINISTRY</li>
        </ul>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300" onClick={displayLogin}>
          Login
        </button>
      </div>
    </div>
  );
}