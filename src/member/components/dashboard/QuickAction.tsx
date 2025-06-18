import { Link } from "react-router-dom";

export const QuickAction = () => {
    return (
        <>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm mt-4">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                    <div className="tracking-tight text-xl font-bold flex items-center">
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
                            className="lucide lucide-info h-5 w-5 mr-2 text-green-600"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                        Quick Actions
                    </div>

                    <div className="p-6 pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link to="/member/services">
                                <div
                                    className="p-4 rounded-lg transition-all duration-200 cursor-pointer bg-blue-50 text-blue-700 hover:bg-blue-100"
                                >
                                    <div className="flex items-start space-x-3">
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
                                            className="lucide lucide-award h-5 w-5 mt-0.5 flex-shrink-0"
                                        >
                                            <path
                                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                                            ></path>
                                            <circle cx="12" cy="8" r="6"></circle>
                                        </svg>
                                        <div>
                                            <h4 className="font-medium">Request Service</h4>
                                            <p className="text-sm opacity-80 mt-1">Apply for baptism, marriage, or child dedication</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/member/prayer-requests">
                                <div
                                    className="p-4 rounded-lg transition-all duration-200 cursor-pointer bg-red-50 text-red-700 hover:bg-red-100"
                                >
                                    <div className="flex items-start space-x-3">
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
                                            className="lucide lucide-heart h-5 w-5 mt-0.5 flex-shrink-0"
                                        >
                                            <path
                                                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <h4 className="font-medium">Submit Prayer Request</h4>
                                            <p className="text-sm opacity-80 mt-1">Share your prayer needs with the church</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}