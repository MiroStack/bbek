import '../css/style.css';
import DataTable from 'react-data-table-component';

const handleAction = (row: any) => {
    console.log('Viewing row:', row);
    // You can add edit/delete functionality here
};

const columns = [
    {
        name: 'Name',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
    },
    {
        name: 'Department',
        selector: (row: { department: any; }) => row.department,
        sortable: true,
    },
    {
        name: 'Position',
        selector: (row: { position: any; }) => row.position,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: { email: any; }) => row.email,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: (row: { phone: any; }) => row.phone,
        sortable: true,
    },
    {
        name: 'Join Date',
        selector: (row: { join_date: any; }) => row.join_date,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Member Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Member Information</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Member Record</a></li>
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
        id: 1,
        name: 'John Doe',
        department: 'Adult Ladies Department',
        position: 'Sending Pastor',
        email: 'rodolfo.mojica@example.com',
        phone: '+63 912 345 6789',
        status: 'active',
        join_date: '5/15/2020',
    },
];

function Department_Officers() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Department Officers</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Add New Officer</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Total Officers</span>
                                <span className='text-bold text-2xl'>12</span>
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
                                <span className='text-muted  text-sm'>Departments</span>
                                <span className='text-bold text-2xl'>3</span>
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
                                <span className='text-muted  text-sm'>Active Officers</span>
                                <span className='text-bold text-2xl'>12</span>
                            </div>
                            <div>
                                <span className='rounded-full text-purple-500 bg-purple-200 p-2'><i className="fa-solid fa-lg fa-user-group "></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card mt-2 p-3 mb-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search Officers..." aria-label="Search Officers..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        All Officers
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Adult Ladies
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Adult Men
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Young People
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

export default Department_Officers