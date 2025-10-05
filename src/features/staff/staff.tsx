import { Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "./components/SideNav.tsx";
import { Nav } from "./components/Nav.tsx";
import { Cookies } from "../../util/Cookies.ts";
import { useEffect, useState } from "react";
import {  useDispatch } from 'react-redux';
import type { UserInfoModel } from "../../datasource/models/User/UserInfoModel.ts";
export const StaffPage = () => {
  const navigate = useNavigate();
    const userInfo = sessionStorage.getItem("userInfo")
        const [userInfoState, setUserInfoState] = useState<UserInfoModel>(JSON.parse(userInfo ?? "") ?? {} as UserInfoModel);
    useEffect(() => {
        if (userInfoState) {
            switch (userInfoState.role) {
                case "STAFF":
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