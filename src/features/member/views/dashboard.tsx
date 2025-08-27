import { UpcomingEvent } from "../components/dashboard/UpcomingEvents"
import { MyProfile } from "../components/dashboard/MyProfile"
import { QuickAction } from "../components/dashboard/QuickAction"
import { RecentActivities } from "../components/dashboard/RecentActivities"
import { Announcement } from "../components/dashboard/Announcement"
import { DashboardAnalytics } from "../components/dashboard/DashboardAnalytics"

export const DashboardMemberPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* {Dashboard header} */}
                <div className="bg-white border-b border-gray-200 px-6 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Member Dashboard</h1>
                            <p className="text-gray-600 mt-1">Welcome back! Here's your church activity overview.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-green-700 border-green-200"
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
                                    className="lucide lucide-user h-3 w-3 mr-1"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                Active Member
                            </div>
                        </div>
                    </div>

                </div>
                {/* {dashboard analytics} */}
                <div className="p-6">
                    <DashboardAnalytics />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            {/* {Announcement} */}
                            <Announcement />
                            <div>
                                {/* {Recent Activities} */}
                                <RecentActivities />
                                {/* {Quick Action} */}
                                <QuickAction />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* {My Profile} */}
                            <MyProfile />
                            {/* {Upcoming Events} */}
                            <UpcomingEvent />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}