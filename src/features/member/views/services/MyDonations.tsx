export const MyDonations = () => {
    return (
        <>
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="min-h-screen bg-gray-50">
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">My Donations</h1>
                                <p className="text-gray-500">Track and manage your church donations</p>
                            </div>
                            <button
                                className="!bg-green-600 text-white hover:!bg-green-500  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 "
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-«r4»"
                                data-state="closed"
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
                                    className="lucide lucide-plus h-4 w-4 mr-2"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                                Add Donation
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                            <div className="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-green-500 to-green-600 text-white">
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-green-100">Total Donations</p>
                                            <h3 className="text-3xl font-bold mt-1">₱10,300</h3>
                                        </div>
                                        <div className="p-3 bg-white bg-opacity-20 rounded-full">
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
                                                className="lucide lucide-gift h-6 w-6"
                                            >
                                                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                                <path d="M12 8v13"></path>
                                                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-blue-100">Tithes</p>
                                            <h3 className="text-3xl font-bold mt-1">₱4,500</h3>
                                        </div>
                                        <div className="p-3 bg-white bg-opacity-20 rounded-full">
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
                                                className="lucide lucide-gift h-6 w-6"
                                            >
                                                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                                <path d="M12 8v13"></path>
                                                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-purple-100">Offerings</p>
                                            <h3 className="text-3xl font-bold mt-1">₱800</h3>
                                        </div>
                                        <div className="p-3 bg-white bg-opacity-20 rounded-full">
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
                                                className="lucide lucide-gift h-6 w-6"
                                            >
                                                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                                <path d="M12 8v13"></path>
                                                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-yellow-100">Special Offerings</p>
                                            <h3 className="text-3xl font-bold mt-1">₱5,000</h3>
                                        </div>
                                        <div className="p-3 bg-white bg-opacity-20 rounded-full">
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
                                                className="lucide lucide-gift h-6 w-6"
                                            >
                                                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                                <path d="M12 8v13"></path>
                                                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row gap-4 justify-between">
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
                                            className="flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                                            placeholder="Search donations..."
                                            value=""
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                            name="export-donations-csv-btn"
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
                                                className="lucide lucide-download h-4 w-4 mr-2"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" x2="12" y1="15" y2="3"></line>
                                            </svg>
                                            Export CSV
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="text-2xl font-semibold leading-none tracking-tight">Donation History</div>
                            </div>
                            <div className="p-6 pt-0">
                                <div dir="ltr" data-orientation="horizontal">
                                    <div
                                        role="tablist"
                                        aria-orientation="horizontal"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-6"
                                        
                                        data-orientation="horizontal"
                                        style={{ outline: 'none' }}
                                    >
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                            aria-controls="radix-«r7»-content-all"
                                            data-state="active"
                                            id="radix-«r7»-trigger-all"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                            
                                            data-orientation="horizontal"
                                            data-radix-collection-item=""
                                        >
                                            All Donations
                                        </button>
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                            aria-controls="radix-«r7»-content-tithes"
                                            data-state="inactive"
                                            id="radix-«r7»-trigger-tithes"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                            
                                            data-orientation="horizontal"
                                            data-radix-collection-item=""
                                        >
                                            Tithes
                                        </button>
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                            aria-controls="radix-«r7»-content-offerings"
                                            data-state="inactive"
                                            id="radix-«r7»-trigger-offerings"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                            
                                            data-orientation="horizontal"
                                            data-radix-collection-item=""
                                        >
                                            Offerings
                                        </button>
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                            aria-controls="radix-«r7»-content-special"
                                            data-state="inactive"
                                            id="radix-«r7»-trigger-special"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                            
                                            data-orientation="horizontal"
                                            data-radix-collection-item=""
                                        >
                                            Special Offerings
                                        </button>
                                    </div>
                                    <div
                                        data-state="active"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r7»-trigger-all"
                                        id="radix-«r7»-content-all"
                                        
                                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                        style={{ animationDuration: '0s' }}
                                    >
                                        <div className="rounded-md border">
                                            <div className="relative w-full overflow-auto">
                                                <table className="w-full caption-bottom text-sm">
                                                    <thead className="[&amp;_tr]:border-b">
                                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                            <th className="h-12 px-4 text-left align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-semibold">
                                                                Receipt #
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-semibold">
                                                                Amount
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-semibold">
                                                                Date
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-semibold">
                                                                Type
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell font-semibold">
                                                                Payment Method
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell font-semibold">
                                                                Notes
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="[&amp;_tr:last-child]:border-0">
                                                        <tr className="border-b transition-colors data-[state=selected]:bg-muted hover:bg-gray-50">
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium text-blue-600">
                                                                T-2025-0401
                                                            </td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold text-green-600">
                                                                ₱1,000
                                                            </td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">4/5/2025</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Tithe</span>
                                                            </td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Cash</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell text-gray-600">
                                                                Monthly tithe
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr className="border-b transition-colors data-[state=selected]:bg-muted hover:bg-gray-50">
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium text-blue-600">
                                                                T-2025-0301
                                                            </td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold text-green-600">
                                                                ₱1,500
                                                            </td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3/1/2025</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Tithe</span>
                                                            </td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Cash</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell text-gray-600">
                                                                Monthly tithe
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-state="inactive"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r7»-trigger-tithes"
                                        
                                        id="radix-«r7»-content-tithes"
                                        
                                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                    ></div>
                                    <div
                                        data-state="inactive"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r7»-trigger-offerings"
                                        
                                        id="radix-«r7»-content-offerings"
                                        
                                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                    ></div>
                                    <div
                                        data-state="inactive"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r7»-trigger-special"
                                        
                                        id="radix-«r7»-content-special"
                                        
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