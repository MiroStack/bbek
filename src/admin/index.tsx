import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Sidebar from './components/sidebar.tsx'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from '../util/Cookies.ts';

export const Index = () => {
    const token = Cookies.getCookie("auth_token");
    const navigate = useNavigate();
     useEffect(() => {
            if (!token) {
                navigate("/");
            }
    }, [])
    return (
        <div className="d-flex h-full w-100">
            <Sidebar />
            <div className='w-100 p-3'>
                {/* Nested routes will render here */}
                <Outlet></Outlet>
            </div>
        </div>

    )
}


export default Index;