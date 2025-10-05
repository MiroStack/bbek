import { useState } from "react";
import { useAppSelector } from "../../../datasource/redux/staff/hooks/hooks";
import { KpiMetrics } from "../components/dashboard/KpiMetrics";
import { PrayerRequest } from "../components/dashboard/PrayerRequest";
import { QuickActions } from "../components/dashboard/QuickActions";
import { RecentMember } from "../components/dashboard/RecentMember";
import { RecentService } from "../components/dashboard/RecentService";
import { Resources } from "../components/dashboard/Resources";
import { ServiceStatistic } from "../components/dashboard/ServiceStatistic";
import { UpcomingEvent } from "../components/dashboard/UpcomingEvent";
import type { UserInfoModel } from "../../../datasource/models/User/UserInfoModel";
import { Link } from "react-router-dom";


export const DashboardAdminPage = () => {

    const userInfo = sessionStorage.getItem("userInfo")
    const [userInfoState, setUserInfoState] = useState<UserInfoModel>(JSON.parse(userInfo ?? "") ?? {} as UserInfoModel);
    return (<>
        <div className="h-auto items-center flex flex-col justify-center">
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Church Admin Dashboard</h1>
                    <p className="text-gray-600 mt-2">Welcome back {userInfoState.firstname}! Here's what's happening at BBEK Church.</p>
                </div>
                <KpiMetrics/>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up h-5 w-5 mr-2 text-green-600">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                                Recent Activities
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                    <div className="p-2 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 text-gray-600">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">New member registered</p>
                                        <p className="text-sm text-gray-600">Maria Santos</p>
                                    </div>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                    <div className="p-2 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-droplets h-4 w-4 text-gray-600">
                                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">Baptism scheduled</p>
                                        <p className="text-sm text-gray-600">John Dela Cruz</p>
                                    </div>
                                    <p className="text-xs text-gray-500">4 hours ago</p>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                    <div className="p-2 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart h-4 w-4 text-gray-600">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">Marriage ceremony completed</p>
                                        <p className="text-sm text-gray-600">Robert &amp; Sarah Garcia</p>
                                    </div>
                                    <p className="text-xs text-gray-500">1 day ago</p>
                                </div>
                                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                    <div className="p-2 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4 text-gray-600">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">New event created</p>
                                        <p className="text-sm text-gray-600">Youth Fellowship</p>
                                    </div>
                                    <p className="text-xs text-gray-500">2 days ago</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full" href="/admin/audit-trail">View All Activities</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="text-2xl font-semibold leading-none tracking-tight">Quick Actions</div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="grid grid-cols-1 gap-4">
                                <a className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 justify-start" href="/admin/members">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 rounded-full bg-blue-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus h-4 w-4 text-blue-600">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                                <line x1="22" x2="16" y1="11" y2="11"></line>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium">Add New Member</p>
                                            <p className="text-sm text-gray-600">Register a new church member</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 justify-start" href="/admin/events">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 rounded-full bg-green-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus h-4 w-4 text-green-600">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium">Create Event</p>
                                            <p className="text-sm text-gray-600">Schedule a new church event</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 justify-start" href="/admin/donations">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 rounded-full bg-purple-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gift h-4 w-4 text-purple-600">
                                                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                                <path d="M12 8v13"></path>
                                                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium">Record Donation</p>
                                            <p className="text-sm text-gray-600">Add new tithe or offering</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 justify-start" href="/admin/messages">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 rounded-full bg-orange-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square h-4 w-4 text-orange-600">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium">View Messages</p>
                                            <p className="text-sm text-gray-600">Check member messages</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="rounded-lg bg-card text-card-foreground border-0 shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="text-2xl font-semibold leading-none tracking-tight">Church Services Overview</div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-droplets h-8 w-8 text-blue-600 mx-auto mb-2">
                                        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                                    </svg>
                                    <h3 className="font-semibold text-gray-900">Water Baptism</h3>
                                    <p className="text-sm text-gray-600 mt-1">5 scheduled this month</p>
                                    <Link to={"service/waterbaptism"} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-3" >Manage</Link>
                                </div>
                                <div className="text-center p-4 bg-pink-50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart h-8 w-8 text-pink-600 mx-auto mb-2">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                    </svg>
                                    <h3 className="font-semibold text-gray-900">Marriage</h3>
                                    <p className="text-sm text-gray-600 mt-1">2 ceremonies this month</p>
                                    <Link to={"service/marriage-record"} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-3" >Manage</Link>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-8 w-8 text-green-600 mx-auto mb-2">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                    <h3 className="font-semibold text-gray-900">Child Dedication</h3>
                                    <p className="text-sm text-gray-600 mt-1">3 scheduled this month</p>
                                    <Link to={"service/child-dedication"} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-3">Manage</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}