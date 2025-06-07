import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bbekLogo from '../img/logobbek.jpg';
import '../css/style.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [showChurchSubmenu, setShowChurchSubmenu] = useState(false);
    const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);
    const [showMaintenanceSubmenu, setShowMaintenanceSubmenu] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    return (
        <div style={{ width: 350 }} className="p-3 border d-flex flex-column gap-2 vh-100 ">
            <Link to="/admin" className='navbar-brand text-center d-flex gap-2 align-items-center p-2'><img src={bbekLogo} style={{ width: 50 }} className="logo img-fluid" alt="Vite logo" />BBEK CHURCH</Link>
            <span className='border-bottom'></span>
            <span className='text-muted fw-bold'>MAIN</span>

            <div className="d-flex gap-2">
                <Link to="/admin" className={`w-100 text-muted ${pathname === '/admin' ? 'active' : ''}`}>
                    <div className='w-100 p-2 d-flex align-items-center'>
                        <i className="col-3 text-center fa-solid fa-lg fa-house"></i>
                        <span className='col-6 text-start'>DASHBOARD</span>
                    </div>
                </Link>
            </div>

            {/* Church Record Submenu */}
            <div className="d-flex flex-column gap-2">
                <div
                    className="d-flex gap-2"
                    onClick={() => setShowChurchSubmenu(!showChurchSubmenu)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='w-100 text-muted p-2 d-flex align-items-center me-2'>
                        <i className="col-3 text-center fa-solid fa-lg fa-database"></i>
                        <span className='col-6 text-start text-nowrap'>CHURCH RECORDS
                        </span>
                        <i className={`fa-solid fa-chevron-${showChurchSubmenu ? 'up' : 'down'} ms-auto`}></i>
                    </div>
                </div>

                {showChurchSubmenu && (
                    <div className="ps-5 d-flex flex-column gap-1">
                        <Link to="/admin/member-record" className={`w-100 text-muted  ${pathname === '/admin/member-record' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2' >
                                <i className="col-3 text-center fa-solid fa-user-group"></i>
                                <span>MEMBER RECORD</span>
                            </div>
                        </Link>
                        <Link to="/admin/church-leaders" className={`w-100 text-muted  ${pathname === '/admin/church-leaders' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-large"></i>
                                <span>CHURCH LEADERS</span>
                            </div>
                        </Link>
                        <Link to="/admin/department-officers" className={`w-100 text-muted  ${pathname === '/admin/department-officers' ? 'active' : ''}`} >
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-group"></i>
                                <span>DEPARTMENT OFFICERS</span>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            {/* Services Submenu */}
            <div className="d-flex flex-column gap-2">
                <div
                    className="d-flex gap-2"
                    onClick={() => setShowServicesSubmenu(!showServicesSubmenu)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='w-100  text-muted p-2 d-flex align-items-center me-2'>
                        <i className="col-3 text-center fa-solid fa-lg fa-gift"></i>
                        <span>SERVICES
                        </span>
                        <i className={`fa-solid fa-chevron-${showServicesSubmenu ? 'up' : 'down'} ms-auto`}></i>
                    </div>
                </div>

                {showServicesSubmenu && (
                    <div className="ps-5 d-flex flex-column gap-1">
                        <Link to="/admin/events" className={`w-100 text-muted  ${pathname === '/admin/events' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-calendar"></i>
                                <span>EVENTS</span>
                            </div>
                        </Link>
                        <Link to="/admin/tithes-and-offering" className={`w-100 text-muted  ${pathname === '/admin/tithes-and-offering' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-gift"></i>
                                <span>TITHES & OFFERING</span>
                            </div>
                        </Link>
                        <Link to="/admin/inventory-records" className={`w-100 text-muted  ${pathname === '/admin/inventory-records' ? 'active' : ''}`}>
                            <div className='w-100 p-2  d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-suitcase"></i>
                                <span>INVENTORY RECORD</span>
                            </div>
                        </Link>
                        <Link to="/admin/ministries" className={`w-100 text-muted  ${pathname === '/admin/ministries' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-group"></i>
                                <span>MINISTRIES</span>
                            </div>
                        </Link>
                        <Link to="/admin/ministry-record" className={`w-100 text-muted  ${pathname === '/admin/ministry-record' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>MINISTRY RECORD</span>
                            </div>
                        </Link>
                        <Link to="/admin/baptism-record" className={`w-100 text-muted  ${pathname === '/admin/baptism-record' ? 'active' : ''}`}>
                            <div className='w-100  p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-droplet"></i>
                                <span>WATER BAPTISM</span>
                            </div>
                        </Link>
                        <Link to="/admin/child-dedication" className={`w-100 text-muted  ${pathname === '/admin/child-dedication' ? 'active' : ''}`}>
                            <div className='w-100  p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>CHILD DEDICATION</span>
                            </div>
                        </Link>
                        <Link to="/admin/marriage" className={`w-100 text-muted  ${pathname === '/admin/marriage' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-heart"></i>
                                <span>MARRIAGE</span>
                            </div>
                        </Link>
                        <Link to="/admin/marriage-record" className={`w-100 text-muted  ${pathname === '/admin/marriage-record' ? 'active' : ''}`}>
                            <div className='w-100  p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>MARRIAGE RECORD</span>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            {/* Maintenance Submenu */}
            <div className="d-flex flex-column gap-2">
                <div
                    className="d-flex gap-2"
                    onClick={() => setShowMaintenanceSubmenu(!showMaintenanceSubmenu)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='w-100 text-muted p-2 d-flex align-items-center me-2'>
                        <i className="col-3  text-center fa-solid fa-lg fa-gear"></i>
                        <span>MAINTENANCE
                        </span>
                        <i className={`fa-solid fa-chevron-${showMaintenanceSubmenu ? 'up' : 'down'} ms-auto`}></i>
                    </div>
                </div>

                {showMaintenanceSubmenu && (
                    <div className="ps-5 d-flex flex-column gap-1">
                        <Link to="/admin/message" className={`w-100 text-muted  ${pathname === '/admin/message' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-message"></i>
                                <span>MESSAGES</span>
                            </div>
                        </Link>
                        <Link to="/admin/audit-trail" className={`w-100 text-muted  ${pathname === '/admin/audit-trail' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>AUDIT TRAIL</span>
                            </div>
                        </Link>
                        <Link to="/admin/archives" className={`w-100 text-muted  ${pathname === '/admin/archives' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-box-archive"></i>
                                <span>ARCHIVES</span>
                            </div>
                        </Link>
                        <Link to="/admin/user-account" className={`w-100 text-muted  ${pathname === '/admin/user-account' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-gear"></i>
                                <span>USER ACCOUNTS</span>
                            </div>
                        </Link>
                        <Link to="/admin/settings" className={`w-100 text-muted  ${pathname === '/admin/settings' ? 'active' : ''}`}>
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-gear"></i>
                                <span>SETTINGS</span>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className="mt-auto p-3" style={{ position: "sticky", bottom: 0 }}>
                <hr></hr>
                <Link className="w-100 text-danger logoutMenu text-decoration-none" to="/logout">
                    <div className='w-100 p-2 d-flex align-items-center'>
                        <i className="col-3 text-center fa-solid fa-right-from-bracket"></i>
                        <span className='col-6 text-start'>LOGOUT</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}
