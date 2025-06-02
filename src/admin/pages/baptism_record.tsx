import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: '#',
        selector: (_row: any, index: any) => index + 1,
        sortable: true,
    },
    {
        name: 'Full Name',
        selector: (row: { fullName: any; }) => row.fullName,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: (row: { dateOfBirth: any; }) => row.dateOfBirth,
        sortable: true,
    },
    {
        name: 'Baptism Status',
        selector: (row: { baptismStatus: any; }) => row.baptismStatus,
        sortable: true,
    },
    {
        name: 'Baptism Date',
        selector: (row: { baptismDate: any }) => row.baptismDate ?? '-',
        sortable: true,
    },
    {
        name: 'Contact Number',
        selector: (row: { contactNumber: any; }) => row.contactNumber,
        sortable: true,
    },
    {
        name: 'Address',
        selector: (row: { address: any; }) => row.address,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Baptism Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Baptism Record</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-message p-2"></i>Send Message</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Baptism Record</a></li>
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
        fullName: "John Doe",
        dateOfBirth: "1995-05-20",
        baptismStatus: "BAPTIZED",
        baptismDate: "2024-10-15",
        contactNumber: "09123456789",
        address: "123 Street, City"
    },
    {
        fullName: "Jane Smith",
        dateOfBirth: "2000-08-10",
        baptismStatus: "ONGOING",
        baptismDate: "2024-10-20",
        contactNumber: "09987654321",
        address: "456 Avenue, City"
    }
];

function Baptism_Record() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">Baptism Record</h5>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Baptism</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Baptized</span>
                                <span className='text-bold text-2xl'>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Ongoing</span>
                                <span className='text-bold text-2xl'>1</span>
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

export default Baptism_Record;