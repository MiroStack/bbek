import { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { easeInOut, scroll } from "motion";
import image1 from "../../assets/img/hero2.jpg";
import image2 from "../../assets/img/hero.jpg";
import image3 from "../../assets/img/hero4.jpg";
import image4 from "../../assets/img/hero5.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar } from "react-icons/fa6";
export const Home = (prop: any) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);
  return (
    <>
      <div className="w-screen min-h-screen overflow-x-hidden">
        <div className="w-full h-full relative">
          {/** hero*/}
          <div className="hero-wrapper w-100 h-screen flex items-center justify-center">
            {/* <div className="z-10 text-white text-center ">
              <h1 className="text-6xl font-bold">
                BIBLE BAPTIST EKKLESIA
              </h1>
              <ul className="lg:flex items-center justify-center gap-5 list-disc">
                <li className="text-xl underline">
                  nurturing faith
                </li>
                <li className="text-xl underline">
                  building community
                </li>
                <li className="text-xl underline">
                  sharing God's love
                </li>
              </ul>
              <Link to="/landpage/about/aboutus" className="flex items-center justify-center my-6 hover: bg-transparent">
                <div className="info-ctn mx-4 bg-white text-black rounded-3xl h-12 w-[200px] flex items-center justify-center hover:!bg-blue-950 hover:!text-white">
                  <span>PLAN YOUR VISIT </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Link>
            </div> */}


            <motion.div
              className="shadow-sm w-[80%] h-[26rem] mt-2 relative">
              <img src={images[currentImage]} alt="" className="absolute h-100 w-100 object-cover rounded-md transition-all ease-in-out " />
              <div className="absolute bottom-10 left-10 text-gray-100">
                <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className="">A Place to Grow in Faith, Hope, and Love</motion.p>
                <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className="text-xl font-bold">BIBLE BAPTIST OF EKLESSIA KAWIT CAVITE</motion.h3>
                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="bg-blue-600 w-36 h-14  rounded-md text-sm mr-2 mt-2" onClick={() => { navigate("beoneofus/waterbaptism") }}>GET INVOLED</motion.button>
                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="bg-gray-400  w-36 h-14 rounded-md text-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" onClick={() => { navigate("plan-your-visit") }}>PLAN YOUR VISITS</motion.button>
              </div>

              <div className="absolute right-10 bottom-12 text-gray-100 text-end">
                <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className="text-lg">We invite you to attend our Sunday worship.</motion.p>
                <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className="text-2xl font-bold">SUNDAYS | 9:30 AM - 10:30AM</motion.h3>
                <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className="text-base">485 Acacia St. Villa Ramirez Tabon 1, Kawit Cavite</motion.p>
              </div>
              <div className="absolute w-full bottom-5 text-gray-100 flex items-center justify-center gap-2">
                {
                  images.map((_, index) => (
                    <motion.div
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={index}
                      className={`h-3 w-3 rounded-full hover:cursor-pointer ${currentImage === index ? 'bg-gray-400' : 'bg-slate-100'}`}
                      onClick={() => setCurrentImage(index)}
                    ></motion.div>
                  ))
                }
              </div>
            </motion.div>
          </div>
        </div>
        {/**about us */}
        <motion.section
          initial={{ backgroundColor: '#ffffff', opacity: 0 }}
          whileInView={{
            backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
            opacity: 1,
            transition: { ease: 'easeInOut', delay: 0.2 }
          }}
          viewport={{ once: false, amount: 0.2 }} // Trigger every time, when 20% is visible
          className="py-16 bg-gray-100"
        >
          <div className="container mx-auto px-4 flex flex-col items-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              About our Church
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
              We are independent Bible Baptist Church fulfilling and carry-out Christ great commission to propagate the Gospel to all mankind and win souls to Christ as found in Matthew 28:19-20. Firmly preach the word of truth into the world.
              Our church started its mission work in Kawit in 2006 and has been growing ever since, supporting both local and foreign missionaries
            </p>
            <motion.button
              initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}
              onClick={() => navigate("/landpage/about/aboutus")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Learn More About Us
            </motion.button>

          </div>
        </motion.section>


        {/** upcoming events*/}
        <motion.div
          initial={{ backgroundColor: '#f2f2f2', opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { ease: 'easeInOut', delay: 0.2 }
          }}
          viewport={{ once: false, amount: 0.2 }}
          className={` container mx-auto flex flex-col lg:p-5`}>
          <h2 className="text-2xl font-bold text-gray-900 my-2">
            Events
          </h2>
          {/* Repeat for more events */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full  bg-card  shadow-md rounded-sm overflow-hidden p-4">
              <div className="h-auto bg-gray-200 relative">
                <div className="inset-0 bg-black/20 ">
                  <img src={image1} alt="upcoming-event" className="h-52 w-100 object-cover" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-2xl text-center text-blue-600">Aug 08</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">World Mission Conference</h3>
                  <p className="text-gray-600 mb-4">A whole day event that aims to give support for foreign and local missionaries all over the world.</p>
                  <p className="text-sm text-gray-500">Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>

            </div>

            <div className="w-full flex flex-col items-center gap-2  bg-card shadow-md rounded-sm overflow-hidden p-4">
              <div className="h-22 w-100 shadow-sm bg-blue-500 flex items-center gap-2">
                <div className="text-2xl text-center text-white p-2">
                  <p>Aug</p>
                  <p className="text-4xl font-bold">18</p>
                </div>
                <img src={image4} className="h-20 w-28 object-cover" />
                <div className="text-white p-2">
                  <h3 className="text-lg font-semibold">Water Baptism</h3>
                  <p className="text-sm">Baptism service for new believers who have accepted Christ as their Savior.</p>
                  <p className="text-sm">Sunday, 2:00 PM - 4:00 PM</p>
                </div>
              </div>

              <div className="h-22 w-100 shadow-sm bg-blue-500 flex items-center gap-2">
                <div className="text-2xl text-center text-white p-2">
                  <p>Sep</p>
                  <p className="text-4xl font-bold">20</p>
                </div>
                <img src={image2} className="h-20 w-28 object-cover" />
                <div className="text-white p-2">
                  <h3 className="text-lg font-semibold">Church Anniversary</h3>
                  <p className="text-sm">Celebrating years of God's blessing in our church with special worship service.</p>
                  <p className="text-sm">Sunday, 9:30 AM - 12:00 PM</p>
                </div>
              </div>

              <div className="h-22 w-100 shadow-sm bg-blue-500 flex items-center gap-2">
                <div className="text-2xl text-center text-white p-2">
                  <p>Sep</p>
                  <p className="text-4xl font-bold">21</p>
                </div>
                <img src={image4} className="h-20 w-28 object-cover" />
                <div className="text-white p-2">
                  <h3 className="text-lg font-semibold">Church Anniversary</h3>
                  <p className="text-sm">Celebrating years of God's blessing in our church with special worship service.</p>
                  <p className="text-sm">Sunday, 9:30 AM - 12:00 PM</p>
                </div>
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4" onClick={() => { navigate('events/allevents') }}>
                See More
              </button>
            </div>
          </div>
        </motion.div>

        {/**ministries */}
        <motion.section
          initial={{ backgroundColor: '#ffffff', opacity: 0 }}
          whileInView={{
            backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
            opacity: 1,
            transition: { ease: 'easeInOut', delay: 0.2 }
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="lg:p-5 bg-gray-100">
          <div className=" container mx-auto flex flex-col items-center">
            <div className="w-100 "> <h2 className=" text-2xl font-bold text-start text-gray-800 py-2">Ministries</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-100 bg-white shadow-md rounded-lg p-2 flex items-center gap-3">
                <img src={image1} alt="Ministry Image" className="w-42 h-32 object-cover rounded-md" />
                <div className="">
                  <h3 className="text-lg font-semibold">Soulwinning/Evangelism</h3>
                  <p className="text-gray-600">Reaching out to the community with the Gospel of Jesus Christ.</p>
                  <div className="flex items-center gap-2"><FaCalendar /><span>Saturday</span></div>
                </div>
              </div>

              <div className="w-100 bg-white shadow-md rounded-lg p-2 flex gap-3">
                <img src={image2} alt="Ministry Image" className="w-42 h-32 object-cover rounded-md" />
                <div className="">
                  <h3 className="text-lg font-semibold">Soulwinning/Evangelism</h3>
                  <p className="text-gray-600">Reaching out to the community with the Gospel of Jesus Christ.</p>
                  <div className="flex items-center gap-2"><FaCalendar /><span>Saturday</span></div>
                </div>
              </div>

              <div className="w-100 bg-white shadow-md rounded-lg p-2 flex items-center gap-3">
                <img src={image3} alt="Ministry Image" className="w-42 h-32 object-cover rounded-md" />
                <div className="">
                  <h3 className="text-lg font-semibold">Soulwinning/Evangelism</h3>
                  <p className="text-gray-600">Reaching out to the community with the Gospel of Jesus Christ.</p>
                  <div className="flex items-center gap-2"><FaCalendar /><span>Saturday</span></div>
                </div>
              </div>

              <div className="w-100 bg-white shadow-md rounded-lg p-2 flex items-center gap-3">
                <img src={image3} alt="Ministry Image" className="w-42 h-32 object-cover rounded-md" />
                <div className="">
                  <h3 className="text-lg font-semibold">Soulwinning/Evangelism</h3>
                  <p className="text-gray-600">Reaching out to the community with the Gospel of Jesus Christ.</p>
                  <div className="flex items-center gap-2"><FaCalendar /><span>Saturday</span></div>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4" onClick={()=>{navigate("/landpage/ministries")}}>
              See More
            </button>

          </div>
        </motion.section>

        <motion.section initial={{ backgroundColor: '#ffffff', opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { ease: 'easeInOut', delay: 0.2 }
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="py-16 bg-white text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              We invite you to be a part of our church family. Come worship with us and experience the love of Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="bg-blue-600 hover:bg-blue-400 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-full px-8"
                onClick={() => { navigate('/landpage/beoneofus/waterbaptism') }}
              >
                Become a Member
              </button>
            </div>
          </div>
        </motion.section>

      </div>
    </>
  );
};
