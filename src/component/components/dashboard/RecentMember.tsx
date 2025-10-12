export const RecentMember = () => {
    return (
        <>
            <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <div className="flex justify-between items-center">
                        <div className="tracking-tight text-xl font-bold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 mr-2 text-green-600">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            Recent Members
                        </div>
                        <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-green-600 hover:text-green-700" href="/staff/members">
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
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">M</div>
                                <div>
                                    <p className="font-medium">Maria Santos</p>
                                    <p className="text-xs text-gray-500">Joined: 2023-06-01</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800">Active</div>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">J</div>
                                <div>
                                    <p className="font-medium">Juan Dela Cruz</p>
                                    <p className="text-xs text-gray-500">Joined: 2023-05-28</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800">Active</div>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">A</div>
                                <div>
                                    <p className="font-medium">Ana Reyes</p>
                                    <p className="text-xs text-gray-500">Joined: 2023-05-25</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-100 text-yellow-800">Pending</div>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">P</div>
                                <div>
                                    <p className="font-medium">Pedro Lim</p>
                                    <p className="text-xs text-gray-500">Joined: 2023-05-20</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800">Active</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                    <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full text-green-700 border-green-200 hover:bg-green-50" href="/staff/members">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mr-2 h-4 w-4">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Manage All Members
                    </a>
                </div>
            </div>
        </>
    );
}