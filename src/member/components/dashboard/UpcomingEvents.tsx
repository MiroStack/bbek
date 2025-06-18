export const UpcomingEvent = () => {
    return (<>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="tracking-tight text-lg font-bold flex items-center">
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
                        className="lucide lucide-calendar h-5 w-5 mr-2 text-green-600"
                    >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                    </svg>
                    Upcoming Events
                </div>
            </div>
            <div className="p-6 pt-0">
                <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm">Sunday Worship Service</h4>
                                <p className="text-xs text-gray-600 mt-1">June 11, 2023</p>
                                <p className="text-xs text-gray-500">9:00 AM</p>
                            </div>
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                            >
                                Worship
                            </div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm">Prayer Meeting</h4>
                                <p className="text-xs text-gray-600 mt-1">June 14, 2023</p>
                                <p className="text-xs text-gray-500">7:00 PM</p>
                            </div>
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                            >
                                Prayer
                            </div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm">Youth Fellowship</h4>
                                <p className="text-xs text-gray-600 mt-1">June 17, 2023</p>
                                <p className="text-xs text-gray-500">3:00 PM</p>
                            </div>
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                            >
                                Fellowship
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full mt-4 text-green-700 border-green-200 hover:bg-green-50"
                >
                    View All Events
                </button>
            </div>
        </div>
    </>)
}