import BackgroundImage from "../../../assets/img/placeholder.svg";
export const LivePage = () => {
    return (
        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center">
                <section className="relative w-100 h-[60vh] min-h-[400px] flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("${BackgroundImage}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            filter: 'brightness(0.5)',
                        }}
                    ></div>
                    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            LIVE WORSHIP</h1>
                        <p className="text-xl md:text-2xl text-white font-light">Join us online for worship and the teaching of God's Word</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                            <path
                                fill="#ffffff"
                                fillOpacity="1"
                                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                            ></path>
                        </svg>
                    </div>
                </section>
                {/* live content */}
                <div className="h-auto w-100 mx-5 py-5 flex flex-col items-center justify-center gap-2">
                    <main className="flex-1 bg-white">
                        <section className=" bg-white">
                            <div className="container mx-auto px-4">
                                <div dir="ltr" data-orientation="horizontal" className="max-w-4xl mx-auto">
                                    <div
                                        role="tablist"
                                        aria-orientation="horizontal"
                                        className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-1 mb-8"
                                        tabIndex={0}
                                        data-orientation="horizontal"
                                        style={{ outline: 'none' }}
                                    >
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                            aria-controls="radix-«r86»-content-watch"
                                            data-state="active"
                                            id="radix-«r86»-trigger-watch"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                            tabIndex={-1}
                                            data-orientation="horizontal"
                                            data-radix-collection-item=""
                                        >
                                            Watch Live
                                        </button>
                                    </div>
                                    <div
                                        data-state="active"
                                        data-orientation="horizontal"
                                        role="tabpanel"
                                        aria-labelledby="radix-«r86»-trigger-watch"
                                        id="radix-«r86»-content-watch"
                                        tabIndex={0}
                                        className=" mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
                                        style={{ animationDuration: '0s' }}
                                    >
                                        <div className="h-[16rem] md:h-auto bg-gray-900 aspect-video relative rounded-lg overflow-hidden shadow-xl">
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                                <div className="bg-red-600 px-3 py-1 rounded-full text-sm mb-4">
                                                    LIVE
                                                </div>
                                                <h3 className="text-2xl font-bold mb-4">
                                                    Sunday Morning Service
                                                </h3>
                                                <p className="mb-8">
                                                    Our live stream will begin shortly. Please stay tuned.
                                                </p>
                                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
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
                                                        className="lucide lucide-facebook mr-2 h-4 w-4"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                    </svg>{' '}
                                                    Watch on Facebook
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 bg-gray-100">
                            <div className="container mx-auto px-4">
                                <div className="max-w-3xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold mb-4">Never Miss a Service</h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Follow our Facebook page and get notified whenever we go live.
                                    </p>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
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
                                            className="lucide lucide-facebook mr-2 h-5 w-5"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>{' '}
                                        Follow on Facebook
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 bg-white">
                            <div className="container mx-auto px-4">
                                <div className="max-w-3xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold mb-4">Join Us In Person</h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Nothing compares to worshipping together in person. We invite you to
                                        join us for our regular services.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                                        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2">Sunday Morning Service</h3>
                                                <p className="text-gray-600 mb-1">Every Sunday</p>
                                                <p className="text-gray-600 mb-3">9:00 AM - 11:00 AM</p>
                                                <p className="text-gray-600">
                                                    Join us for worship, prayer, and the teaching of God's Word.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2">
                                                    Wednesday Prayer Meeting
                                                </h3>
                                                <p className="text-gray-600 mb-1">Every Wednesday</p>
                                                <p className="text-gray-600 mb-3">7:00 PM - 8:30 PM</p>
                                                <p className="text-gray-600">
                                                    A midweek gathering for prayer, worship, and biblical
                                                    encouragement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <a href="/about">
                                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
                                                Plan Your Visit
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}