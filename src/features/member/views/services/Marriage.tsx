export const MarriageMember = () => {
    return (
        <>
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="container mx-auto px-4 py-8">
               
                    <div className="flex items-center mb-6">
                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mr-4">
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
                                className="lucide lucide-heart h-8 w-8 text-red-700 dark:text-red-500"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marriage Ceremony</h1>
                            <p className="text-gray-600 dark:text-gray-400">Schedule your marriage ceremony and track your requests</p>
                        </div>
                    </div>
                    <div dir="ltr" data-orientation="horizontal" className="w-full">
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
                                aria-controls="radix-«r1n»-content-request"
                                data-state="active"
                                id="radix-«r1n»-trigger-request"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-gray-800"
                                
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                            >
                                New Request
                            </button>
                            <button
                                type="button"
                                role="tab"
                                aria-selected="false"
                                aria-controls="radix-«r1n»-content-pending"
                                data-state="inactive"
                                id="radix-«r1n»-trigger-pending"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-gray-800"
                                
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                            >
                                Pending Services
                            </button>
                            <button
                                type="button"
                                role="tab"
                                aria-selected="false"
                                aria-controls="radix-«r1n»-content-completed"
                                data-state="inactive"
                                id="radix-«r1n»-trigger-completed"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-gray-800"
                                
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                            >
                                Completed Services
                            </button>
                        </div>
                        <div
                            data-state="active"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r1n»-trigger-request"
                            id="radix-«r1n»-content-request"
                            
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            style={{ animationDuration: '0s' }}
                        >
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="text-2xl font-semibold leading-none tracking-tight">Marriage Information</div>
                                    <div className="text-sm text-muted-foreground">
                                        Please provide the necessary information to schedule your marriage ceremony.
                                    </div>
                                </div>
                                <form>
                                    <div className="p-6 pt-0 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="groomName">
                                                    Groom's Full Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    id="groomName"
                                                    required
                                                    value=""
                                                    name="groomName"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="groomPhone">
                                                    Groom's Contact Number
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    id="groomPhone"
                                                    required
                                                    value=""
                                                    name="groomPhone"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="brideName">
                                                    Bride's Full Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    id="brideName"
                                                    required
                                                    value=""
                                                    name="brideName"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="bridePhone">
                                                    Bride's Contact Number
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    id="bridePhone"
                                                    required
                                                    value=""
                                                    name="bridePhone"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="preferredDate">
                                                    Preferred Date
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    id="preferredDate"
                                                    required
                                                    type="date"
                                                    value=""
                                                    name="preferredDate"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="preferredTime">
                                                    Preferred Time
                                                </label>
                                                <button
                                                    type="button"
                                                    role="combobox"
                                                    aria-controls="radix-«r1r»"
                                                    aria-expanded="false"
                                                    aria-autocomplete="none"
                                                    dir="ltr"
                                                    data-state="closed"
                                                    data-placeholder=""
                                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                                                    id="preferredTime"
                                                >
                                                    <span style={{ pointerEvents: 'none' }}>Select time</span>
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
                                                        className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="m6 9 6 6 6-6"></path>
                                                    </svg>
                                                </button>
                                                <select
                                                    aria-hidden="true"
                                                    
                                                    style={{
                                                        position: 'absolute',
                                                        border: '0px',
                                                        width: '1px',
                                                        height: '1px',
                                                        padding: '0px',
                                                        margin: '-1px',
                                                        overflow: 'hidden',
                                                        clip: 'rect(0px, 0px, 0px, 0px)',
                                                        whiteSpace: 'nowrap',
                                                        overflowWrap: 'normal',
                                                    }}
                                                >
                                                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                                    <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                                                    <option value="evening">Evening (5:00 PM - 7:00 PM)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="estimatedGuests">
                                                Estimated Number of Guests
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="estimatedGuests"
                                                required
                                                type="number"
                                                value=""
                                                name="estimatedGuests"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="premaritalCounseling">
                                                Would you like to schedule premarital counseling?
                                            </label>
                                            <button
                                                type="button"
                                                role="combobox"
                                                aria-controls="radix-«r1s»"
                                                aria-expanded="false"
                                                aria-autocomplete="none"
                                                dir="ltr"
                                                data-state="closed"
                                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                                                id="premaritalCounseling"
                                            >
                                                <span style={{ pointerEvents: 'none' }}>Yes, we would like premarital counseling</span>
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
                                                    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                                    aria-hidden="true"
                                                >
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                            <select
                                                aria-hidden="true"
                                                
                                                style={{
                                                    position: 'absolute',
                                                    border: '0px',
                                                    width: '1px',
                                                    height: '1px',
                                                    padding: '0px',
                                                    margin: '-1px',
                                                    overflow: 'hidden',
                                                    clip: 'rect(0px, 0px, 0px, 0px)',
                                                    whiteSpace: 'nowrap',
                                                    overflowWrap: 'normal',
                                                }}
                                            >
                                                <option value="yes" selected>
                                                    Yes, we would like premarital counseling
                                                </option>
                                                <option value="no">No, we have already completed counseling</option>
                                                <option value="unsure">Unsure, we need more information</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="specialRequests">
                                                Special Requests or Notes
                                            </label>
                                            <textarea
                                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="specialRequests"
                                                name="specialRequests"
                                                placeholder="Any special requests or additional information"
                                                
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-6 pt-0">
                                        <button
                                            className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                            type="submit"
                                        >
                                            Submit Marriage Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r1n»-trigger-pending"
                            hidden
                            id="radix-«r1n»-content-pending"
                            
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        ></div>
                        <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r1n»-trigger-completed"
                            hidden
                            id="radix-«r1n»-content-completed"
                            
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}