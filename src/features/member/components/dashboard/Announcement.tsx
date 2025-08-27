export const Announcement = () => {
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
                            className="lucide lucide-bell h-5 w-5 mr-2 text-green-600"
                        >
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                        Announcements
                    </div>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <div className="p-4 rounded-lg border-l-4 border-l-red-500 bg-red-50">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900 flex items-center">
                                    Sunday Worship Service
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ml-2 bg-red-500 text-white"
                                    >
                                        Important
                                    </div>
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Join us this Sunday for our worship service at 9:00 AM. Pastor John will be delivering a message on
                                    'Faith in Action'.
                                </p>
                            </div>
                            <div className="text-xs text-gray-500 whitespace-nowrap ml-4">June 10, 2023</div>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900 flex items-center">Youth Fellowship</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Youth fellowship will be held this Saturday at 3:00 PM in the church hall. All youth are encouraged
                                    to attend.
                                </p>
                            </div>
                            <div className="text-xs text-gray-500 whitespace-nowrap ml-4">June 15, 2023</div>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border-l-4 border-l-red-500 bg-red-50">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900 flex items-center">
                                    Church Cleaning Day
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ml-2 bg-red-500 text-white"
                                    >
                                        Important
                                    </div>
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    We will be having a church cleaning day on June 20th. Please come and help us maintain our church
                                    building.
                                </p>
                            </div>
                            <div className="text-xs text-gray-500 whitespace-nowrap ml-4">June 20, 2023</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full text-green-700 border-green-200 hover:bg-green-50"
                    >
                        View All Announcements
                    </button>
                </div>
            </div>
        </>
    )
}