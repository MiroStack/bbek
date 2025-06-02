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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Leader Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Leader Information</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Leader Record</a></li>
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
        position: 'Sending Pastor',
        email: 'rodolfo.mojica@example.com',
        phone: '+63 912 345 6789',
        status: 'active',
        join_date: '5/15/2020',
    },
];

function Church_Leaders() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Church Leaders</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Add New Leader</button>
                </div>
            </div>
            <div className='card p-3'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search Leaders..." aria-label="Search Leaders..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <div className="mt-2 card">
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={data}
                        striped
                        highlightOnHover
                        pagination
                        className="table table-bordered" 
                    />
                </div>
            </div>


        </>
    )
}

export default Church_Leaders