import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import type { EventModel } from "../../../../datasource/models/Event/EventModel";
import dayjs from "dayjs";

export const LearnMoreEvent = () => {
    const location = useLocation();
    const { eventModel } = location.state || {};
    const model: EventModel = eventModel;

    const navigate = useNavigate();
    return (

        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center">
                <section className="relative h-[40vh] w-full flex items-center justify-center mt-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("http://localhost:8081/bbek/event_image?eventName=${encodeURIComponent(
                                model.eventName
                            )}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            filter: "brightness(0.5)",
                        }}
                    ></div>
                    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{model.eventName}</h1>
                        <p className="text-xl md:text-2xl text-white font-light">Event Details</p>
                    </div>

                </section>

                <main className="w-full flex-1 bg-white">
                    <div className=" text-white -mt-20 relative z-0">
                        <div className="container mx-auto px-4 py-16">
                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                                    <div className="lg:col-span-2">
                                        <h2 className="text-3xl font-bold mb-6 text-black">About This Event</h2>
                                        <p className="text-lg text-black mb-4 leading-relaxed">{model.description}</p>
                                    </div>
                                    <div className="lg:col-span-1 ">
                                        <div className="bg-blue-600 rounded-lg p-6 shadow-lg">
                                            <h3 className="text-xl font-bold mb-6">Event Details</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0">
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    <div>
                                                        <h4 className="font-medium">Date</h4>
                                                        <p className="text-white">{dayjs(model.eventStartDate).format("MMMM D, YYYY")}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    <div>
                                                        <h4 className="font-medium">Time</h4>
                                                        <p className="text-white">{dayjs(model.eventStartDate).format("hh:mm A")} - {dayjs(model.eventEndDate).format("hh:mm A")}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0">
                                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <div>
                                                        <h4 className="font-medium">Location</h4>
                                                        <p className="text-white">{model.eventLocation}</p>
                                                    </div>
                                                </div>
                                                <div className="pt-4 border-t border-yellow-400">
                                                    <h4 className="font-medium mb-2">Cost</h4>
                                                    <p className="text-white text-lg font-semibold">Free</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <motion.button
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-blue-600 w-36 h-12  text-white  rounded-md text-sm "
                                        onClick={() => {
                                            navigate("/landpage/events/allevents");
                                        }}
                                    >
                                        Back to Event
                                    </motion.button>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>

            </div>

        </>
    )
}