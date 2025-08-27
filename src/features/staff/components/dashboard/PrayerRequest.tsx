export const PrayerRequest = () => {
    return (
        <>
            <div className="rounded-lg text-card-foreground border border-gray-200 shadow-sm bg-white">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <div className="tracking-tight text-lg font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-5 w-5 mr-2 text-green-600">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Prayer Requests
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-3">
                        <div className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <p className="font-medium">Elena Gomez</p>
                            <p className="text-sm text-gray-600">Please pray for my mother's health.</p>
                            <p className="text-xs text-gray-500 mt-1">2023-06-08</p>
                        </div>
                        <div className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <p className="font-medium">Miguel Torres</p>
                            <p className="text-sm text-gray-600">Pray for my upcoming job interview.</p>
                            <p className="text-xs text-gray-500 mt-1">2023-06-07</p>
                        </div>
                        <div className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            <p className="font-medium">Sofia Reyes</p>
                            <p className="text-sm text-gray-600">Pray for my family's safe travel.</p>
                            <p className="text-xs text-gray-500 mt-1">2023-06-05</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                    <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full text-green-700 border-green-200 hover:bg-green-50" href="/staff/messages">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square mr-2 h-4 w-4">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        View All Requests
                    </a>
                </div>
            </div>
        </>
    )
}