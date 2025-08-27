import { Link } from "react-router-dom"

export const DashboardAnalytics = () => {
    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/member/donations">
                <div
                    className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-all duration-200 cursor-pointer border-0 shadow-sm"
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">₱15,300</h3>
                                <p className="text-xs text-gray-500 mt-1 flex items-center">
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
                                        className="lucide lucide-trending-up h-3 w-3 mr-1"
                                    >
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    +8% from last month
                                </p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-xl">
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
                                    className="lucide lucide-gift h-6 w-6 text-green-600"
                                >
                                    <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                    <path d="M12 8v13"></path>
                                    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/member/services">
                <div
                    className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-all duration-200 cursor-pointer border-0 shadow-sm"
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">Active Services</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">3</h3>
                                <p className="text-xs text-gray-500 mt-1 flex items-center">
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
                                        className="lucide lucide-trending-up h-3 w-3 mr-1"
                                    >
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    2 pending requests
                                </p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl">
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
                                    className="lucide lucide-award h-6 w-6 text-blue-600"
                                >
                                    <path
                                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                                    ></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/member/prayer-requests">
                <div
                    className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-all duration-200 cursor-pointer border-0 shadow-sm"
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">Prayer Requests</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">2</h3>
                                <p className="text-xs text-gray-500 mt-1 flex items-center">
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
                                        className="lucide lucide-trending-up h-3 w-3 mr-1"
                                    >
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    1 answered this week
                                </p>
                            </div>
                            <div className="p-3 bg-red-50 rounded-xl">
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
                                    className="lucide lucide-heart h-6 w-6 text-red-600"
                                >
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/member/messages">
                <div
                    className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-all duration-200 cursor-pointer border-0 shadow-sm"
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600">Messages</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">5</h3>
                                <p className="text-xs text-gray-500 mt-1 flex items-center">
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
                                        className="lucide lucide-trending-up h-3 w-3 mr-1"
                                    >
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    2 unread
                                </p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-xl">
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
                                    className="lucide lucide-message-square h-6 w-6 text-purple-600"
                                >
                                    <path
                                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>)
}