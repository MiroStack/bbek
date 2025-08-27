import Placeholder from "../../../../assets/img/placeholder.svg"
export const ChurchEventsMember = () => {
    return (
        <>
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="min-h-screen bg-gray-50">
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Church Events</h1>
                            <p className="text-gray-500">Discover and learn more about our church events and activities</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div dir="ltr" data-orientation="horizontal">
                            <div
                                role="tablist"
                                aria-orientation="horizontal"
                                className="h-10 items-center justify-center rounded-md p-1 text-muted-foreground grid w-full grid-cols-3 bg-gray-100 mb-6"
                                
                                data-orientation="horizontal"
                                style={{ outline: 'none' }}
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                    aria-controls="radix-«r2a»-content-all"
                                    data-state="active"
                                    id="radix-«r2a»-trigger-all"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-gray-800"
                                    
                                    data-orientation="horizontal"
                                    data-radix-collection-item=""
                                >
                                    All Events
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                    aria-controls="radix-«r2a»-content-yearly"
                                    data-state="inactive"
                                    id="radix-«r2a»-trigger-yearly"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-gray-800"
                                    
                                    data-orientation="horizontal"
                                    data-radix-collection-item=""
                                >
                                    Yearly Events
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                    aria-controls="radix-«r2a»-content-upcoming"
                                    data-state="inactive"
                                    id="radix-«r2a»-trigger-upcoming"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-gray-800"
                                    
                                    data-orientation="horizontal"
                                    data-radix-collection-item=""
                                >
                                    Upcoming Events
                                </button>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
                                <div className="p-6">
                                    <div className="relative w-full md:w-1/3">
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
                                            className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </svg>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-input bg-background  py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                                            placeholder="Search events..."
                                            value=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                data-state="active"
                                data-orientation="horizontal"
                                role="tabpanel"
                                aria-labelledby="radix-«r2a»-trigger-all"
                                id="radix-«r2a»-content-all"
                                
                                className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                style={{ animationDuration: '0s' }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="h-48 bg-gray-200 relative">
                                            <img
                                                alt="Sunday Worship Service"
                                                className="w-full h-full object-cover"
                                                src={Placeholder}
                                            />
                                            <div className="absolute top-4 left-4">
                                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-600 text-white">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <div className="font-semibold tracking-tight text-lg">Sunday Worship Service</div>
                                            <div className="text-muted-foreground text-sm">
                                                Join us for our weekly worship service with inspiring messages and uplifting music.
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <div className="space-y-2">
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-calendar h-4 w-4 mr-2"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    Sunday, June 16, 2024
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-clock h-4 w-4 mr-2"
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    9:00 AM - 11:00 AM
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-map-pin h-4 w-4 mr-2"
                                                    >
                                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Main Sanctuary
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-users h-4 w-4 mr-2"
                                                    >
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                    </svg>
                                                    150 expected attendees
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-700">
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
                                                        className="lucide lucide-eye h-4 w-4 mr-2"
                                                    >
                                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="h-48 bg-gray-200 relative">
                                            <img
                                                alt="Community Outreach"
                                                className="w-full h-full object-cover"
                                                src={Placeholder}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <div className="font-semibold tracking-tight text-lg">Community Outreach</div>
                                            <div className="text-muted-foreground text-sm">
                                                Serving our local community with food distribution and prayer support.
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <div className="space-y-2">
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-calendar h-4 w-4 mr-2"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    Monday, June 24, 2024
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-clock h-4 w-4 mr-2"
                                                    >
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    10:00 AM - 2:00 PM
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-map-pin h-4 w-4 mr-2"
                                                    >
                                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Community Center
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
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
                                                        className="lucide lucide-users h-4 w-4 mr-2"
                                                    >
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                    </svg>
                                                    25 expected attendees
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-700">
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
                                                        className="lucide lucide-eye h-4 w-4 mr-2"
                                                    >
                                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-state="inactive"
                                data-orientation="horizontal"
                                role="tabpanel"
                                aria-labelledby="radix-«r2a»-trigger-yearly"
                                
                                id="radix-«r2a»-content-yearly"
                                
                                className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                            ></div>
                            <div
                                data-state="inactive"
                                data-orientation="horizontal"
                                role="tabpanel"
                                aria-labelledby="radix-«r2a»-trigger-upcoming"
                                
                                id="radix-«r2a»-content-upcoming"
                                
                                className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}