export const MissionPage = () => {
  return (
    <>
      <div className="w-screen h-auto bg-red-500 items-center flex flex-col justify-center">
        <section className="relative w-100 h-[60vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/439335961_942646994065661_3016684866085491924_n.jpg-QgkLF5WtXSJ350APnd9Cz1oRfybemn.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              filter: 'brightness(0.5)',
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our Mission</h1>
            <p className="text-xl md:text-2xl text-white font-light">Making Disciples, Transforming Lives</p>
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
        {/* mission content */}
        <div className="w-100 h-auto">
          <div className="bg-slate-900 text-white -mt-20 relative z-10">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8">
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
                    className="lucide lucide-target w-10 h-10 text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission Statement</h2>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-blue-100">
                  "To glorify God by making disciples of Jesus Christ through biblical preaching,
                  authentic worship, and compassionate service to our community and the world."
                </p>
              </div>
            </div>
          </div>
          {/* how we live our mission */}
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Live Our Mission</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our mission comes to life through four key areas of focus that guide everything we do as a church community.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Card 1: Authentic Worship */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-heart w-8 h-8 text-white">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Worship</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        We gather to worship God with genuine hearts, celebrating His goodness through music, prayer, and the study of His Word. Our worship is both reverent and joyful, reflecting the character of our amazing God.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4 mr-2 text-blue-600">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                          </svg>
                          Sunday worship services
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4 mr-2 text-blue-600">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                          </svg>
                          Prayer and fasting meetings
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4 mr-2 text-blue-600">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                          </svg>
                          Special worship events
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Card 2: Making Disciples */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-users w-8 h-8 text-white">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Making Disciples</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        We are committed to helping people grow in their relationship with Jesus Christ through Bible study, mentorship, and spiritual formation. Every believer is called to be a disciple who makes disciples.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-green-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Bible study groups
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-green-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Mentorship programs
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-green-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Leadership development
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Card 3: Compassionate Service */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-heart w-8 h-8 text-white">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Service</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        We demonstrate God's love through practical service to our community, caring for the physical, emotional, and spiritual needs of those around us. Love in action is a powerful witness.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-purple-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Feeding programs
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-purple-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Community outreach
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-purple-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Family support services
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Card 4: Global Evangelism */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-globe w-8 h-8 text-white">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Evangelism</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        We are passionate about sharing the Gospel both locally and globally, supporting missions and evangelistic efforts that bring the message of salvation to all nations.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-orange-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Local evangelism
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-orange-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Mission support
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-4 h-4 mr-2 text-orange-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                          Church planting
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* biblical foundation */}
          <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Biblical Foundation</h2>
                  <p className="text-xl text-gray-600">
                    Our mission is rooted in the clear commands and promises found in God's Word.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Great Commission</h3>
                    <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                      "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
                    </blockquote>
                    <p className="text-gray-600 font-medium">Matthew 28:19-20</p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Great Commandment</h3>
                    <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                      "Love the Lord your God with all your heart and with all your soul and with all your mind... Love your neighbor as yourself."
                    </blockquote>
                    <p className="text-gray-600 font-medium">Matthew 22:37-39</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* be part of our mission */}
          <div className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Be Part of Our Mission</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                God has called each of us to be part of His mission in the world. Discover how you can use your gifts and passions to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-11 rounded-md px-8 border-white text-white hover:bg-white hover:text-blue-600"
                  href="/ministries"
                >
                  Explore Ministries
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-blue-600 hover:bg-gray-100"
                  href="/be-one-of-us"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}