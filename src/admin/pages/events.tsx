import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Event Name',
        selector: (row: { eventName: any; }) => row.eventName,
        sortable: true,
    },
    {
        name: 'Date',
        selector: (row: { date: any; }) => row.date,
        sortable: true,
    },
    {
        name: 'Time',
        selector: (row: { time: any; }) => row.time,
        sortable: true,
    },
    {
        name: 'Location',
        selector: (row: { location: any; }) => row.location,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: { status: any; }) => row.status,
        sortable: true,
    },
    {
        name: 'Type',
        selector: (row: { type: any; }) => row.type,
        sortable: true,
    },
    {
        name: 'Actions',
        cell: (row: any) => (
            <div className="dropdown">
                <a className="cursor-pointer" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-ellipsis"></i>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="text-sm dropdown-item" href="#">View Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Edit Event</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Manage Attendees</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#">Cancel Event</a></li>
                </ul>
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];


const data = [
    {
        eventName: "World Mission Conference",
        date: "2025-05-14",
        time: "8:00 AM - 5:00 PM",
        location: "Bible Baptist Ekklesia of Kawit",
        status: "Upcoming",
        type: "Conference"
    },
    {
        eventName: "Church Anniversary",
        date: "2025-05-16",
        time: "9:30 AM - 12:00 PM",
        location: "Bible Baptist Ekklesia of Kawit",
        status: "Upcoming",
        type: "Celebration"
    },
    {
        eventName: "Water Baptism",
        date: "2025-06-05",
        time: "2:00 PM - 4:00 PM",
        location: "Local Beach Area",
        status: "Upcoming",
        type: "Sacrament"
    },
    {
        eventName: "Daily Vacation Bible School",
        date: "2025-07-15",
        time: "8:00 AM - 12:00 PM",
        location: "Bible Baptist Ekklesia of Kawit",
        status: "Planning",
        type: "Education"
    },
    {
        eventName: "Prayer and Fasting",
        date: "2025-04-01",
        time: "All Day",
        location: "Bible Baptist Ekklesia of Kawit",
        status: "Completed",
        type: "Spiritual"
    }
];

function Events() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Church Events</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Add New Event</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Total Events</span>
                                <span className='text-bold text-2xl'>5</span>
                            </div>
                            <div>
                                <span className='rounded-full text-blue-500 bg-blue-200 p-2'><i className="fa-solid fa-lg fa-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Upcoming</span>
                                <span className='text-bold text-2xl'>3</span>
                            </div>
                            <div>
                                <span className='rounded-full  text-green-500 bg-green-200 p-2'><i className="fa-solid fa-lg fa-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Planning</span>
                                <span className='text-bold text-2xl'>1</span>
                            </div>
                            <div>
                                <span className='rounded-full  text-purple-500 bg-purple-200 p-2'><i className="fa-solid fa-lg fa-calendar "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Completed</span>
                                <span className='text-bold text-2xl'>1</span>
                            </div>
                            <div>
                                <span className='rounded-full  text-gray    -500 bg-gray-200 p-2'><i className="fa-solid fa-lg fa-calendar "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search Events..." aria-label="Search Events..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills p-2 d-flex flex-row flex-nowrap mt-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        All Events
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Upcoming
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Planning
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Completed
                    </button>
                </li>
            </ul>

            <div className='mt-2 card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        striped
                        className="table table-bordered "
                    />
                </div>
            </div>

        </>
    )
}

export default Events;