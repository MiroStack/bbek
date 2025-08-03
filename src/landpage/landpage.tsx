import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer";
import { LoginForm } from "./components/LoginForm";
import { useEffect, useState } from "react";
import { SideNav } from "./components/SideNav";
import { Loader } from "./components/Loader";
import AuthRepo from "../repositories/AuthRepo";
import { useNavigate } from "react-router-dom";
import { ErrorDialog } from "./components/ErrorDialog";
import { Cookies } from "../util/Cookies";
import { SocialMediaGroups } from "./components/SocialMediaGroud";

export const LandPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSide, setShowSide] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showError, setShowError] = useState(false);
    const token = Cookies.getCookie("auth_token");
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            handleToken();
        }
    }, [])
    async function handleToken() {
        try {
            setShowLoader(true);
            if (token) {
                const loginResponse = await AuthRepo.validate(token);
                    if(loginResponse.statusCode == 200){
                        sessionStorage.setItem("name", loginResponse.data.fullname);
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
                }
            } else {
                 navigate("/");
                console.error("Token not found in session storage.");
            }
            

        } catch (e) {
           Cookies.deleteCookie("auth_token");
        } finally {
            setShowLoader(false);
        }
    }

    return (
        <div className={`relative`}>
            <Nav setShowLogin={setShowLogin} setShowSide={setShowSide} />
            <Outlet />
            <Footer />
            <LoginForm show={showLogin} setShowLogin={setShowLogin} setShowLoader={setShowLoader} setShowError={setShowError} />
            <SideNav side={showSide} setShowSide={setShowSide} setShowLogin={setShowLogin} />
            <Loader loader={showLoader} />
            <ErrorDialog error={showError} message={"Invalid username or password!"} setShowError={setShowError}/>
            <SocialMediaGroups/>
        </div>
    );
}