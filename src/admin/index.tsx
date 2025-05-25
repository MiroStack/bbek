import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar.tsx'
import Dashboard from './pages/dashboard.tsx';
import '../index.css';

export const Index = ()=> {
    return (
   
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                    <Dashboard />
                </div>
            </div>
      
    )
}

export default Index;