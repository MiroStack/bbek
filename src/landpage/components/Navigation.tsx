import Logo from "../../assets/img/logobbek.jpg";
export const Navigation=()=>{
    return(
        <div className="w-full shadow-md  flex items-center justify-between bg-slate-50 px-4 py-2">
            <div className="flex items-center gap-2">
                  <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
                  <div>
                    <h1 className="text-xl font-bold tracking-wider text-gray-800 ">BBEK</h1>
                    <p className="text-[0.5rem] tracking-wider text-gray-600 font-semibold">BIBLE BAPTIST OF EKLESSIA</p>
                    <p className="text-[0.5rem] tracking-wider text-gray-600 font-semibold">KAWIT CAVITE</p>
                  </div>
            </div>

            <ul className="flex items-center gap-5">
                <li className="font-semibold hover:text-blue-600 cursor-pointer">HOME</li>
                <li className="font-semibold hover:text-blue-600 cursor-pointer">ABOUT</li>
                <li className="font-semibold hover:text-blue-600 cursor-pointer">GIVE</li>
                <li className="font-semibold hover:text-blue-600 cursor-pointer">EVENT</li>
                <li className="font-semibold hover:text-blue-600 cursor-pointer">MINISTRY</li>
            </ul>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Login
            </button>
        </div>
    );
}