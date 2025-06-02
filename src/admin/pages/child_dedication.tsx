import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: '#',
        selector: (_row: any, index: any) => index + 1,
        sortable: true,
    },
    {
        name: 'Child Name',
        selector: (row: { childName: any; }) => row.childName,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: (row: { dateOfBirth: any; }) => row.dateOfBirth ?? '-',
        sortable: true,
    },
    {
        name: 'Parent Guardian Name',
        selector: (row: { parentGuardianName: any; }) => row.parentGuardianName,
        sortable: true,
    },
    {
        name: 'Dedication Status',
        selector: (row: { dedicationStatus: any; }) => row.dedicationStatus,
        sortable: true,
    },
    {
        name: 'Dedication Date',
        selector: (row: { dedicationDate: any; }) => row.dedicationDate ?? '-',
        sortable: true,
    },
    {
        name: 'Contact Number',
        selector: (row: { contactNumber: any; }) => row.contactNumber,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Dedication Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Dedication Record</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-message p-2"></i>Send Message</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Dedication Record</a></li>
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
        childName: "Emma Grace",
        dateOfBirth: "2022-03-15",
        parentGuardianName: "Michael & Sarah Grace",
        dedicationStatus: "DEDICATED",
        dedicationDate: "2025-04-01",
        contactNumber: "09151234567",
    },
    {
        childName: "Lucas Martin",
        dateOfBirth: "2023-01-25",
        parentGuardianName: "Daniel & Anna Martin",
        dedicationStatus: "PENDING",
        dedicationDate: null,  // since the date is '-'
        contactNumber: "09258765432",
    },
];

function Child_Dedication() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">Child Dedication</h5>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Dedications</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Dedicated</span>
                                <span className='text-bold text-2xl'>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Pending</span>
                                <span className='text-bold text-2xl'>1</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search dedication records..." aria-label="Search dedication records..." aria-describedby="basic-addon1"></input>
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

export default Child_Dedication;