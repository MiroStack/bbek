import { useState, useEffect, useRef } from "react"
import "../styles/Home.css"
import { Link } from "react-router-dom"
import { scroll } from "motion";
export const HomePage = (prop: any) => {
  const [scrolled, setScrolled] = useState(false);


  return (
    <>
      <div className="w-screen min-h-screen overflow-x-hidden">
        <div className="w-full h-full relative">
          {/** hero*/}
          <div className="hero-wrapper w-100">
            <div className="hero-header z-10 text-white text-center">
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
        {/**service & location */}

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row animate-fade-in">
              <div className="w-full md:w-1/2 border-r border-gray-200 px-4 md:px-12 mb-8 md:mb-0 animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">service time</h2>
                <h3 className="text-xl font-medium text-gray-800">Sunday Mornings</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  9:00 to 10:30 AM<sup>*</sup>
                </p>
                <p className="text-xs text-gray-500">*End time is approximate.</p>
              </div>
              <div className="w-full md:w-1/2 px-4 md:px-12 animate-slide-in-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">location</h2>
                <h3 className="text-xl font-medium text-gray-800">Bible Baptist Ekklesia of Kawit</h3>
                <p className="text-xl text-gray-900 mb-1">485 Acacia St. Villa Ramirez</p>
                <p className="text-xl text-gray-900">Tabon 1, Kawit, Cavite</p>
              </div>
            </div>
          </div>
        </section>


        {/** plan visit*/}
        <div className={`w-100 h-auto text-center flex flex-col justify-center items-center lg:p-5`}>
          <div>
            <h3 className="text-3xl font-bold">Plan Your Visit</h3>
            <p className="text-lg max-w-2xl break-words my-3">We're excited to welcome you to Bible Baptist Ekklesia of Kawit. Here's everything you need to know for your first visit.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="border text-card-foreground bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-6 w-6 text-blue-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Service Times</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="font-medium">Sunday Worship Service</p>
                    <p className="text-gray-600">9:00 AM - 11:00 AM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Bible Study</p>
                    <p className="text-gray-600">Wednesday, 7:00 PM - 8:30 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Youth Fellowship</p>
                    <p className="text-gray-600">Friday, 6:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border text-card-foreground bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin h-6 w-6 text-blue-600"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Location</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="font-medium">Bible Baptist Ekklesia of Kawit</p>
                    <p className="text-gray-600">485 Acacia St. Villa Ramirez</p>
                    <p className="text-gray-600">Tabon 1, Kawit, Cavite</p>
                  </div>
                  <div className="mt-4">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5!2d120.9!3d14.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI0JzAwLjAiTiAxMjDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1623456789012!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title="Church Location"
                        style={{ border: "0px" }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border text-card-foreground bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users h-6 w-6 text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">What to Expect</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Dress Code</p>
                    <p className="text-gray-600">Come as you are! We have no formal dress code.</p>
                  </div>
                  <div>
                    <p className="font-medium">Children</p>
                    <p className="text-gray-600">Children's ministry available during Sunday service.</p>
                  </div>
                  <div>
                    <p className="font-medium">Worship Style</p>
                    <p className="text-gray-600">Contemporary and traditional worship songs.</p>
                  </div>
                  <div>
                    <p className="font-medium">Service Length</p>
                    <p className="text-gray-600">Approximately 1.5 hours.</p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/**who we are */}

        

        {/* welcome greeting */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Welcome to Bible Baptist Ekklesia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Bible Baptist Ekklesia of Kawit is an independent Baptist church founded on the principles of Biblical authority, salvation by grace through faith in Jesus Christ, the priesthood of all believers, the autonomy of the local church, and the Great Commission to make disciples of all nations.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are committed to proclaiming the Gospel of Jesus Christ, making disciples through Biblical teaching, and serving our community with the love of Christ. We welcome people from all walks of life to join us in worship and fellowship as we seek to grow in our relationship with God.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="mr-2">LEARN MORE ABOUT US</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </section>


      </div>


    </>
  )
}