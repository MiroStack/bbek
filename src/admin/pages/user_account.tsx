import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'User',
        selector: (row: { user: any; }) => row.user,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: { email: any; }) => row.email,
        sortable: true,
    },
    {
        name: 'Role',
        selector: (row: { role: any; }) => row.role,
        sortable: true,
    },
    {
        name: 'Last Login',
        selector: (row: { lastLogin: any; }) => row.lastLogin,
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
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View User Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit User Account</a></li>
                    <li><a className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-lock p-2"></i>Reset User Password</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete User Account</a></li>
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
        user: "Admin User",
        email: "admin@bbek.org",
        role: "Admin",
        lastLogin: "2025-04-10 09:30 AM",
        status: "Active",
    },
    {
        user: "Secretary Account",
        email: "secretary@bbek.org",
        role: "Staff",
        lastLogin: "2025-04-09 02:15 PM",
        status: "Active",
    },
    {
        user: "Treasurer Account",
        email: "treasurer@bbek.org",
        role: "Staff",
        lastLogin: "2025-04-08 10:45 AM",
        status: "Active",
    },
    {
        user: "John Doe",
        email: "john.doe@bbek.org",
        role: "Member",
        lastLogin: "2025-04-07 03:20 PM",
        status: "Active",
    },
    {
        user: "Jane Smith",
        email: "jane.smith@bbek.org",
        role: "Member",
        lastLogin: "2025-04-05 11:10 AM",
        status: "Inactive",
    },
];

function User_Account() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">User Accounts</h5>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Users</span>
                                <span className='text-bold text-2xl'>5</span>
                            </div>
                            <div>
                                <span className='rounded-full text-blue-500 bg-blue-200 p-2'><i className="fa-solid fa-lg fa-user-gear"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Active Users</span>
                                <span className='text-bold text-2xl'>3</span>
                            </div>
                            <div>
                                <span className='rounded-full text-green-500  bg-green-200 p-2'><i className="fa-solid fa-lg fa-user-gear"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Member Users</span>
                                <span className='text-bold text-2xl'>2</span>
                            </div>
                            <div>
                                <span className='rounded-full text-purple-600 bg-purple-200 p-2'><i className="fa-solid fa-lg fa-user-gear"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search users..." aria-label="Search users..." aria-describedby="basic-addon1"></input>
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

export default User_Account;