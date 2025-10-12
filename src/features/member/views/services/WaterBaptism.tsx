export const WaterBaptismMember = () => {
    return (
        <>
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="container mx-auto px-4 py-8 bg-white">
                
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-50 p-3 rounded-full mr-4">
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
                                className="lucide lucide-droplets h-8 w-8 text-blue-600"
                            >
                                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Water Baptism</h1>
                            <p className="text-gray-600">Schedule your water baptism ceremony and track your requests</p>
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
                                aria-controls="radix-«r11»-content-request"
                                data-state="active"
                                id="radix-«r11»-trigger-request"
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
                                aria-controls="radix-«r11»-content-pending"
                                data-state="inactive"
                                id="radix-«r11»-trigger-pending"
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
                                aria-controls="radix-«r11»-content-completed"
                                data-state="inactive"
                                id="radix-«r11»-trigger-completed"
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
                            aria-labelledby="radix-«r11»-trigger-request"
                            id="radix-«r11»-content-request"
                            
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            style={{ animationDuration: '0s' }}
                        >
                            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <h2 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
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
                                        className="lucide lucide-calendar h-5 w-5 mr-2 text-blue-600"
                                    >
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                    About Water Baptism
                                </h2>
                                <p className="text-gray-600 mb-3">
                                    Water Baptism is an act of obedience for a person who has accepted Jesus Christ as their Lord and Personal
                                    Savior. Before scheduling baptism, please ensure you have:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                    <li>Accepted Jesus Christ as your personal Savior</li>
                                    <li>Undergone or are currently in the Discipleship process</li>
                                    <li>Understand the biblical meaning of Water Baptism</li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="text-2xl font-semibold leading-none tracking-tight text-gray-800">Baptism Information</div>
                                    <div className="text-sm text-muted-foreground">
                                        Please provide the necessary information to schedule your water baptism.
                                    </div>
                                </div>
                                <form>
                                    <div className="p-6 pt-0 space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="fullName">
                                                Full Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                id="fullName"
                                                
                                                value=""
                                                name="fullName"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="dateOfBirth">
                                                    Date of Birth
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                    id="dateOfBirth"
                                                    
                                                    type="date"
                                                    value=""
                                                    name="dateOfBirth"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="contactNumber">
                                                    Contact Number
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                    id="contactNumber"
                                                    
                                                    value=""
                                                    name="contactNumber"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="address">
                                                Address
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                id="address"
                                                
                                                value=""
                                                name="address"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center">
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2" htmlFor="salvationDate">
                                                        Salvation Date (if known)
                                                    </label>
                                                    <button data-state="closed">
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
                                                            className="lucide lucide-circle-help h-4 w-4 text-gray-400"
                                                        >
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                            <path d="M12 17h.01"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <input
                                                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                    id="salvationDate"
                                                    type="date"
                                                    value=""
                                                    name="salvationDate"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="discipleshipCompleted">
                                                    Have you completed discipleship?
                                                </label>
                                                <button
                                                    type="button"
                                                    role="combobox"
                                                    aria-controls="radix-«r16»"
                                                    aria-expanded="false"
                                                    aria-autocomplete="none"
                                                    dir="ltr"
                                                    data-state="closed"
                                                    className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-gray-300"
                                                    id="discipleshipCompleted"
                                                >
                                                    <span style={{ pointerEvents: 'none' }}>Not yet started</span>
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
                                                    <option value="yes">Yes, completed</option>
                                                    <option value="ongoing">Currently in progress</option>
                                                    <option value="no" selected>
                                                        Not yet started
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="baptismType">
                                                    Baptism Type
                                                </label>
                                                <button
                                                    type="button"
                                                    role="combobox"
                                                    aria-controls="radix-«r17»"
                                                    aria-expanded="false"
                                                    aria-autocomplete="none"
                                                    dir="ltr"
                                                    data-state="closed"
                                                    className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border-gray-300"
                                                    id="baptismType"
                                                >
                                                    <span style={{ pointerEvents: 'none' }}>Immersion (Full)</span>
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
                                                    <option value="immersion" selected>
                                                        Immersion (Full)
                                                    </option>
                                                    <option value="sprinkling">Sprinkling</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="preferredDate">
                                                    Preferred Baptism Date
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                    id="preferredDate"
                                                    
                                                    type="date"
                                                    value=""
                                                    name="preferredDate"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="specialRequests">
                                                Special Requests or Notes
                                            </label>
                                            <textarea
                                                className="flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
                                                id="specialRequests"
                                                name="specialRequests"
                                                placeholder="Any special requests or additional information"
                                                
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-6 pt-0">
                                        <button
                                            className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-blue-600 hover:bg-blue-700"
                                            type="submit"
                                        >
                                            Submit Baptism Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r11»-trigger-pending"
                            
                            id="radix-«r11»-content-pending"
                            
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        ></div>
                        <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r11»-trigger-completed"
                            
                            id="radix-«r11»-content-completed"
                            
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}