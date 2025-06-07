import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Sender',
        selector: (row: { sender: any; }) => row.sender,
        sortable: true,
    },
    {
        name: 'Subject',
        selector: (row: { subject: any; }) => row.subject,
        sortable: true,
    },
    {
        name: 'Type',
        selector: (row: { type: any; }) => row.type,
        sortable: true,
    },
    {
        name: 'Date',
        selector: (row: { date: any }) => row.date ?? '-',
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: { status: any; }) => row.status,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Messages Content</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Reply to Sender</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-message p-2"></i>Mark as Read</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Message</a></li>
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
        sender: "John Doe",
        subject: "Prayer Request",
        type: "Prayer Request",
        date: "2025-04-10",
        status: "Unread",
    },
    {
        sender: "Jane Smith",
        subject: "Volunteer Inquiry",
        type: "Inquiry",
        date: "2025-04-09",
        status: "Read",
    },
    {
        sender: "Michael Johnson",
        subject: "Donation Question",
        type: "Inquiry",
        date: "2025-04-08",
        status: "Replied",
    },
    {
        sender: "Emily Davis",
        subject: "Membership Information",
        type: "Inquiry",
        date: "2025-04-07",
        status: "Read",
    },
];

function Message() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Messages</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Compose Message</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Messages</span>
                                <span className='text-bold text-2xl'>9</span>
                            </div>
                            <div>
                                <span className='rounded-full text-blue-500 bg-blue-200 p-2'><i className="fa-regular fa-lg fa-message "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Unread Messages</span>
                                <span className='text-bold text-2xl'>3</span>
                            </div>
                            <div>
                                <span className='rounded-full text-red-500  bg-red-200 p-2'><i className="fa-regular fa-lg fa-message "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Prayer Requests</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                            <div>
                                <span className='rounded-full text-purple-600 bg-purple-200 p-2'><i className="fa-regular fa-lg fa-message"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search messages..." aria-label="Search messages..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills mt-2 p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        All Messages
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Unread
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Read
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Replied
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Prayer Requests
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Inquiries
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
                        className="table table-bordered"
                    />
                </div>
            </div>
        </>
    )
}

export default Message;