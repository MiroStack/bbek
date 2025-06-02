import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Name',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
    },
    {
        name: 'Schedule',
        selector: (row: { schedule: any; }) => row.schedule,
        sortable: true,
    },
    {
        name: 'Leader',
        selector: (row: { leader: any; }) => row.leader,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: { status: any; }) => row.status,
        sortable: true,
    },
    {
        name: 'Members',
        selector: (row: { members: any; }) => row.members,
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
                    <li><a className="text-sm dropdown-item" href="#">View Item Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Edit Item Information</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Update Item Quantity</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Mark Item as Checked</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#">Delete Item Record</a></li>
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
        name: 'Soulwinning/Evangelism',
        schedule: 'Saturday',
        leader: 'John Doe',
        status: 'Active',
        members: 15,
    },
    {
        name: 'Street Preaching',
        schedule: 'Sunday afternoon',
        leader: 'Jane Smith',
        status: 'Active',
        members: 8,
    },
    {
        name: 'Water Baptism',
        schedule: 'Every 2 months',
        leader: 'Mark Johnson',
        status: 'Active',
        members: 5,
    },
    {
        name: "Lord's Supper",
        schedule: 'Every quarter of the year',
        leader: 'Sarah Williams',
        status: 'Active',
        members: 12,
    },
    {
        name: 'Daily Vacation Bible School',
        schedule: '3 consecutive days, every Summer Vacation',
        leader: 'Michael Brown',
        status: 'Pending',
        members: 20,
    },
];

function Ministries() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Ministries</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Create Ministry</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Ministries</span>
                                <span className='text-bold text-2xl'>5</span>
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
                                <span className='text-muted  text-sm'>Active Ministries</span>
                                <span className='text-bold text-2xl'>4</span>
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
                                <span className='text-muted  text-sm'>Total Members</span>
                                <span className='text-bold text-2xl'>60</span>
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
                    <input type="text" className="form-control " placeholder="Search ministries..." aria-label="Search ministries..." aria-describedby="basic-addon1"></input>
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

export default Ministries;