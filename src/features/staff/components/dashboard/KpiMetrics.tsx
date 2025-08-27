export const KpiMetrics = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex justify-between items-center">
                            <div className="tracking-tight text-sm font-medium text-gray-500">Total Members</div>
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">256</div>
                        <p className="text-xs text-green-600">+12% from last month</p>
                    </div>
                </div>
                <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex justify-between items-center">
                            <div className="tracking-tight text-sm font-medium text-gray-500">Weekly Attendance</div>
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">187</div>
                        <p className="text-xs text-green-600">+5% from last week</p>
                    </div>
                </div>
                <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex justify-between items-center">
                            <div className="tracking-tight text-sm font-medium text-gray-500">Active Services</div>
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-4 w-4">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-green-600">+3 from last month</p>
                    </div>
                </div>
                <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex justify-between items-center">
                            <div className="tracking-tight text-sm font-medium text-gray-500">New Members</div>
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user h-4 w-4">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-green-600">This month</p>
                    </div>
                </div>
            </div>
        </>
    )
}