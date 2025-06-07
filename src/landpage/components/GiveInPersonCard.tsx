export const GiveInPersonCard = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto">
                <div dir="ltr" data-orientation="horizontal" className="animate-fade-in">
                    <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-r8e-trigger-online"
                        id="radix-r8e-content-online"
                        tabIndex={0}
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
                        style={{}}
                        hidden
                    ></div>

                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-r8e-trigger-other"
                        id="radix-r8e-content-other"
                        tabIndex={0}
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
                    >
                        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg transform transition-all duration-500 hover:shadow-xl animate-fade-in">
                            <div className="p-6">
                                <div className="flex justify-center mb-4">
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
                                        className="lucide lucide-dollar-sign h-10 w-10 text-blue-600"
                                    >
                                        <line x1="12" x2="12" y1="2" y2="22"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-2">Give in Person</h3>
                                <p className="text-gray-600 text-center mb-4">
                                    You can give during any of our worship services by placing your donation in the offering box.
                                </p>
                                <div className="bg-gray-100 p-3 rounded-md">
                                    <p className="text-center text-sm">
                                        <span className="font-medium">Sunday Services:</span> 9:00 AM - 11:00 AM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mt-8 bg-white rounded-lg border border-gray-200 p-6 animate-fade-in"
                            style={{ animationDelay: "200ms" }}
                        >
                            <div className="flex items-start space-x-3">
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
                                    className="lucide lucide-calendar h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5"
                                >
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                                <div>
                                    <h3 className="font-bold mb-2">Scheduled Giving</h3>
                                    <p className="text-gray-600 text-sm">
                                        If you'd like to set up regular, scheduled giving, please contact our church office for assistance. We can
                                        help you establish a consistent giving plan that works for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>);
}