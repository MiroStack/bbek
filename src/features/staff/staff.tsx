import { Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "./components/SideNav.tsx";
import { Nav } from "./components/Nav.tsx";
import { Cookies } from "../../util/Cookies.ts";
import { useEffect, useState } from "react";
import {  useDispatch } from 'react-redux';
export const StaffPage = () => {

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