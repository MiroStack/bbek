export const RecentActivities = () => {
    return (
        <>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
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
                            className="lucide lucide-clock h-5 w-5 mr-2 text-green-600"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Recent Activities
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                            <div className="p-2 bg-white rounded-lg shadow-sm">
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
                                    className="lucide lucide-gift h-4 w-4 text-green-600"
                                >
                                    <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                    <path d="M12 8v13"></path>
                                    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                    <path
                                        d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900">Donation recorded</p>
                                <p className="text-sm text-gray-600">Monthly tithe - ₱2,500</p>
                                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                            <div className="p-2 bg-white rounded-lg shadow-sm">
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
                                    className="lucide lucide-heart h-4 w-4 text-red-600"
                                >
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900">Prayer request submitted</p>
                                <p className="text-sm text-gray-600">For family healing</p>
                                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                            <div className="p-2 bg-white rounded-lg shadow-sm">
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
                                    className="lucide lucide-award h-4 w-4 text-blue-600"
                                >
                                    <path
                                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                                    ></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900">Certificate downloaded</p>
                                <p className="text-sm text-gray-600">Baptism certificate</p>
                                <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}