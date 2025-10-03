import { useEffect } from 'react';
import Logo from '../../../../assets/img/logobbek.jpg';
import { motion } from "framer-motion";
import { Cookies } from '../../../../util/Cookies';
import { useAppDispatch } from '../../../../datasource/redux/staff/hooks/hooks';
import AuthRepo from '../../../../datasource/repositories/AuthRepo';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../../../../datasource/redux/user/UserSlice';
export const LoaderPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isNavigateLandpage: boolean = sessionStorage.getItem("navigateLandpage") === "true";
    const token = Cookies.getCookie("auth_token");
    useEffect(() => {
        if (token && !isNavigateLandpage) {
            handleToken();
        }
    }, [])
    async function handleToken() {
        try {
            if (token) {
                const loginResponse = await AuthRepo.validate(token);
                if (loginResponse.statusCode == 200) {
                    dispatch(setUserInfo(loginResponse.data));
                    sessionStorage.setItem("userInfo", JSON.stringify(loginResponse.data));
                    setTimeout(() => {
                        switch (loginResponse.data.role) {
                            case "ADMIN":
                                navigate("/admin");
                                break;
                            case "MEMBER":
                                // navigate("/admin");
                                navigate("/member");
                                break;
                            case "STAFF":
                                navigate("/staff");
                                break;
                            default:
                                navigate("/");
                                console.error("Unknown role:", loginResponse.data.role);
                                break;
                        }
                    }, 2000);

                }
            } else {
                console.error("Token not found in session storage.");
                setTimeout(() => {
                    navigate("/");
                }, 1500)
            }


        } catch (e) {
            Cookies.deleteCookie("auth_token");
        } finally {
        }
    }
    return (
        <div className="w-screen h-screen bg-slate-100 flex flex-col items-center justify-center gap-2">
            <img src={Logo} alt='logo' className='rounded-full h-20' />
            <div className='flex items-center gap-2 mt-2'>
                <motion.div
                    animate={{ y: [0, -8, 0] }} // Move up then down
                    transition={{
                        duration: 0.8,
                        repeat: Infinity, // Loop forever
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div
                    animate={{ y: [0, -8, 0] }} // Move up then down
                    transition={{
                        duration: 1,
                        repeat: Infinity, // Loop forever
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div
                    animate={{ y: [0, -8, 0] }} // Move up then down
                    transition={{
                        duration: 1.2,
                        repeat: Infinity, // Loop forever
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div
                    animate={{ y: [0, -8, 0] }} // Move up then down
                    transition={{
                        duration: 1.4,
                        repeat: Infinity, // Loop forever
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div
                    animate={{ y: [0, -8, 0] }} // Move up then down
                    transition={{
                        duration: 1.6,
                        repeat: Infinity, // Loop forever
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
            </div>

        </div>
    );
}