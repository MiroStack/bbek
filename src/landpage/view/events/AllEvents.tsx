import { useEffect, useState } from "react";
import { EventsCard } from "../../components/EventsCard";
import type { EventModel } from "../../../models/EventModel";
import EventRepo from "../../../repositories/EventRepo";
import { motion } from "framer-motion";
import { FaSort } from "react-icons/fa6";
import { IoMdFunnel } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const AllEventsPage = () => {
  const navigate = useNavigate();
  const [eventData, setEventDate] = useState<EventModel[]>([]);
  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => {
    setShowSort(!showSort);
  };
  useEffect(() => {
    fetchEventData();
  }, []);
  const fetchEventData = async () => {
    try {
      const res = await EventRepo.getAllEvent();
      setEventDate(res);
    } catch (e) { }
  };
  return (
    <>
      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <motion.section
          className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
          <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
            <motion.h2
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
              className="text-4xl font-bold text-blue-500">Events</motion.h2>
            <motion.p
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
              className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
              Our events are a time to worship, learn, and grow together as a family of faith. There’s something for everyone—come and be part of what God is doing.
            </motion.p>

          </div>
        </motion.section>

        {/* events card section */}
        {/* <div className="h-auto mx-5 py-5 flex flex-col items-center justify-center gap-2 ">
          <main className="flex-1 bg-white">
            <section className="py-12 md:py-24 bg-gray-50">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900 animate-fade-in-up">
                  Church Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          

                  {
                    eventData.map((item, index)=>(
                        <EventsCard key={index} eventModel={item}/>
                    ))
                  }
                 
                </div>
              </div>
            </section>
          </main>
        </div> */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div dir="ltr" data-orientation="horizontal" className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between gap-2">
                <input type="text" placeholder="Search events..." className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className="relative group">
                  <IoMdFunnel className="text-gray-500 text-2xl cursor-pointer hover:text-blue-500 transition-colors " onClick={toggleSort} />
                  <div className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10  ${showSort ? 'block' : 'hidden'}`}>
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={toggleSort}>Upcoming Evens</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={toggleSort}>Regular Schedule</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={toggleSort}>Yearly Events</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-5" style={{}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-700 font-bold text-center p-2 rounded-md mb-4">
                        <div className="text-sm">MAY</div>
                        <div className="text-2xl">14</div>
                        <div className="text-sm">2025</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">World Mission Conference</h3>
                      <p className="text-gray-600 mb-4">A whole day event that aims to give support for foreign and local missionaries all over the world.</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4 mr-2 text-blue-700">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>Friday, 8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-2 text-blue-700">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>Bible Baptist Ekklesia of Kawit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-700 font-bold text-center p-2 rounded-md mb-4">
                        <div className="text-sm">MAY</div>
                        <div className="text-2xl">16</div>
                        <div className="text-sm">2025</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">10th Church Anniversary</h3>
                      <p className="text-gray-600 mb-4">Celebrating 10 years of God's blessing in our church with special worship service.</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4 mr-2 text-blue-700">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>Sunday, 9:30 AM - 12:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-2 text-blue-700">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>Bible Baptist Ekklesia of Kawit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-700 font-bold text-center p-2 rounded-md mb-4">
                        <div className="text-sm">JUN</div>
                        <div className="text-2xl">05</div>
                        <div className="text-sm">2025</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Water Baptism</h3>
                      <p className="text-gray-600 mb-4">Baptism service for new believers who have accepted Christ as their Savior.</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4 mr-2 text-blue-700">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>Sunday, 2:00 PM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-2 text-blue-700">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>Local Beach Area</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="p-6">
                      <div className="bg-blue-100 text-blue-700 font-bold text-center p-2 rounded-md mb-4">
                        <div className="text-sm">JUL</div>
                        <div className="text-2xl">15</div>
                        <div className="text-sm">2025</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Daily Vacation Bible School</h3>
                      <p className="text-gray-600 mb-4">Three days of fun Bible learning activities for children during summer vacation.</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4 mr-2 text-blue-700">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>Wednesday-Friday, 8:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-2 text-blue-700">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>Bible Baptist Ekklesia of Kawit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-regular" id="radix-«r0»-content-regular" className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div>
              <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-yearly" id="radix-«r0»-content-yearly" className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div>
            </div>
          </div>
        </section>
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
