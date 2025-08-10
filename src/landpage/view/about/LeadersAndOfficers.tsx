import { motion } from "framer-motion";
import Placeholder from "../../../assets/img/placeholder.svg";
export const LeadersAndOfficers = () => {
    return (
        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center">
                <motion.section
                    className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
                    <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
                        <motion.h2
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                            className="text-4xl font-bold text-blue-500">Leaders and Officers</motion.h2>
                        <motion.p
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
                            className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
                            Our church is led by a dedicated team of leaders and officers who are committed to serving our community and guiding us in our mission. They work tirelessly to ensure that our church remains a welcoming and nurturing place for all.
                        </motion.p>
                    </div>
                </motion.section>

                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-5">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-48 h-48 bg-gray-200 rounded-full mb-4 overflow-hidden">
                            <img
                                alt="Rev. Rodolfo Mojica"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                                data-nimg="1"
                                className="object-cover"
                                src={Placeholder}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Rev. Rodolfo Mojica</h3>
                        <p className="text-blue-600 mb-4">Sending Pastor</p>
                        <p className="text-gray-600 max-w-xs">
                            Leading our church with wisdom and dedication, guiding our congregation in spiritual growth.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-48 h-48 bg-gray-200 rounded-full mb-4 overflow-hidden">
                            <img
                                alt="Rev. Fresco Q. Sulapas"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                                data-nimg="1"
                                className="object-cover"
                                src={Placeholder}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Rev. Fresco Q. Sulapas</h3>
                        <p className="text-blue-600 mb-4">Senior Pastor</p>
                        <p className="text-gray-600 max-w-xs">
                            Serving our congregation with passion and commitment to the Word of God and the Great Commission.
                        </p>
                    </div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { ease: 'easeInOut', delay: 0.2 }
                    }}
                    className="p-5 w-100 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div>
                                <h3 className="text-xl font-bold mb-4 text-center">Adult Ladies Department</h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="font-medium">President:</span><span>Sis Danica Aldousari</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Vice President:</span><span>Sis Melody Bilog</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Secretary:</span><span>Sis. Espie Apelado</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Treasurer:</span><span>Sis Nancy Belleza</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Auditor:</span><span>Ma'am Gina Sulapas</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Coordinator:</span><span>Sis Danica Aldousari</span></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4 text-center">Adult Men Department</h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="font-medium">President:</span><span>Bro. Danny Delossantos</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Vice President:</span><span>Bro. Roland Santos</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Secretary:</span><span>Bro. Robert Apelado</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Treasurer:</span><span>Bro. Rowel Bucayan</span></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4 text-center">Young People Department</h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="font-medium">President:</span><span>Sis Jessica Las</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Vice President:</span><span>Bro. Jessie Timuat</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Secretary:</span><span>Sis. Erica Villegas</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Assistant Secretary:</span><span>Sis. Selah Acojedo</span></li>
                                    <li className="flex justify-between"><span className="font-medium">Treasurer:</span><span>Sis Frena May Sulapas</span></li>
                                    <li className="flex justify-between"><span className="font-medium">PIO:</span><span>Sis. Camille Bucayan</span></li>
                                    <li className="flex justify-between"><span className="font-medium">SOCMED Coordinator:</span><span>Sis. Donita Sibugan</span></li>
                                </ul>
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