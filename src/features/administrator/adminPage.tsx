import { Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "./components/SideNav.tsx";
import { Nav } from "./components/Nav.tsx";
import { useEffect, useState } from "react";
import { Cookies } from "../../util/Cookies.ts";
import type { UserInfoModel } from "../../datasource/models/User/UserInfoModel.ts";
export const AdminPage = () => {
    const navigate = useNavigate();
    const userInfo = sessionStorage.getItem("userInfo")
        const [userInfoState, setUserInfoState] = useState<UserInfoModel>(JSON.parse(userInfo ?? "") ?? {} as UserInfoModel);
    useEffect(() => {
        if (userInfoState) {
            switch (userInfoState.role) {
                case "ADMIN":
                   // navigate("/admin");
                    break;
                default:
                    navigate("/");
                    console.error("Unknown role:", userInfoState.role);
                    break;
            }
        }
    }, [])
    return (
        <div className="flex w-100">
            <SideNav />
            <div className="lg:w-[16rem]"></div>
            <div className="w-100 relative">
                <Nav />
                <Outlet />
            </div>
        </div>
    );
}