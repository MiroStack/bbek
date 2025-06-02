import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Groom',
        selector: (row: { groom: any; }) => row.groom,
        sortable: true,
    },
    {
        name: 'Bride',
        selector: (row: { bride: any; }) => row.bride,
        sortable: true,
    },
    {
        name: 'Date',
        selector: (row: { date: any; }) => row.date,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: { status: any; }) => row.status,
        sortable: true,
    },
    {
        name: 'Location',
        selector: (row: { location: any }) => row.location ?? '-',
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
        groom: "John Smith",
        bride: "Mary Johnson",
        date: "2023-06-15",
        status: "Completed",
        location: "Main Church"
    },
    {
        groom: "Robert Davis",
        bride: "Sarah Wilson",
        date: "2023-07-22",
        status: "Scheduled",
        location: "Main Church"
    },
    {
        groom: "Michael Brown",
        bride: "Jennifer Lee",
        date: "2023-08-05",
        status: "Pending",
        location: "Garden Chapel"
    },
    {
        groom: "David Clark",
        bride: "Lisa Anderson",
        date: "2023-09-10",
        status: "Scheduled",
        location: "Main Church"
    },
    {
        groom: "James Taylor",
        bride: "Patricia Martinez",
        date: "2023-10-28",
        status: "Pending",
        location: "Garden Chapel"
    }
];

function Marriage_Record() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">Marriage Records</h5>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Marriages</span>
                                <span className='text-bold text-2xl'>5</span>
                            </div>
                            <div>
                                <span className='rounded-full text-red-500 bg-red-200 p-2'><i className="fa-regular fa-lg fa-heart "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Completed</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                            <div>
                                <span className='rounded-full text-green-500  bg-green-200 p-2'><i className="fa-regular fa-lg fa-heart "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Pending Approvals</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                            <div>
                                <span className='rounded-full text-yellow-600 bg-yellow-200 p-2'><i className="fa-regular fa-lg fa-heart"></i></span>
                            </div>
                        </div>
                    </div>
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

export default Marriage_Record;