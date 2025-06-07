
import bbekLogo from '../img/logobbek.jpg';

function Settings() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">Settings</h5>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills mt-2 p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        <span>Church Information</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings" type="button" role="tab" aria-controls="pills-settings" aria-selected="false">
                        <span>System Settings</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-announcements-tab" data-bs-toggle="pill" data-bs-target="#pills-announcements" type="button" role="tab" aria-controls="pills-announcements" aria-selected="false">
                        <span>Announcements</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-livestream-tab" data-bs-toggle="pill" data-bs-target="#pills-livestream" type="button" role="tab" aria-controls="pills-livestream" aria-selected="false">
                        <span>Livestream</span>
                    </button>
                </li>
            </ul>

            <div className="tab-content mt-3" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="d-flex w-100 gap-3">

                        <div style={{ width: "35rem" }} className="flex-shrink-1 card">
                            <div className="card-body">
                                <span className="card-title d-flex gap-2 align-items-center"><i className="fa-solid fa-sm fa-gear"></i><span className="text-2xl ">Church Logo</span></span>
                                <div className="d-flex gap-2 flex-column align-items-center justify-content-center">
                                    <img src={bbekLogo} style={{ width: 100, height: 100 }} className="logo img-fluid" alt="Vite logo" />
                                    <button className='w-100 fw-bold btn-sm text-sm btn btn-success'><i className="fa-sm fa-solid fa-download p-2"></i>Upload New Logo</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow-1 card">
                            <div className="card-body">
                                <div className='d-flex flex-column gap-2'>
                                    <span className="card-title d-flex gap-2 align-items-center"><i className="fa-solid fa-sm fa-gear"></i><span className="text-2xl ">Church Information</span></span>
                                    <div className='d-flex w-100 gap-2'>
                                        <div className='w-100'>
                                            <span>Church Name</span>
                                            <input className='form-control'></input>
                                        </div>
                                        <div className='w-100'>
                                            <span>Short Name/Acronym</span>
                                            <input className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <span>Address</span>
                                        <input className='form-control'></input>
                                    </div>
                                    <div className='d-flex w-100 gap-2'>
                                        <div className='w-100'>
                                            <span>Email</span>
                                            <input className='form-control'></input>
                                        </div>
                                        <div className='w-100'>
                                            <span>Phone</span>
                                            <span className='d-flex align-items-center gap-2'>
                                                <i className="fa-solid fa-phone"></i>
                                                <input className='form-control'></input>
                                            </span>
                                        </div>
                                        <div className='w-100'>
                                            <span>Website</span>
                                            <span className='d-flex align-items-center gap-2'>
                                                <i className="fa-solid fa-globe"></i>
                                                <input className='form-control'></input>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <span>Mission</span>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                    <div className='w-100'>
                                        <span>Vision</span>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="tab-pane fade" id="pills-settings" role="tabpanel" aria-labelledby="pills-settings-tab">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex flex-column gap-2'>
                                <span className="card-title d-flex gap-2 align-items-center"><i className="fa-solid fa-sm fa-gear"></i><span className="text-2xl ">System Settings</span></span>
                                <div className='d-flex gap-2'>
                                    <div className='w-100'>
                                        <span>Timezone </span>
                                        <span className='d-flex align-items-center gap-2'>
                                            <i className="fa-solid fa-clock"></i>
                                            <input className='form-control'></input>
                                        </span>
                                    </div>
                                    <div className='w-100'>
                                        <span>Language </span>
                                        <input className='form-control'></input>
                                    </div>
                                </div>

                                <div className='d-flex gap-2'>
                                    <div className='w-100'>
                                        <span>Date Format </span>
                                        <span className='d-flex align-items-center gap-2'>
                                            <input type='date' className='form-control'></input>
                                        </span>
                                    </div>
                                    <div className='w-100'>
                                        <span>Time Format </span>
                                        <input className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <span>Currency</span>
                                        <input className='form-control'></input>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-100 fw-bold btn-sm text-sm btn btn-success'><i className="fa-sm fa-solid fa-save p-2"></i>Save System Settings</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-announcements" role="tabpanel" aria-labelledby="pills-announcements-tab">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex flex-column gap-2'>
                                <span className="card-title d-flex gap-2 align-items-center"><i className="fa-solid fa-sm fa-bell"></i><span className="text-2xl ">Create Announcement</span></span>
                                <div className='w-100'>
                                    <span>Announcement Title</span>
                                    <input className='form-control' placeholder='Enter announcment title'></input>
                                </div>
                                <div className='w-100'>
                                    <span>Announcement Content</span>
                                    <textarea className='form-control' placeholder='Enter announcment details'></textarea >
                                </div>
                                <div className='d-flex w-100 gap-2'>
                                    <div className='w-100'>
                                        <span>Start Date</span>
                                        <input type='date' className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <span>End Date</span>
                                        <input type='date' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <span>Target Audience</span>
                                    <select className='form-select'>
                                        <option value="All Members">All Members</option>
                                        <option value="Church Leaders">Church Leaders</option>
                                        <option value="Department Officers">Department Officers</option>
                                        <option value="Youth">Youth</option>
                                        <option value="Adults">Adults</option>
                                    </select>
                                </div>
                                <div className='w-100'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                                        <label className="form-check-label" htmlFor="checkDefault">
                                            Publish immediately
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-100 fw-bold btn-sm text-sm btn btn-success'><i className="fa-sm fa-solid fa-save p-2"></i>Create Announcement</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-livestream" role="tabpanel" aria-labelledby="pills-livestream-tab">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex flex-column gap-2'>
                                <span className="card-title d-flex gap-2 align-items-center"><i className="fa-solid fa-sm fa-video"></i><span className="text-2xl ">Livestream Settings</span></span>
                                <div className='w-100'>
                                    <span>Stream Title</span>
                                    <input className='form-control'></input>
                                </div>
                                <div className='w-100'>
                                    <span>Stream Description</span>
                                    <textarea className='form-control'></textarea>
                                </div>

                                <div className='d-flex gap-2'>
                                    <div className='w-100'>
                                        <span>Stream Platform</span>
                                        <select className='form-select'>
                                            <option value="Youtube">Youtube</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="Custom RTMP">Custom RTMP</option>
                                        </select>
                                    </div>
                                    <div className='w-100'>
                                        <span>Stream Key</span>
                                        <input className='form-control'></input>
                                    </div>
                                </div>

                                <div className='w-100'>
                                    <span>Stream URL</span>
                                    <input className='form-control'></input>
                                </div>

                                <div className='d-flex gap-2'>
                                    <div className='w-100'>
                                        <span>Scheduled Date</span>
                                        <input type="date" className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <span>Scheduled Time</span>
                                        <input type="time" className='form-control'></input>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkDefault2"></input>
                                        <label className="form-check-label" htmlFor="checkDefault2">
                                            Make stream public
                                        </label>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkDefault3"></input>
                                        <label className="form-check-label" htmlFor="checkDefault3">
                                            Send notification to members
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-100 fw-bold btn-sm text-sm btn btn-success'><i className="fa-sm fa-solid fa-save p-2"></i>Save Livestream</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;