import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Type',
        selector: (row: { type: string }) => row.type, // Needed for sorting
        cell: (row: { type: string }) => (
            <div className="flex items-center gap-2">
                {row.type}
            </div>
        ),
        sortable: true,
    },
    {
        name: 'File Name',
        selector: (row: { fileName: string }) => row.fileName,
        sortable: true,
    },
    {
        name: 'Description',
        selector: (row: { description: string }) => row.description, // For sorting
        cell: (row: { description: string }) => (
            <div className="flex items-center gap-2">
                {row.description}
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Date Archived',
        selector: (row: { dateArchived: string }) => row.dateArchived,
        sortable: true,
    },
    {
        name: 'Sized',
        selector: (row: { size: string }) => row.size, // For sorting
        cell: (row: { size: string }) => (
            <div className="flex items-center gap-2">
                {row.size}
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: { status: string }) => row.status,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View File</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-download p-2"></i>Retrieve File</a></li>
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
        type: "Member Records",
        fileName: "members_2023.csv",
        description: "Archived member records from 2023",
        dateArchived: "2024-01-15",
        size: "2.5 MB",
        status: "Available",
    },
    {
        type: "Event Records",
        fileName: "events_2023.csv",
        description: "Archived event records from 2023",
        dateArchived: "2024-01-15",
        size: "1.8 MB",
        status: "Available",
    },
    {
        type: "Donation Records",
        fileName: "donations_2023.csv",
        description: "Archived donation records from 2023",
        dateArchived: "2024-01-15",
        size: "3.2 MB",
        status: "Available",
    },
    {
        type: "Marriage Records",
        fileName: "marriages_2023.csv",
        description: "Archived marriage records from 2023",
        dateArchived: "2024-01-15",
        size: "856 KB",
        status: "Available",
    },
    {
        type: "Ministry Records",
        fileName: "ministries_2023.csv",
        description: "Archived ministry records from 2023",
        dateArchived: "2024-01-15",
        size: "945 KB",
        status: "Available",
    },
];


function Archives() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Archives</h5>
                    <span className="text-muted">Manage archived church records and documents</span>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-download pe-2"></i>Export CSV</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Archives</span>
                                <span className='text-bold text-2xl'>5</span>
                            </div>
                            <div>
                                <span className='rounded-full text-blue-500 bg-blue-200 p-2'><i className="fa-solid fa-lg fa-archive"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Available Files</span>
                                <span className='text-bold text-2xl'>3</span>
                            </div>
                            <div>
                                <span className='rounded-full text-green-500  bg-green-200 p-2'><i className="fa-solid fa-lg fa-file-lines "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Total Size</span>
                                <span className='text-bold text-2xl'>8.3 MB</span>
                            </div>
                            <div>
                                <span className='rounded-full text-yellow-600 bg-yellow-200 p-2'><i className="fa-solid fa-lg fa-database"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search archives..." aria-label="Search archives..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills mt-2 p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        <span>All Categories</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <span>Members</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span>Events</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span>Donations</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span>Services</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span>Ministries</span>
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

export default Archives;