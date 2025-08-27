export const SendPrayerPage = () => {
    return (
        <>
            <main className="w-100 flex-1">
                <section className="relative py-20 md:py-28 bg-purple-700">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                            Send a Prayer Request
                        </h1>
                        <p
                            className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in"
                            style={{ animationDelay: '100ms' }}
                        >
                            "Do not be anxious about anything, but in every situation, by prayer and
                            petition, with thanksgiving, present your requests to God." -
                            Philippians 4:6
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 120"
                            className="w-full"
                        >
                            <path
                                fill="#ffffff"
                                fillOpacity="1"
                                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                            ></path>
                        </svg>
                    </div>
                </section>
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2
                                className="text-3xl font-bold mb-6 animate-fade-in"
                                style={{ animationDelay: '200ms' }}
                            >
                                Our Prayer Ministry
                            </h2>
                            <p
                                className="text-lg text-gray-600 animate-fade-in"
                                style={{ animationDelay: '300ms' }}
                            >
                                Our dedicated prayer team is committed to lifting your needs before
                                God. We believe in the power of prayer and stand with you in faith
                                for God's intervention in your situation.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center animate-fade-in-up"
                                style={{ animationDelay: '400ms' }}
                            >
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 transform transition-all duration-500 hover:scale-110">
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
                                            className="lucide lucide-circle h-8 w-8 text-purple-600"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                        </svg>
                                    </div>
                                    <div className="text-2xl font-semibold leading-none tracking-tight">
                                        Confidential
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p>
                                        Your prayer requests are kept confidential and shared only with
                                        our prayer team members.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center animate-fade-in-up"
                                style={{ animationDelay: '500ms' }}
                            >
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 transform transition-all duration-500 hover:scale-110">
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
                                            className="lucide lucide-heart h-8 w-8 text-purple-600"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                    <div className="text-2xl font-semibold leading-none tracking-tight">
                                        Compassionate
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p>
                                        Our prayer team approaches each request with love, empathy, and
                                        genuine concern.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center animate-fade-in-up"
                                style={{ animationDelay: '600ms' }}
                            >
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 transform transition-all duration-500 hover:scale-110">
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
                                            className="lucide lucide-shield h-8 w-8 text-purple-600"
                                        >
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        </svg>
                                    </div>
                                    <div className="text-2xl font-semibold leading-none tracking-tight">
                                        Faithful
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p>
                                        We commit to praying for your requests consistently and with
                                        unwavering faith in God's power.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm animate-fade-in-up"
                                style={{ animationDelay: '700ms' }}
                            >
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="text-2xl font-semibold leading-none tracking-tight">
                                        Submit Your Prayer Request
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Share your prayer needs with us, and our prayer team will lift
                                        them up to God.
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="first-name"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                                                    id="first-name"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="last-name"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                                                    id="last-name"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                                                id="email"
                                                placeholder="Enter your email"
                                                type="email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="phone"
                                            >
                                                Phone Number (Optional)
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                                                id="phone"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Prayer Request Type
                                            </label>
                                            <div
                                                role="radiogroup"
                                                aria-required="false"
                                                dir="ltr"
                                                className="grid gap-2"
                                                tabIndex={0}
                                                style={{ outline: 'none' }}
                                            >
                                                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                    <button
                                                        type="button"
                                                        role="radio"
                                                        aria-checked="true"
                                                        data-state="checked"
                                                        value="personal"
                                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        id="personal"
                                                        tabIndex={-1}
                                                        data-radix-collection-item=""
                                                    >
                                                        <span data-state="checked" className="flex items-center justify-center">
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
                                                                className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                    <input
                                                        aria-hidden="true"
                                                        tabIndex={-1}
                                                        type="radio"
                                                        value="personal"
                                                        checked={false}
                                                        style={{
                                                            transform: 'translateX(-100%)',
                                                            position: 'absolute',
                                                            pointerEvents: 'none',
                                                            opacity: '0',
                                                            margin: '0px',
                                                            width: '16px',
                                                            height: '16px',
                                                        }}
                                                    />
                                                    <label
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        htmlFor="personal"
                                                    >
                                                        Personal
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                    <button
                                                        type="button"
                                                        role="radio"
                                                        aria-checked="false"
                                                        data-state="unchecked"
                                                        value="family"
                                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        id="family"
                                                        tabIndex={-1}
                                                        data-radix-collection-item=""
                                                    ></button>
                                                    <input
                                                        aria-hidden="true"
                                                        tabIndex={-1}
                                                        type="radio"
                                                        value="family"
                                                        style={{
                                                            transform: 'translateX(-100%)',
                                                            position: 'absolute',
                                                            pointerEvents: 'none',
                                                            opacity: '0',
                                                            margin: '0px',
                                                            width: '16px',
                                                            height: '16px',
                                                        }}
                                                    />
                                                    <label
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        htmlFor="family"
                                                    >
                                                        Family
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                    <button
                                                        type="button"
                                                        role="radio"
                                                        aria-checked="false"
                                                        data-state="unchecked"
                                                        value="friend"
                                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        id="friend"
                                                        tabIndex={-1}
                                                        data-radix-collection-item=""
                                                    ></button>
                                                    <input
                                                        aria-hidden="true"
                                                        tabIndex={-1}
                                                        type="radio"
                                                        value="friend"
                                                        style={{
                                                            transform: 'translateX(-100%)',
                                                            position: 'absolute',
                                                            pointerEvents: 'none',
                                                            opacity: '0',
                                                            margin: '0px',
                                                            width: '16px',
                                                            height: '16px',
                                                        }}
                                                    />
                                                    <label
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        htmlFor="friend"
                                                    >
                                                        Friend
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                    <button
                                                        type="button"
                                                        role="radio"
                                                        aria-checked="false"
                                                        data-state="unchecked"
                                                        value="other"
                                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        id="other"
                                                        tabIndex={-1}
                                                        data-radix-collection-item=""
                                                    ></button>
                                                    <input
                                                        aria-hidden="true"
                                                        tabIndex={-1}
                                                        type="radio"
                                                        value="other"
                                                        style={{
                                                            transform: 'translateX(-100%)',
                                                            position: 'absolute',
                                                            pointerEvents: 'none',
                                                            opacity: '0',
                                                            margin: '0px',
                                                            width: '16px',
                                                            height: '16px',
                                                        }}
                                                    />
                                                    <label
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        htmlFor="other"
                                                    >
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="prayer-request"
                                            >
                                                Prayer Request
                                            </label>
                                            <textarea
                                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                                                id="prayer-request"
                                                placeholder="Please share your prayer request in detail"
                                            ></textarea>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                <button
                                                    type="button"
                                                    role="checkbox"
                                                    aria-checked="false"
                                                    data-state="unchecked"
                                                    value="on"
                                                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                                    id="urgent"
                                                ></button>
                                                <input
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                    type="checkbox"
                                                    value="on"
                                                    style={{
                                                        transform: 'translateX(-100%)',
                                                        position: 'absolute',
                                                        pointerEvents: 'none',
                                                        opacity: '0',
                                                        margin: '0px',
                                                        width: '16px',
                                                        height: '16px',
                                                    }}
                                                />
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="urgent"
                                                >
                                                    This is an urgent prayer request
                                                </label>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                <button
                                                    type="button"
                                                    role="checkbox"
                                                    aria-checked="false"
                                                    data-state="unchecked"
                                                    value="on"
                                                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                                    id="share"
                                                ></button>
                                                <input
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                    type="checkbox"
                                                    value="on"
                                                    style={{
                                                        transform: 'translateX(-100%)',
                                                        position: 'absolute',
                                                        pointerEvents: 'none',
                                                        opacity: '0',
                                                        margin: '0px',
                                                        width: '16px',
                                                        height: '16px',
                                                    }}
                                                />
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="share"
                                                >
                                                    I give permission to share this request with the prayer team
                                                    (keeping personal details confidential)
                                                </label>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1">
                                                <button
                                                    type="button"
                                                    role="checkbox"
                                                    aria-checked="false"
                                                    data-state="unchecked"
                                                    value="on"
                                                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                                    id="follow-up"
                                                ></button>
                                                <input
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                    type="checkbox"
                                                    value="on"
                                                    style={{
                                                        transform: 'translateX(-100%)',
                                                        position: 'absolute',
                                                        pointerEvents: 'none',
                                                        opacity: '0',
                                                        margin: '0px',
                                                        width: '16px',
                                                        height: '16px',
                                                    }}
                                                />
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="follow-up"
                                                >
                                                    I would like someone to follow up with me
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center p-6 pt-0">
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transform transition-all duration-300 hover:scale-105">
                                        Submit Prayer Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2
                                className="text-3xl font-bold text-center mb-8 animate-fade-in"
                                style={{ animationDelay: '800ms' }}
                            >
                                How We Handle Prayer Requests
                            </h2>
                            <div
                                className="bg-purple-50 p-6 rounded-lg animate-fade-in"
                                style={{ animationDelay: '900ms' }}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
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
                                            className="lucide lucide-users h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        <div>
                                            <h3 className="font-bold">Prayer Team Review</h3>
                                            <p className="text-gray-600">
                                                All prayer requests are reviewed by our prayer team leaders
                                                and distributed to our prayer warriors.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
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
                                            className="lucide lucide-shield h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0"
                                        >
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        </svg>
                                        <div>
                                            <h3 className="font-bold">Confidentiality</h3>
                                            <p className="text-gray-600">
                                                We maintain strict confidentiality. Personal details are kept
                                                private and only shared with permission.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
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
                                            className="lucide lucide-heart h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                        <div>
                                            <h3 className="font-bold">Ongoing Prayer</h3>
                                            <p className="text-gray-600">
                                                We commit to praying for your request for at least 30 days,
                                                with urgent requests receiving immediate attention.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}