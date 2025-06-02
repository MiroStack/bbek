import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Name',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
    },
    {
        name: 'Ministry',
        selector: (row: { ministry: any; }) => row.ministry,
        sortable: true,
    },
    {
        name: 'Join Date',
        selector: (row: { joinDate: any; }) => row.joinDate,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: { status: any; }) => row.status,
        sortable: true,
    },
    {
        name: 'Contact',
        selector: (row: { contact: any; }) => row.contact,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Record</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-message p-2"></i>Send Message</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Record</a></li>
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
        name: "John Smith",
        ministry: "Soulwinning/Evangelism",
        joinDate: "2023-05-01",
        status: "Active",
        contact: "john.smith@example.com"
    },
    {
        name: "Mary Johnson",
        ministry: "Feeding Program",
        joinDate: "2023-05-03",
        status: "Active",
        contact: "mary.johnson@example.com"
    },
    {
        name: "Robert Davis",
        ministry: "Bible Studies",
        joinDate: "2023-05-05",
        status: "Pending",
        contact: "robert.davis@example.com"
    },
    {
        name: "Sarah Wilson",
        ministry: "Outreach Program",
        joinDate: "2023-05-07",
        status: "Active",
        contact: "sarah.wilson@example.com"
    },
    {
        name: "Michael Brown",
        ministry: "Prayer and Fasting",
        joinDate: "2023-05-10",
        status: "Inactive",
        contact: "michael.brown@example.com"
    },
    {
        name: "Jennifer Lee",
        ministry: "Street Preaching",
        joinDate: "2023-05-12",
        status: "Active",
        contact: "jennifer.lee@example.com"
    }
];

function Ministry_Record() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">Ministry Record</h5>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Members</span>
                                <span className='text-bold text-2xl'>10</span>
                            </div>
                            <div>
                                <span className='rounded-full text-blue-500 bg-blue-200 p-2'><i className="fa-solid fa-lg fa-user-group "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Active Members</span>
                                <span className='text-bold text-2xl'>6</span>
                            </div>
                            <div>
                                <span className='rounded-full text-green-500  bg-green-200 p-2'><i className="fa-solid fa-lg fa-user-group "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Pending Approvals</span>
                                <span className='text-bold text-2xl'>3</span>
                            </div>
                            <div>
                                <span className='rounded-full text-yellow-600 bg-yellow-200 p-2'><i className="fa-solid fa-lg fa-user-group"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search records..." aria-label="Search records..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

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

export default Ministry_Record;