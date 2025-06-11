import { Outlet } from "react-router-dom";
import { SideNav } from "./components/SideNav.tsx";
import { Nav } from "./components/Nav.tsx";
export const StaffPage = () => {
    return (
        <>
            <SideNav />
            <Nav/>
            <Outlet/> 
        </>
    );
}