import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer";
import { LoginForm } from "./components/LoginForm";
import { useEffect, useState } from "react";
import { SideNav } from "./components/SideNav";

export const LandPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSide, setShowSide] = useState(false);

    return (
        <div className={`relative`}>
            <Nav setShowLogin={setShowLogin} setShowSide={setShowSide}/>
                <Outlet />
                <Footer />
            <LoginForm show={showLogin} setShowLogin={setShowLogin} />
            <SideNav side={showSide} setShowSide={setShowSide} setShowLogin={setShowLogin}/>
        </div>
    );
}