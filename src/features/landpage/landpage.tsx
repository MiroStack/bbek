import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { LoginForm } from "./components/LoginForm";
import { useEffect, useState } from "react";
import { SideNav } from "./components/SideNav";
import { Loader } from "./components/Loader";
import AuthRepo from "../../datasource/repositories/AuthRepo";
import { useNavigate } from "react-router-dom";
import { Cookies } from "../../util/Cookies";
import { SocialMediaGroups } from "./components/SocialMediaGroud";
import { Navigation } from "./components/Navigation";
import { WatchLive } from "./components/WacthLive";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../datasource/redux/staff/hooks/hooks";
import { hideLoader, showErrorDialog, showLoader } from "../../datasource/redux/dialog/DialogSlice";
import { ErrorDialog2 } from "../../component/dialog/ErrorDialog2";
import { SuccessDialog } from "../../component/dialog/SuccessDialog";
import { LoaderPage } from "./components/redirect_page/loader_page";


export const LandPage = () => {
    const loaderDialog = useAppSelector((state) => state.dialog.loader);
    const errorDialog = useAppSelector((state) => state.dialog.error);
    const successDialog = useAppSelector((state) => state.dialog.success);
    const [showLogin, setShowLogin] = useState(false);
    const [showSide, setShowSide] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isNavigateLandpage: boolean = sessionStorage.getItem("navigateLandpage") === "true";
    const token = Cookies.getCookie("auth_token");
    useEffect(() => {
        if (token && !isNavigateLandpage) {
            console.log("hello");
            handleToken();
        }
    }, [])
    async function handleToken() {
        try {
            dispatch(showLoader());
            if (token) {
                const loginResponse = await AuthRepo.validate(token);
                 dispatch(hideLoader())
                if (loginResponse.statusCode == 200) {
                      navigate("/redirect")
                }
            } else {
                console.error("Token not found in session storage.");
                setTimeout(() => {
                    dispatch(hideLoader())
                    dispatch(showErrorDialog())
                    navigate("/");
                }, 1500)
            }


        } catch (e) {
            Cookies.deleteCookie("auth_token");
            dispatch(hideLoader())
        } finally {
            dispatch(hideLoader())
        }
    }

    return (
        <div className={`relative`}>
            {/* <Nav setShowLogin={setShowLogin} setShowSide={setShowSide} /> */}
            <Navigation setShowLogin={setShowLogin} setShowSide={setShowSide} />
            <Outlet />
            <Footer />
            <LoginForm show={showLogin} setShowLogin={setShowLogin} />
            <SideNav side={showSide} setShowSide={setShowSide} setShowLogin={setShowLogin} />
            <div className=''>
                <Loader loader={loaderDialog} />
            </div>
            <div className={`${errorDialog ? "" : "hidden"}`}>
                <ErrorDialog2 />
            </div>
            <div className={`${successDialog ? "" : "hidden"}`}>
                <SuccessDialog />
            </div>
            <SocialMediaGroups />
            <WatchLive />
        </div>
    );
}