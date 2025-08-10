import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const PlanYourVisit = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center">
                <motion.section
                    className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
                    <div className=" w-100 flex flex-col items-center justify-center p-5">
                        <motion.h2
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                            className="text-4xl font-bold text-blue-500 ">We’re excited to see you to our church.</motion.h2>
                        <motion.button
                            initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}
                            onClick={() => {window.location.href = '#location'}}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 my-3">
                            Get Directions
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="rounded-lg bg-card text-card-foreground text-center border-0 shadow-md">
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                            className="lucide lucide-clock h-8 w-8 text-blue-600"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Sunday Worship</h3>
                                    <p className="text-2xl font-bold text-blue-600 mb-2">9:00 AM</p>
                                    <p className="text-gray-600">
                                        Main worship service with sermon and communion
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-lg bg-card text-card-foreground text-center border-0 shadow-md">
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                            className="lucide lucide-users h-8 w-8 text-green-600"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Bible Study</h3>
                                    <p className="text-2xl font-bold text-green-600 mb-2">7:00 PM</p>
                                    <p className="text-gray-600">
                                        Wednesday evening Bible study and prayer
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-lg bg-card text-card-foreground text-center border-0 shadow-md">
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                            className="lucide lucide-heart h-8 w-8 text-purple-600"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Youth Fellowship</h3>
                                    <p className="text-2xl font-bold text-purple-600 mb-2">6:00 PM</p>
                                    <p className="text-gray-600">
                                        Friday youth activities and fellowship
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </motion.section>

                <motion.section
                    id="location"
                    initial={{ backgroundColor: '#ffffff', opacity: 0 }}
                    whileInView={{
                        backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
                        opacity: 1,
                        transition: { ease: 'easeInOut', delay: 0.2 }
                    }}
                    className="p-5 w-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Find Us</h2>
                            <p className="text-lg text-gray-600">We're located in the heart of Kawit, Cavite</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
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
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Our Address</h3>
                                        <p className="text-gray-600 text-lg">Bible Baptist Ekklesia of Kawit</p>
                                        <p className="text-gray-600 text-lg">485 Acacia St. Villa Ramirez</p>
                                        <p className="text-gray-600 text-lg">Tabon 1, Kawit, Cavite</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
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
                                            className="lucide lucide-car h-6 w-6 text-green-600"
                                        >
                                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                            <circle cx="7" cy="17" r="2"></circle>
                                            <path d="M9 17h6"></path>
                                            <circle cx="17" cy="17" r="2"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Parking</h3>
                                        <p className="text-gray-600">Free parking available on-site and nearby streets</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
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
                                            className="lucide lucide-phone h-6 w-6 text-purple-600"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Contact</h3>
                                        <p className="text-gray-600">Phone: (046) 123-4567</p>
                                        <p className="text-gray-600">Email: info@bbekawit.org</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.0608173302396!2d120.89999999999999!3d14.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI0JzAwLjAiTiAxMjDCsDUzJzU5LjkiRQ!5e0!3m2!1sen!2sph!4v1623456789012!5m2!1sen!2sph"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Church Location"
                                ></iframe>
                            </div>
                        </div>
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
    )
}