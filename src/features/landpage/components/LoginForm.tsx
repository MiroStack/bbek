import { IoMdClose } from "react-icons/io";
import AuthRepo from "../../../datasource/repositories/AuthRepo";
import Logo from "../../../assets/img/logobbek.jpg"
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoader, showErrorDialog, showLoader } from "../../../datasource/redux/dialog/DialogSlice";
type LoginProps = {
    show: boolean;
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;

};
export const LoginForm: React.FC<LoginProps> = ({ show, setShowLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const dispatch = useDispatch();
    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const navigate = useNavigate();
    const closeLogin = () => {
        setShowLogin(false);
    }
    async function handleLogin() {
        try {
            dispatch(showLoader());
            const loginResponse = await AuthRepo.login(usernameVal, passwordVal);
            if (loginResponse.statusCode == 200) {
                // sessionStorage.setItem("token", loginResponse.data.token);
                document.cookie = `auth_token=${loginResponse.data.token}; path=/; max-age=604800; secure`;

                // setTimeout(() => {
                //     dispatch(hideLoader());
                //     switch (loginResponse.data.role) {
                //         case "ADMIN":
                //             navigate("/admin");
                //             break;
                //         case "MEMBER":
                //             navigate("/member");
                //             break;
                //         case "STAFF":
                //             navigate("/staff");
                //             break;
                //     }
                //     closeLogin();
                // }, 1500);

            } else {
                sessionStorage.setItem("message", loginResponse.message);
                setTimeout(() => {
                    dispatch(showErrorDialog());
                    dispatch(hideLoader());
                }, 1500);
            }


            // You can now access your LoginResponseModel data inside loginResponse.data or however ApiResponseModel is structured.
        } catch (error) {
            console.error('Login failed', error);

        } finally {
            dispatch(hideLoader());
        }
    }

    return (
        <>
            <div className={`${show ? "flex" : "hidden"} bg-white w-[24rem] md:w-[30rem]  h-auto lg:w-[24rem] lg:h-[26rem] p-3  rounded-lg shadow-lg fixed items-center justify-center flex-col z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <div className="flex items-center justify-center mb-4">
                        <img
                            alt="BBEK Logo"
                            className="w-16 h-16 rounded-full"
                            src={Logo}
                        />
                    </div>
                    <h2
                        id="radix-«rb8»"
                        className="text-lg font-semibold leading-none tracking-tight text-center"
                    >
                        Login to your account
                    </h2>
                    <p
                        id="radix-«rb9»"
                        className="text-sm text-muted-foreground text-center"
                    >
                        Enter your credentials to access your account
                    </p>
                </div>
                <form className="space-y-4 py-4 w-100"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => setUsernameVal(e.target.value)}
                            value={usernameVal}
                            required
                            type="text"
                        // value=""
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="password"
                                onChange={(e) => setPasswordVal(e.target.value)}
                                value={passwordVal}
                                placeholder="Enter your password"
                                required
                                type={showPassword ? 'text' : 'password'}
                            // value=""
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input
                                id="remember"
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                type="checkbox"
                            />
                            <label
                                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal"
                                htmlFor="remember"
                            >
                                Remember me
                            </label>
                        </div>
                        <a className="text-sm text-blue-600 hover:underline" href="/forgot-password">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        type="submit"
                    >
                        Login
                    </button>
                    <div className="text-sm text-center text-gray-600 pt-2">
                        Don't have an account?{" "}
                        <a className="text-blue-600 hover:underline" href="/landpage/beoneofus/waterbaptism">
                            Become a member
                        </a>
                    </div>
                </form>
                <button
                    onClick={closeLogin}
                    type="button"
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                >
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
                        className="lucide lucide-x h-4 w-4"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>


            </div>
        </>);
}