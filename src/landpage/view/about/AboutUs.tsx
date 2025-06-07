export const AboutUsPage = () => {
    return (
        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center">
                <section className="relative h-screen w-100 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60940904_644013782780677_9060964737684078592_n.jpg-2YMGA7eKGhc8nlFG4dusUjIzmk1HYF.jpeg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            filter: "brightness(0.5)",
                        }}
                    ></div>

                    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            About Us
                        </h1>
                        <p className="text-lg md:text-2xl text-white font-light">
                            Our Story, Mission &amp; Values
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


                {/* about main page */}
                <main className="flex-1 bg-white">
                    <div className="bg-slate-900 text-white mt-0 relative z-10">
                        <div className="container mx-auto px-4 py-24">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                                <div className="space-y-4">
                                    <div className="text-5xl md:text-4xl font-bold text-blue-400">15+</div>
                                    <div className="text-lg text-slate-300">Years of Ministry</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-5xl md:text-4xl font-bold text-blue-400">500+</div>
                                    <div className="text-lg text-slate-300">Church Members</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-5xl md:text-4xl font-bold text-blue-400">12</div>
                                    <div className="text-lg text-slate-300">Active Ministries</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-5xl md:text-4xl font-bold text-blue-400">1000+</div>
                                    <div className="text-lg text-slate-300">Lives Touched</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-32 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-8xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                    <div className="space-y-12">
                                        <h2 className="text-5xl md:text-8xl font-bold text-gray-900 leading-tight">Our Story</h2>
                                        <p className="text-2xl md:text-2xl text-gray-700 leading-relaxed">
                                            Bible Baptist Ekklesia of Kawit was founded with a simple yet profound mission: to create a community where people can encounter God's love, grow in their faith, and make a meaningful impact in the world.
                                        </p>
                                        <p className="text-2xl md:text-2xl text-gray-700 leading-relaxed">
                                            What started as a small gathering of believers has grown into a vibrant church family committed to biblical truth, authentic worship, and compassionate service. We believe that every person has a purpose and that together, we can make a difference in our community and beyond.
                                        </p>
                                        <p className="text-2xl md:text-2xl text-gray-700 leading-relaxed">
                                            Our journey has been marked by God's faithfulness, the dedication of our members, and a shared vision to see lives transformed by the Gospel of Jesus Christ.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                alt="Church congregation"
                                                className="w-full h-full object-cover"
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60940904_644013782780677_9060964737684078592_n.jpg-2YMGA7eKGhc8nlFG4dusUjIzmk1HYF.jpeg"
                                            />
                                        </div>
                                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
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
                                                className="lucide lucide-heart w-24 h-24 text-white"
                                            >
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-32 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-8xl mx-auto">
                                <div className="text-center mb-24">
                                    <h2 className="text-5xl md:text-8xl font-bold text-gray-900 mb-8">
                                        Our Core Values
                                    </h2>
                                    <p className="text-2xl md:4 text-gray-600 max-w-5xl mx-auto leading-relaxed">
                                        These values guide everything we do as a church community and shape how we serve God and others.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                                    <div className="text-center group">
                                        <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform duration-300">
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
                                                className="lucide lucide-book-open w-16 h-16 text-white"
                                            >
                                                <path d="M12 7v14"></path>
                                                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Biblical Truth</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            We believe in the authority and sufficiency of Scripture as our guide for faith and practice.
                                        </p>
                                    </div>

                                    <div className="text-center group">
                                        <div className="w-32 h-32 bg-green-600 rounded-3xl flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform duration-300">
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
                                                className="lucide lucide-heart w-16 h-16 text-white"
                                            >
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Authentic Love</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            We strive to love God wholeheartedly and love our neighbors as ourselves in genuine community.
                                        </p>
                                    </div>

                                    <div className="text-center group">
                                        <div className="w-32 h-32 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform duration-300">
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
                                                className="lucide lucide-users w-16 h-16 text-white"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Community</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            We believe in the power of authentic relationships and supporting one another in our faith journey.
                                        </p>
                                    </div>

                                    <div className="text-center group">
                                        <div className="w-32 h-32 bg-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform duration-300">
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
                                                className="lucide lucide-globe w-16 h-16 text-white"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                <path d="M2 12h20"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Impact</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            We are committed to sharing the Gospel locally and supporting missions around the world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="py-32 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto text-center">
                                <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
                                <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
                                    Our church is led by dedicated servants who are passionate about God's Word and committed to shepherding our congregation with wisdom and love.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                                    <div className="bg-gray-50 rounded-3xl p-12">
                                        <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-8"></div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pastor Daniel Reyes</h3>
                                        <p className="text-blue-600 font-medium mb-6 text-lg">Senior Pastor</p>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Leading our church with biblical wisdom and a heart for evangelism and discipleship.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-3xl p-12">
                                        <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-8"></div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pastor Emmanuel Santos</h3>
                                        <p className="text-blue-600 font-medium mb-6 text-lg">Associate Pastor</p>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Supporting our ministry with a passion for community outreach and spiritual growth.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md bg-blue-600 hover:bg-blue-700 text-lg px-12 py-6"
                                    href="/about/leadership"
                                >
                                    Meet Our Full Leadership Team
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="py-32 bg-blue-600 text-white">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-4xl font-bold mb-8">Join Our Story</h2>
                            <p className="text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
                                We believe that everyone has a place in God's story. Come discover how you can be part of what God is doing at Bible Baptist Ekklesia of Kawit.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-11 rounded-md border-white text-white hover:bg-white hover:text-blue-600 text-lg px-12 py-6"
                                    href="/visit"
                                >
                                    Plan Your Visit
                                </a>
                                <a
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 py-6"
                                    href="/be-one-of-us"
                                >
                                    Get Connected
                                </a>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
        </>
    )
}