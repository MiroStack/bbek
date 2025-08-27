import {Link} from "react-router-dom"
export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <img
                                    alt="BBEK Logo"
                                    className="h-12 w-12 rounded-full"
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448230024_1948401325675243_5912657906090405506_n.jpg-iQ0iansRHEiFoONcP38wMLQyCTIUNb.jpeg"
                                />
                                <div>
                                    <h3 className="font-bold text-white text-lg">Bible Baptist</h3>
                                    <p className="text-gray-400 text-sm">Ekklesia of Kawit</p>
                                </div>
                            </div>
                            <p className="mb-4 text-gray-400">
                                An independent Baptist church proclaiming the Gospel of Jesus Christ and making disciples
                                through Biblical teaching.
                            </p>
                            <div className="flex space-x-3 mb-6">
                                <a
                                    href="https://facebook.com"
                                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
                                    aria-label="Facebook"
                                >
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
                                        className="lucide lucide-facebook h-5 w-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300"
                                    aria-label="Instagram"
                                >
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
                                        className="lucide lucide-instagram h-5 w-5"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a
                                    href="https://youtube.com"
                                    className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300"
                                    aria-label="YouTube"
                                >
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
                                        className="lucide lucide-youtube h-5 w-5"
                                    >
                                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                                        <path d="m10 15 5-3-5-3z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="mailto:info@bbek.org"
                                    className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors duration-300"
                                    aria-label="Email"
                                >
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
                                        className="lucide lucide-mail h-5 w-5"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-5 uppercase">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link className="hover:text-black hover:underline transition-colors" to="/landpage/about">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-black hover:underline transition-colors" to="/landpage/ministries">
                                        Ministries
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-black hover:underline transition-colors" to="/landpage/events">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-black hover:underline transition-colors" to="/landpage/live">
                                        Live Worship
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-black hover:underline transition-colors" to="/landpage/give">
                                        Donation
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-black hover:underline transition-colors" to="/landpage/beoneofus">
                                        Be One of Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-5 uppercase">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
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
                                        className="lucide lucide-map-pin h-5 w-5 mr-3 mt-1 text-blue-400 flex-shrink-0"
                                    >
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>
                                        485 Acacia St. Villa Ramirez
                                        <br />
                                        Tabon 1, Kawit, Cavite
                                    </span>
                                </li>
                                <li className="flex items-center">
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
                                        className="lucide lucide-phone h-5 w-5 mr-3 text-blue-400 flex-shrink-0"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <span>+63 912 345 6789</span>
                                </li>
                                <li className="flex items-center">
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
                                        className="lucide lucide-mail h-5 w-5 mr-3 text-blue-400 flex-shrink-0"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                    <span>info@bbek.org</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-5 uppercase">Service Times</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
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
                                        className="lucide lucide-clock h-5 w-5 mr-3 text-blue-400 flex-shrink-0"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <span>Sunday Worship - 9:00 AM to 12:00 PM</span>
                                </li>
                                <li className="flex items-center">
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
                                        className="lucide lucide-clock h-5 w-5 mr-3 text-blue-400 flex-shrink-0"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <span>Wednesday Service - 7:00 PM to 9:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 text-gray-400 text-center py-4 mt-12">
                    &copy; 2023 Bible Baptist Ekklesia of Kawit. All rights reserved.
                </div>
            </footer>

        </>
    )
}