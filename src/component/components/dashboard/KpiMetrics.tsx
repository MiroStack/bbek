export const KpiMetrics = () => {
    return (
        <>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Total Members</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">256</p>
                                    <p className="text-sm text-gray-500 mt-1">+12 this month</p>
                                </div>
                                <div className="p-3 rounded-full bg-blue-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-6 w-6 text-blue-600">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Active Events</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
                                    <p className="text-sm text-gray-500 mt-1">3 upcoming</p>
                                </div>
                                <div className="p-3 rounded-full bg-green-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-6 w-6 text-green-600">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Monthly Donations</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">₱45,230</p>
                                    <p className="text-sm text-gray-500 mt-1">+8% from last month</p>
                                </div>
                                <div className="p-3 rounded-full bg-purple-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gift h-6 w-6 text-purple-600">
                                        <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                        <path d="M12 8v13"></path>
                                        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">New Messages</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                                    <p className="text-sm text-gray-500 mt-1">5 unread</p>
                                </div>
                                <div className="p-3 rounded-full bg-orange-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square h-6 w-6 text-orange-600">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}