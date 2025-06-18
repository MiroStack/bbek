import { Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "./components/SideNav.tsx";
import { Nav } from "./components/Nav.tsx";
import { Cookies } from "../util/Cookies.ts";
import { useEffect, useState } from "react";
import { CreateMinistryForm } from "./components/ministry/CreateMinistryForm.tsx";
import { showMinistry, hideMinistry, } from '../redux/staff/church_record/MinistrySlice';
import { showLoader, hideLoader, } from '../redux/dialog/LoaderSlice.ts';

import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/staff/hooks/hooks.tsx';
import { Loader } from "../component/dialog/Loader.tsx";
import { SuccessDialog } from "../component/dialog/SuccessDialog.tsx";
export const StaffPage = () => {
    const ministryForm = useAppSelector((state) => state.ministryForm.value);
    const loaderDialog = useAppSelector((state)=> state.loader.value);
    const successDialog = useAppSelector((state)=> state.success_dialog.value);
    const dispatch = useDispatch();
    const token = Cookies.getCookie("auth_token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [])
    return (
        <div className="flex w-100">
            <SideNav />
            <div className="lg:w-[16rem]"></div>
            <div className="w-100 relative">
                <Nav />
                <Outlet />
                <div className={`${ministryForm ? "" : "hidden"}`}>
                    <CreateMinistryForm  />
                </div>
                <Loader loader={loaderDialog}/>
                <SuccessDialog/>
            </div>
        </div>
    );
}