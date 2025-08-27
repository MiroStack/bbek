import { motion } from "framer-motion"

export const AboutUsPage = () => {
    return (
        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center">
                <motion.section
                    className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
                    <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
                        <motion.h2
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                            className="text-4xl font-bold text-blue-500">About Our Church</motion.h2>
                        <motion.p
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
                            className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
                            We are a community of believers dedicated to spreading the love and teachings of Jesus Christ. Our church is a place where you can grow in faith, find support, and connect with others.
                        </motion.p>
                    </div>

                </motion.section>

                <motion.section
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-2 w-full max-w-6xl">
                    <div className="w-100 p-5">
                        <div>
                            <h2 className="text-2xl font-bold text-blue-600 ">Our Mission</h2>
                            <hr></hr>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full mb-4"
                            ></div>
                            <p className="text-gray-700 text-balance">
                                "We are the church, we are committed to love the Lord with all thy heart, with all thy soul and with all thy mind. Make disciples to Christ, teach, train, build and equip every believers to become soul winners and Godly leaders of the society in order to help for transforming community with fear of God and believer of Christ Jesus, ministering people and planting churches to every places."
                            </p>
                        </div>
                    </div>
                    <div className="w-100 p-5">
                        <div>
                            <h2 className="text-2xl font-bold text-blue-600 ">Our Vision</h2>
                            <hr></hr>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full mb-4"
                            ></div>
                            <p className="text-gray-700 mb-4 text-balance">
                                "We are independent Bible Baptist Church fulfilling and carry-out Christ great commission to propagate the Gospel to all mankind and win souls to Christ as found in Matthew 28:19-20. Firmly preach the word of truth into the world. The bible is the final authority of our faith and practice and pure foundation of doctrines."                            </p>
                        </div>
                    </div>

                </motion.section>

                <motion.section
                    initial={{ backgroundColor: '#ffffff', opacity: 0 }}
                    whileInView={{
                        backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
                        opacity: 1,
                        transition: { ease: 'easeInOut', delay: 0.2 }
                    }}
                    className="py-12 w-100 " id="history">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our History</h2>
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-8">

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-center">
                                        <div className="bg-blue-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                                            2006
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Started to have Mission work in Kawit</h3>
                                        <p className="text-gray-700">
                                            Our church began as a small mission work in Kawit, Cavite, with a vision to reach the community with the Gospel.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-center">
                                        <div className="bg-blue-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                                            2015
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Started to support Foreign Missionaries</h3>
                                        <p className="text-gray-700">
                                            We expanded our mission work by beginning to support foreign missionaries, extending our reach globally.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-center">
                                        <div className="bg-blue-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                                            2016
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">1st Anniversary Celebration as an Organized Church</h3>
                                        <p className="text-gray-700">
                                            We celebrated our first anniversary as an officially organized church, marking a significant milestone in our journey.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-center">
                                        <div className="bg-blue-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                                            2021
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">1st World Missions Conference</h3>
                                        <p className="text-gray-700">
                                            We hosted our first World Missions Conference, bringing together missionaries and supporters to further the Great Commission.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-center">
                                        <div className="bg-blue-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                                            2025
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">10th Church Anniversary &amp; 4th World Missions Conference</h3>
                                        <p className="text-gray-700">
                                            We look forward to celebrating our 10th anniversary as a church and hosting our 4th World Missions Conference.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ backgroundColor: '#ffffff', opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { ease: 'easeInOut', delay: 0.2 }
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="py-16 bg-white text-black">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
                        <p className="text-xl mb-10 max-w-2xl mx-auto">
                            We invite you to be a part of our church family. Come worship with us and experience the love of Christ.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <button className="bg-blue-600 hover:bg-blue-400 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-full px-8">
                                Become a Member
                            </button>
                        </div>
                    </div>
                </motion.section>



            </div>
        </>
    )
}