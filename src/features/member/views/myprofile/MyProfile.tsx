export const MyProfile = () => {
    return (
        <>
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">My Profile</h1>
                        <button
                            className="!bg-green-600 text-white hover:!bg-green-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
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
                                className="lucide lucide-square-pen h-4 w-4 mr-2"
                            >
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                            </svg>
                            Edit Profile
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-1">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="text-2xl font-semibold leading-none tracking-tight flex items-center">
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
                                        className="lucide lucide-user h-5 w-5 mr-2"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    Personal Information
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="flex justify-center mb-6">
                                    <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center relative">
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
                                            className="lucide lucide-user h-16 w-16 text-gray-500"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                                        <p>John Doe</p>
                                    </div>
                                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                        <p>john.doe@example.com</p>
                                    </div>
                                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                        <p>+63 912 345 6789</p>
                                    </div>
                                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                        <p>
                                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2">
                            <div dir="ltr" data-orientation="horizontal">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="flex justify-between items-center">
                                        <div
                                            role="tablist"
                                            aria-orientation="horizontal"
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
                                            tabIndex={0}
                                            data-orientation="horizontal"
                                            style={{ outline: 'none' }}
                                        >
                                            <button
                                                type="button"
                                                role="tab"
                                                aria-selected="true"
                                                aria-controls="radix-«r0»-content-details"
                                                data-state="active"
                                                id="radix-«r0»-trigger-details"
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                                tabIndex={(-1)}
                                                data-orientation="horizontal"
                                                data-radix-collection-item=""
                                            >
                                                Personal Details
                                            </button>
                                            <button
                                                type="button"
                                                role="tab"
                                                aria-selected="false"
                                                aria-controls="radix-«r0»-content-emergency"
                                                data-state="inactive"
                                                id="radix-«r0»-trigger-emergency"
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                                tabIndex={-1}
                                                data-orientation="horizontal"
                                                data-radix-collection-item=""
                                            >
                                                Emergency Contact
                                            </button>
                                            <button
                                                type="button"
                                                role="tab"
                                                aria-selected="false"
                                                aria-controls="radix-«r0»-content-church"
                                                data-state="inactive"
                                                id="radix-«r0»-trigger-church"
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                                tabIndex={-1}
                                                data-orientation="horizontal"
                                                data-radix-collection-item=""
                                            >
                                                Church Information
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <div
                                        data-state="active"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r0»-trigger-details"
                                        id="radix-«r0»-content-details"
                                        tabIndex={0}
                                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                        style={{ animationDuration: '0s' }}
                                    >
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        htmlFor="address"
                                                    >
                                                        Address
                                                    </label>
                                                    <div className="flex items-center">
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
                                                            className="lucide lucide-map-pin h-4 w-4 mr-2 text-gray-500"
                                                        >
                                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        <span>123 Main St, Kawit, Cavite</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        htmlFor="birthdate"
                                                    >
                                                        Birthdate
                                                    </label>
                                                    <div className="flex items-center">
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
                                                            className="lucide lucide-calendar h-4 w-4 mr-2 text-gray-500"
                                                        >
                                                            <path d="M8 2v4"></path>
                                                            <path d="M16 2v4"></path>
                                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                            <path d="M3 10h18"></path>
                                                        </svg>
                                                        <span>5/15/1988</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="gender"
                                                >
                                                    Gender
                                                </label>
                                                <div className="flex items-center">
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
                                                        className="lucide lucide-user h-4 w-4 mr-2 text-gray-500"
                                                    >
                                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <span>Male</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-state="inactive"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r0»-trigger-emergency"
                                        hidden={false}
                                        id="radix-«r0»-content-emergency"
                                        tabIndex={0}
                                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                    ></div>
                                    <div
                                        data-state="inactive"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r0»-trigger-church"
                                        hidden={false}
                                        id="radix-«r0»-content-church"
                                        tabIndex={0}
                                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}