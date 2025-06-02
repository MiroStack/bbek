import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: '#',
        selector: (_row: any, index: any) => index + 1,
        sortable: true,
    },
    {
        name: 'Groom Name',
        selector: (row: { groomName: any; }) => row.groomName,
        sortable: true,
    },
    {
        name: 'Bride Name',
        selector: (row: { brideName: any; }) => row.brideName,
        sortable: true,
    },
    {
        name: 'Marriage Date',
        selector: (row: { marriageDate: any; }) => row.marriageDate,
        sortable: true,
    },
    {
        name: 'Location',
        selector: (row: { location: any }) => row.location ?? '-',
        sortable: true,
    },
    {
        name: 'Officiant',
        selector: (row: { officiant: any; }) => row.officiant,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Marriage Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Marriage Record</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-message p-2"></i>Send Message</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Marriage Record</a></li>
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
        groomName: "John Doe",
        brideName: "Jane Smith",
        marriageDate: "2025-06-15",
        location: "Bible Baptist Ekklesia",
        officiant: "Pastor Mark",
        status: "Completed"
    },
    {
        groomName: "Michael Johnson",
        brideName: "Sarah Thompson",
        marriageDate: "2025-08-22",
        location: "Bible Baptist Ekklesia",
        officiant: "Pastor Mark",
        status: "Pending"
    }
];

function Marriage() {
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
                                <span className='text-bold text-2xl'>2</span>
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
                                <span className='text-muted  text-sm'>This Year</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                            <div>
                                <span className='rounded-full text-pink-500  bg-pink-200 p-2'><i className="fa-regular fa-lg fa-heart "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Certificates Issued</span>
                                <span className='text-bold text-2xl'>1</span>
                            </div>
                            <div>
                                <span className='rounded-full text-purple-600 bg-purple-200 p-2'><i className="fa-regular fa-lg fa-heart"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search marriage records..." aria-label="Search marriage records..." aria-describedby="basic-addon1"></input>
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

export default Marriage;