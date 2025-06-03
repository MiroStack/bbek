import { useState, useEffect, useRef } from "react"
import "../styles/Home.css"
import {Link} from "react-router-dom"
import {scroll} from "motion";
export const HomePage = (prop:any)=>{
    const [scrolled, setScrolled] = useState(false);


  return(
    <>
        <div className="w-screen min-h-screen overflow-x-hidden">
            <div className="w-full h-full relative">
              <div className="hero-wrapper w-100">
                <div className="hero-header z-10 text-white text-center">
                  <h1 className="text-6xl font-bold">
                      BIBLE BAPTIST EKKLESIA
                  </h1>

                  <ul className="lg:flex items-center justify-center gap-5 list-disc">
                      <li className="text-lg underline">
                          nurturing faith
                      </li>
                      <li className="text-lg underline">
                          building community
                      </li>
                      <li className="text-lg underline">
                          sharing God's love
                      </li>
                  </ul>

                
                      <Link to="/landpage/about" className="flex items-center justify-center my-6 hover: bg-transparent">
                        <div className="info-ctn mx-4 bg-white text-black rounded-3xl h-12 w-[200px] flex items-center justify-center hover:!bg-blue-950 hover:!text-white">
                            <span>PLAN YOUR VISIT </span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </Link>
                
                </div>
             </div>
             <div className="wave-container flex items-end h-[30%] w-[100%] z-10 absolute bottom-0 border-b-2">
                  <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#ffffff" fillOpacity="1" d="M0,160
                          C 360,80 1080,240 1440,160
                          L1440,320
                          L0,320
                          Z"/>
                  </svg>
                </div>
            </div>
            {/** */}
             <div className="w-[100vw] h-[100vh]">
          
            </div>
        </div>
        

    </>
  )
}