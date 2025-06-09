import { Outlet } from "react-router-dom";
import { SideNav } from "./components/SideNav.tsx";
export const StaffPage = () => {
    return (
        <>
            <SideNav />
            <Outlet/> 
        </>
    );
}