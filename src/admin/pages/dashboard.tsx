function Dashboard() {
    const members = [
        {
            initial: 'M',
            name: 'Maria Santos',
            joined: '2023-06-01',
            status: 'Active',
        },
        {
            initial: 'J',
            name: 'Juan Dela Cruz',
            joined: '2023-05-28',
            status: 'Active',
        },
        {
            initial: 'A',
            name: 'Ana Reyes',
            joined: '2023-05-25',
            status: 'Pending',
        },
        {
            initial: 'P',
            name: 'Pedro Lim',
            joined: '2023-05-20',
            status: 'Active',
        },
    ];

    const events = [
        {
            event_name: 'Sunday Worship',
            date: '2025-05-15',
            time: '7:00 pm',
        },
        {
            event_name: 'Prayer Meeting',
            date: '2025-03-31',
            time: '7:00 pm',
        },
        {
            event_name: 'Youth Fellowship',
            date: '2025-04-15',
            time: '7:00 pm',
        },
        {
            event_name: 'Bible Study',
            date: '2025-01-15',
            time: '7:00 pm',
        },
    ]

    const systems = [
        {
            system_name: 'Website',
            status: 'Operational',
            icon: <i className="fa-solid fa-globe"></i>
        },
        {
            system_name: 'Database',
            status: 'Operational',
            icon: <i className="fa-solid fa-database"></i>
        },
        {
            system_name: 'Live Stream',
            status: 'Configured',
            icon: <i className="fa-solid fa-video"></i>
        },
    ]

    const recent_services = [
        {
            service_name: 'Water Baptism',
            name: 'Carlos Mendoza',
            date: '2025-05-12',
            icon: <i className="fa-solid fa-droplet"></i>
        },
        {
            service_name: 'Child Dedication',
            name: 'Baby Sophia Cruz',
            date: '2023-05-28',
            icon: <i className="fa-solid fa-file-lines"></i>
        },
        {
            service_name: 'Marriage',
            name: 'Roberto & Maria Garcia',
            date: '2025-05-31',
            icon: <i className="fa-regular fa-heart"></i>
        },
    ]

    const prayer_request = [
        {
            name: 'Elena Gomez',
            prayer: "Please pray for my mother's health.",
            date: '2025-05-12'
        },
        {
            name: 'Miguel Torres',
            prayer: "Pray for my upcoming job interview.",
            date: '2025-05-21'
        },
        {
            name: 'Sofia Reyes',
            prayer: "Pray for my family's safe travel.",
            date: '2025-02-12'
        },
    ]

    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Adminstrator Dashboard</h5>
                    <h3 className="text-2xl text-muted">Welcome back, {sessionStorage.getItem("name")}</h3>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-video pe-2"></i>Manage Live Stream</button>
                    <button className="btn btn-outline-success"><i className="pe-2 fa-solid fa-gear"></i>Settings</button>
                </div>
            </div>

            {/* First Roww */}
            <div className="mb-2 d-flex gap-2 flex-wrap">
                <div className="card flex-grow-1">
                    <div className="d-flex mx-3 mt-4 justify-content-between align-item-center">
                        <div>
                            <span className="text-muted">Total Members</span>
                        </div>
                        <div>
                            <span className="rounded-circle text-green-500 bg-green-100 p-2">
                                <i className="fa-solid fa-user-group  " ></i>
                            </span>
                        </div>
                    </div>
                    <div className="card-body">
                        <span className="fw-bold text-2xl">1,248</span>
                        <div>
                            <span className="text-sm text-green-500">+12 from last month</span>
                        </div>
                    </div>
                </div>
                <div className="card flex-grow-1">

                    <div className="d-flex mx-3 mt-4 justify-content-between align-item-center">
                        <div>
                            <span className="text-muted">Weekly Attendances</span>
                        </div>
                        <div>
                            <span className="rounded-circle text-green-500 bg-green-100 p-2">
                                <i className="fa-solid fa-calendar-days" ></i>
                            </span>
                        </div>
                    </div>

                    <div className="card-body">
                        <span className="fw-bold text-2xl">187</span>
                        <div>
                            <span className="text-sm text-green-500">+5% from last week</span>
                        </div>
                    </div>
                </div>
                <div className="card flex-grow-1">
                    <div className="d-flex mx-3 mt-4 justify-content-between align-item-center">
                        <div>
                            <span className="text-muted">Active Services</span>
                        </div>
                        <div>
                            <span className="p-2 rounded-circle text-green-500 bg-green-100 ">
                                <i className="fa-regular fa-circle-check"></i>
                            </span>
                        </div>
                    </div>
                    <div className="card-body">
                        <span className="fw-bold text-2xl">₱24,560</span>
                        <div>
                            <span className="text-green-500 text-sm">+8.2% from last month</span>
                        </div>
                    </div>
                </div>
                <div className="card flex-grow-1">
                    <div className="d-flex mx-3 mt-4 justify-content-between align-item-center">
                        <div>
                            <span className="text-muted">New Members</span>
                        </div>
                        <div>
                            <span className="p-2 rounded-circle text-green-500 bg-green-100 ">
                                <i className="fa-regular fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="card-body">
                        <span className="fw-bold text-2xl">6</span>
                        <div>
                            <span className="text-sm text-green-500" >This year</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tables */}

            <div className="d-flex gap-3">
                <div className="d-flex flex-column gap-3 flex-grow-1">

                    {/* Recent Members */}
                    <div className="card w-100">
                        <div className="card-body p-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex  align-items-center">
                                    <span className="rounded-circle text-green-500 p-2">
                                        <i className="fa-solid fa-sm fa-user-group"></i>
                                    </span>
                                    <span className="text-lg">Recent Members</span>
                                </div>
                                <div>
                                    <button className="btn-outline-success btn btn-sm"><span>View All</span><i className="ps-2 fa-solid fa-sm fa-chevron-right"></i></button>
                                </div>
                            </div>
                            {members.map((member, index) => (
                                <div className="member border-bottom" key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">{member.initial}</span>
                                            <div>
                                                <div className="font-medium">{member.name}</div>
                                                <div className="text-xs text-gray-500">Joined: {member.joined}</div>
                                            </div>
                                        </div>
                                        <button className={`btn-sm m-3 rounded-pill status${member.status.toLowerCase()}`}>{member.status}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-3">
                            <button className="w-100  btn btn-outline-success"><i className="fa-solid  fa-user-group pe-2"></i><span>Manage All Members</span></button>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex  align-items-center">
                                    <span className="rounded-circle text-green-500 p-2">
                                        <i className="fa-solid fa-calendar"></i>
                                    </span>
                                    <span className="text-lg">Upcoming Events</span>
                                </div>
                                <div>
                                    <button className="btn-outline-success btn btn-sm"><span>View All</span><i className="ps-2 fa-solid fa-sm fa-chevron-right"></i></button>
                                </div>
                            </div>
                            {events.map((event, index) => (
                                <div className="event border-bottom p-2" key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <div className="font-medium">{event.event_name}</div>
                                                <div className="text-xs text-gray-500"><i className="fa-regular fa-clock"></i> {event.date} at {event.time} </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-outline-success rounded">Details</button>
                                    </div>
                                </div>
                            ))}
                            <div className="p-3">
                                <button className="w-100  btn btn-outline-success"><i className="fa-regular fa-calendar pe-2"></i><span>Manage All Events</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex  align-items-center">
                                    <span className="rounded-circle text-green-500 p-2">
                                        <i className="fa-solid fa-chart-column"></i>
                                    </span>
                                    <span className="text-lg">System Status</span>
                                </div>
                                <div>
                                    <button className="btn-outline-success btn btn-sm"><span>View All</span><i className="ps-2 fa-solid fa-sm fa-chevron-right"></i></button>
                                </div>
                            </div>
                            {systems.map((system, index) => (
                                <div className="member border-bottom" key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">{system.icon}</span>
                                            <div>
                                                <div className="font-medium">{system.system_name}</div>
                                                <div className="text-xs text-green-500">{system.status}</div>
                                            </div>
                                        </div>
                                        <button className={`btn-sm m-3 rounded-pill status${system.status.toLowerCase()}`}>{system.status}</button>
                                    </div>
                                </div>
                            ))}
                            <div className="p-3">
                                <button className="w-100  btn btn-outline-success"><i className="fa-solid fa-gear pe-2"></i><span>System Settings</span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column gap-3 w-[500px]">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-start">
                                <div className="d-flex  align-items-center">
                                    <span className="rounded-circle text-green-500 p-2">
                                        <i className="fa-solid fa-chart-column"></i>
                                    </span>
                                    <span className="text-lg">Recent Services</span>
                                </div>
                            </div>
                            {recent_services.map((service, index) => (
                                <div className="member p-2 border-bottom" key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">{service.icon}</span>
                                            <div>
                                                <div className="font-medium">{service.service_name}</div>
                                                <div className="text-xs text-gray-500">{service.name} - {service.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="p-3">
                                <button className="w-100  btn btn-outline-success"><i className="fa-solid fa-file-lines pe-2"></i><span>View All Services</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-start">
                                <div className="d-flex  align-items-center">
                                    <span className="rounded-circle text-green-500 p-2">
                                        <i className="fa-solid fa-message"></i>
                                    </span>
                                    <span className="text-lg">Prayer Request</span>
                                </div>
                            </div>
                            {prayer_request.map((request, index) => (
                                <div className="member p-2 border-bottom" key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <div className="font-medium">{request.name}</div>
                                                <div className="text-xs text-gray-500">{request.prayer}</div>
                                                <div className="text-xs text-gray-500">{request.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="p-3">
                                <button className="w-100  btn btn-outline-success"><i className="fa-solid fa-message pe-2"></i><span>View All Requests</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-start">
                                <div className="d-flex  align-items-center">
                                    <span className="text-lg">Quick Actions</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column mt-2 gap-2">
                                <button className="btn btn-sm btn-outline-success text-green-500 text-start">
                                    <i className="fa-solid fa-user fa-sm pe-2"></i>
                                    <span>Add New Member</span>
                                </button>
                                <button className="btn btn-sm btn-outline-success text-green-500 text-start">
                                    <i className="fa-solid fa-calendar fa-sm pe-2"></i>
                                    <span>Create Event</span>
                                </button>
                                <button className="btn btn-sm btn-outline-success text-green-500 text-start">
                                    <i className="fa-solid fa-video fa-sm pe-2"></i>
                                    <span>Setup Livestream</span>
                                </button>
                                <button className="btn btn-sm btn-outline-success text-green-500 text-start">
                                    <i className="fa-solid fa-bell fa-sm pe-2"></i>
                                    <span>Create Announcement</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-start">
                                <div className="d-flex  align-items-center">
                                    <span className="rounded-circle text-green-500 p-2">
                                        <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <span className="text-lg">Activity Summary</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column mt-2 gap-2">
                                <div className="d-flex justify-content-between">
                                    <span  className="text-muted">New members this week</span>
                                    <span>5</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span  className="text-muted">Services conducted this month</span>
                                    <span>12</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span  className="text-muted">Prayer requests this week</span>
                                    <span>8</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="text-muted">Events scheduled this month</span>
                                    <span>5</span>
                                </div>
                            </div>
                            <div className="p-3">
                                <button className="btn w-100  btn-outline-success">
                                    <i className="fa-solid pe-2 fa-square-arrow-up-right"></i>
                                    <span>View Audit Trail</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;