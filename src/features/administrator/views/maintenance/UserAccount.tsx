import PlaceHolder from "../../../../assets/img/placeholder.svg"
export const UserAccountAdminPage = () => {
    return (
        <div className="w-100 h-auto flex flex-col items-center justify-center">
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">User Accounts</h1>
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        type="button"
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
                        Add New User
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">5</h3>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-full">
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
                                        className="lucide lucide-user-cog h-6 w-6 text-blue-700"
                                    >
                                        <circle cx="18" cy="15" r="3"></circle>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M10 15H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="m21.7 16.4-.9-.3"></path>
                                        <path d="m15.2 13.9-.9-.3"></path>
                                        <path d="m16.6 18.7.3-.9"></path>
                                        <path d="m19.1 12.2.3-.9"></path>
                                        <path d="m19.6 18.7-.4-1"></path>
                                        <path d="m16.8 12.3-.4-1"></path>
                                        <path d="m14.3 16.6 1-.4"></path>
                                        <path d="m20.7 13.8 1-.4"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Active Users</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">4</h3>
                                </div>
                                <div className="p-3 bg-green-100 rounded-full">
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
                                        className="lucide lucide-user-cog h-6 w-6 text-green-700"
                                    >
                                        <circle cx="18" cy="15" r="3"></circle>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M10 15H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="m21.7 16.4-.9-.3"></path>
                                        <path d="m15.2 13.9-.9-.3"></path>
                                        <path d="m16.6 18.7.3-.9"></path>
                                        <path d="m19.1 12.2.3-.9"></path>
                                        <path d="m19.6 18.7-.4-1"></path>
                                        <path d="m16.8 12.3-.4-1"></path>
                                        <path d="m14.3 16.6 1-.4"></path>
                                        <path d="m20.7 13.8 1-.4"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Member Users</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">2</h3>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-full">
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
                                        className="lucide lucide-shield h-6 w-6 text-purple-700"
                                    >
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
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
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                                    placeholder="Search users..."
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        User
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Email
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Role
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        Last Login
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Status
                                    </th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                                <img
                                                    alt="Admin User"
                                                    loading="lazy"

                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="h-full w-full "
                                                   src={PlaceHolder}
                                                    
                                                />
                                            </div>
                                            <div className="font-medium">Admin User</div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        admin@bbek.org
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                                            Admin
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        2025-04-10 09:30 AM
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                            type="button"
                                            id="radix-:rd:"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
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
                                                className="lucide lucide-ellipsis h-4 w-4"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                            <span className="sr-only">Actions</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                                <img
                                                    alt="Secretary Account"
                                                    loading="lazy"

                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="h-full w-full"
                                                   src={PlaceHolder}
                                                    
                                                />
                                            </div>
                                            <div className="font-medium">Secretary Account</div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        secretary@bbek.org
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            Staff
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        2025-04-09 02:15 PM
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                            type="button"
                                            id="radix-:rf:"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
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
                                                className="lucide lucide-ellipsis h-4 w-4"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                            <span className="sr-only">Actions</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                                <img
                                                    alt="Treasurer Account"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="h-full w-full"
                                                   src={PlaceHolder}
                                                    
                                                />
                                            </div>
                                            <div className="font-medium">Treasurer Account</div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        treasurer@bbek.org
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            Staff
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        2025-04-08 10:45 AM
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                            type="button"
                                            id="radix-:rh:"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
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
                                                className="lucide lucide-ellipsis h-4 w-4"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                            <span className="sr-only">Actions</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                                <img
                                                    alt="John Doe"
                                                    loading="lazy"

                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="h-full w-full"
                                                   src={PlaceHolder}
                                                    
                                                />
                                            </div>
                                            <div className="font-medium">John Doe</div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        john.doe@bbek.org
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                                            Member
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        2025-04-07 03:20 PM
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                            type="button"
                                            id="radix-:rj:"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
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
                                                className="lucide lucide-ellipsis h-4 w-4"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                            <span className="sr-only">Actions</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                                                <img
                                                    alt="Jane Smith"
                                                    loading="lazy"

                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="h-full w-full"
                                                   src={PlaceHolder}
                                                    
                                                />
                                            </div>
                                            <div className="font-medium">Jane Smith</div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        jane.smith@bbek.org
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                                            Member
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        2025-04-05 11:10 AM
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                                            Inactive
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                            type="button"
                                            id="radix-:rl:"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
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
                                                className="lucide lucide-ellipsis h-4 w-4"
                                            >
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                            <span className="sr-only">Actions</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}