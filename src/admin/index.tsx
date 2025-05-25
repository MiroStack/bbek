import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar.tsx'
import Dashboard from './pages/dashboard.tsx';
import '../index.css';

function Index() {
    return (
        <Router>
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Index;