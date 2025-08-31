import { useNavigate } from "react-router-dom";

interface JoinCardProps {
    setJoinEvent: React.Dispatch<React.SetStateAction<boolean>>
    joinEvent: boolean
}
export const JoinCard = ({ setJoinEvent, joinEvent }: JoinCardProps) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="h-[90%] fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] grid w-full gap-4 rounded-b-lg border bg-background p-4 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 sm:max-w-lg bg-white" style={{ pointerEvents: 'auto' }}>
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 id="radix-«r7»" className="text-md font-semibold leading-none tracking-tight text-center text-blue-600">Join Our Church Family</h2>
                    <p id="radix-«r8»" className="text-xs text-muted-foreground text-center">To participate in church events, we invite you to become a baptized member of our congregation.</p>
                </div>
                <div role="alert" className="relative flex items-center justify-center w-full rounded-lg border p-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground text-foreground border-blue-200 bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart h-4 w-4 text-blue-600">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <div className="text-xs [&_p]:leading-relaxed text-blue-800">
                        <strong>Membership Required:</strong> Event participation is available to baptized members of our church family.
                    </div>
                </div>
                <div className="space-y-2 py-4">
                    <h4 className="text-sm font-semibold text-gray-900 text-center">Your Journey to Membership:</h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart h-4 w-4 text-blue-600">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-900">1. Accept Jesus Christ</p>
                                <p className="text-xs text-gray-600">Make the decision to follow Jesus as your Lord and Savior</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-droplets h-4 w-4 text-blue-600">
                                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-900">2. Get Baptized</p>
                                <p className="text-xs text-gray-600">Public declaration of your faith through water baptism</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 text-blue-600">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div >
                                <p className="text-xs font-medium text-gray-900">3. Become a Member</p>
                                <p className="text-xs text-gray-600">Join our church family and participate in all activities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                            setJoinEvent(false)
                            navigate("/landpage/beoneofus/waterbaptism")
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-droplets h-4 w-4 mr-2">
                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                        </svg>
                        Learn About Baptism
                    </button>
                    <button
                        onClick={() => setJoinEvent(false)}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1">
                        Maybe Later
                    </button>
                </div>
                <button
                    onClick={() => setJoinEvent(false)}
                    type="button" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x h-4 w-4">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </>
    );
}