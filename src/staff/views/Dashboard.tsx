import { KpiMetrics } from "../components/dashboard/KpiMetrics";
import { PrayerRequest } from "../components/dashboard/PrayerRequest";
import { QuickActions } from "../components/dashboard/QuickActions";
import { RecentMember } from "../components/dashboard/RecentMember";
import { RecentService } from "../components/dashboard/RecentService";
import { Resources } from "../components/dashboard/Resources";
import { ServiceStatistic } from "../components/dashboard/ServiceStatistic";
import { UpcomingEvent } from "../components/dashboard/UpcomingEvent";

export const DashboardPage = () => {
    return (<>
        <div className="h-auto items-center flex flex-col justify-center">
            <div className="p-6 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Staff Dashboard</h1>
                        <p className="text-gray-500">Welcome back, {sessionStorage.getItem("name")}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-2">
                        <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-green-600 hover:bg-green-700 text-white" href="/staff/services">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mr-2 h-4 w-4">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                            </svg>
                            Manage Services
                        </a>
                        <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-green-200 text-green-700 hover:bg-green-50" href="/staff/members">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mr-2 h-4 w-4">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            View Members
                        </a>
                    </div>
                </div>
                {/* {KPI}  */}
                <KpiMetrics/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        {/* {Recent Member}  */}
                        <RecentMember/>
                        {/* {Upcoming Event}  */}
                        <UpcomingEvent/>
                        {/* {Service Statistic} */}
                        <ServiceStatistic/>
                    </div>
                    <div className="space-y-6">
                        {/* {Recent Service} */}
                        <RecentService/>
                        {/* {Prayer Request} */}
                        <PrayerRequest/> 
                        {/* {Quick Actions} */}
                        <QuickActions/>
                       {/* {resources} */}
                       <Resources/>
                    </div>
                </div>
            </div>
        </div>
    </>);
}