export const UpcomingEvent = () => {
    return (
        <>
            <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <div className="flex justify-between items-center">
                        <div className="tracking-tight text-xl font-bold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-5 w-5 mr-2 text-green-600">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                            Upcoming Events
                        </div>
                        <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-green-600 hover:text-green-700" href="/staff/events">
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div>
                                <p className="font-medium">Sunday Worship</p>
                                <p className="text-xs text-gray-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3 mr-1">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    2023-06-11 at 9:00 AM
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-green-700 border-green-200 hover:bg-green-50">Details</button>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div>
                                <p className="font-medium">Prayer Meeting</p>
                                <p className="text-xs text-gray-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3 mr-1">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    2023-06-14 at 7:00 PM
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-green-700 border-green-200 hover:bg-green-50">Details</button>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div>
                                <p className="font-medium">Youth Fellowship</p>
                                <p className="text-xs text-gray-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3 mr-1">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    2023-06-17 at 3:00 PM
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-green-700 border-green-200 hover:bg-green-50">Details</button>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div>
                                <p className="font-medium">Bible Study</p>
                                <p className="text-xs text-gray-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3 mr-1">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    2023-06-21 at 7:00 PM
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-green-700 border-green-200 hover:bg-green-50">Details</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                    <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full text-green-700 border-green-200 hover:bg-green-50" href="/staff/events">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-2 h-4 w-4">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                        Manage All Events
                    </a>
                </div>
            </div>
        </>
    );
}