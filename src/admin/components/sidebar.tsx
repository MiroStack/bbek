import { useState } from 'react';
import bbekLogo from '../img/logobbek.jpg';
import '../css/style.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [showChurchSubmenu, setShowChurchSubmenu] = useState(false);
    const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);
    const [showMaintenanceSubmenu, setShowMaintenanceSubmenu] = useState(false);

    return (
        <div style={{ width: 350 }} className="vh-100 d-flex flex-column gap-2 p-3 border shadow-lg">
            <Link to="/" className='navbar-brand text-center d-flex gap-2 align-items-center p-2'><img src={bbekLogo} style={{ width: 50 }} className="logo img-fluid" alt="Vite logo" />BBEK CHURCH</Link>
            <span className='border-bottom'></span>
            <span className='text-muted fw-bold'>MAIN</span>

            <div className="d-flex gap-2">
                <Link to="/" className="w-100">
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
                    <Link to="/" className="w-100">
                        <div className='w-100 p-2 d-flex align-items-center me-2'>
                            <i className="col-3 text-center fa-solid fa-lg fa-database"></i>
                            <span className='col-6 text-start text-nowrap'>CHURCH RECORDS
                            </span>
                            <i className={`fa-solid fa-chevron-${showChurchSubmenu ? 'up' : 'down'} ms-auto`}></i>
                        </div>
                    </Link>
                </div>

                {showChurchSubmenu && (
                    <div className="ps-5 d-flex flex-column gap-1">
                        <Link to="/" className="w-100">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-group"></i>
                                <span>MEMBER RECORD</span>
                            </div>
                        </Link>
                        <Link to="/" className="w-100">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-large"></i>
                                <span>CHURCH LEADERS</span>
                            </div>
                        </Link>
                        <Link to="/" className="w-100">
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
                    <Link to="/" className="w-100">
                        <div className='w-100 p-2 d-flex align-items-center me-2'>
                            <i className="col-3 text-center fa-solid fa-lg fa-gift"></i>
                            <span>SERVICES
                            </span>
                            <i className={`fa-solid fa-chevron-${showServicesSubmenu ? 'up' : 'down'} ms-auto`}></i>
                        </div>
                    </Link>
                </div>

                {showServicesSubmenu && (
                    <div className="ps-5 d-flex flex-column gap-1">
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-calendar"></i>
                                <span>EVENTS</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-gift"></i>
                                <span>TITHES & OFFERING</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-suitcase"></i>
                                <span>INVENTORY RECORD</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-group"></i>
                                <span>MINISTRIES</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>MINISTRY RECORD</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-droplet"></i>
                                <span>WATER BAPTISM</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>CHILD DEDICATION</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-heart"></i>
                                <span>MARRIAGE</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
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
                    <Link to="/" className="w-100">
                        <div className='w-100 p-2 d-flex align-items-center me-2'>
                            <i className="col-3 text-center fa-solid fa-lg fa-gear"></i>
                            <span>MAINTENANCE
                            </span>
                            <i className={`fa-solid fa-chevron-${showMaintenanceSubmenu ? 'up' : 'down'} ms-auto`}></i>
                        </div>
                    </Link>
                </div>

                {showMaintenanceSubmenu && (
                    <div className="ps-5 d-flex flex-column gap-1">
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-message"></i>
                                <span>MESSAGES</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-file-lines"></i>
                                <span>AUDIT TRAIL</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-box-archive"></i>
                                <span>ARCHIVES</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-user-gear"></i>
                                <span>USER ACCOUNTS</span>
                            </div>
                        </Link>
                        <Link className="dropdown-item w-100 text-muted" to="/">
                            <div className='w-100 p-2 d-flex align-items-center me-2'>
                                <i className="col-3 text-center fa-solid fa-gear"></i>
                                <span>SETTINGS</span>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className="mt-auto p-3">
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
