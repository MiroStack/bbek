import { Link } from "react-router-dom"

export const MyProfile = () => {
    return (
        <>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                    <div className="tracking-tight text-lg font-bold flex items-center">
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
                            className="lucide lucide-user h-5 w-5 mr-2 text-green-600"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        My Profile
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="text-center">
                        <div
                            className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-3 flex items-center justify-center"
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
                                className="lucide lucide-user h-8 w-8 text-green-600"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3 className="font-medium text-gray-900">{sessionStorage.getItem("name")}</h3>
                        <p className="text-sm text-gray-600">Member since Jan 2020</p>
                        <p className="text-sm text-gray-500 mt-1">john.doe@example.com</p>
                    </div>
                    <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full mt-4 text-green-700 border-green-200 hover:bg-green-50"
                        to="/member/profile"
                    >
                        View Full Profile
                    </Link>
                </div>
            </div>
        </>
    );
}