import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar.tsx'

export const Index = () => {
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