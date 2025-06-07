import '../css/style.css';
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'User',
        selector: (row: { user: string }) => row.user, // Needed for sorting
        cell: (row: { user: string }) => (
            <div className="flex items-center gap-2">
                <i className="fa-solid fa-user"></i>
                {row.user}
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Action',
        selector: (row: { action: string }) => row.action,
        sortable: true,
    },
    {
        name: 'Details',
        selector: (row: { details: string }) => row.details, // For sorting
        cell: (row: { details: string }) => (
            <div className="flex items-center gap-2">
                <i className="fa-solid fa-file-lines"></i>
                {row.details}
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Modules',
        selector: (row: { module: string }) => row.module,
        sortable: true,
    },
    {
        name: 'Timestamp',
        selector: (row: { timestamp: string }) => row.timestamp, // For sorting
        cell: (row: { timestamp: string }) => (
            <div className="flex items-center gap-2">
                <i className="fa-solid fa-clock"></i>
                {new Date(row.timestamp).toLocaleString()}
            </div>
        ),
        sortable: true,
    },
];


const data = [
    {
        user: "Admin User",
        action: "Created new member",
        details: "Added member: John Doe",
        module: "Members",
        timestamp: "2025-05-07T08:30:45"
    },
    {
        user: "Staff User",
        action: "Updated record",
        details: "Updated baptism record for Maria Santos",
        module: "Baptism",
        timestamp: "2025-05-07T09:15:22"
    },
    {
        user: "Admin User",
        action: "Deleted record",
        details: "Deleted event: Prayer Meeting",
        module: "Events",
        timestamp: "2025-05-06T14:22:10"
    },
    {
        user: "Staff User",
        action: "Created new record",
        details: "Added child dedication: Baby Sophia",
        module: "Child Dedication",
        timestamp: "2025-05-06T11:05:33"
    },
    {
        user: "Admin User",
        action: "Updated settings",
        details: "Updated church contact information",
        module: "Settings",
        timestamp: "2025-05-05T16:45:12"
    },
    {
        user: "Staff User",
        action: "Created new record",
        details: "Added marriage record: Robert & Emily",
        module: "Marriage",
        timestamp: "2025-05-05T10:30:45"
    },
    {
        user: "Admin User",
        action: "Exported data",
        details: "Exported members list to CSV",
        module: "Members",
        timestamp: "2025-05-04T15:20:18"
    },
    {
        user: "Staff User",
        action: "Updated record",
        details: "Updated donation record #1234",
        module: "Donations",
        timestamp: "2025-05-03T00:00:00" // Timestamp missing, defaulted to midnight
    }
];

function Audit_Trail() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-start">
                <div>
                    <h5 className="text-3xl font-bold">Audit Trail</h5>
                </div>
            </div>

            <div className='card p-3 d-flex flex-row gap-3 flex-nowrap'>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search inventory..." aria-label="Search inventory..." aria-describedby="basic-addon1"></input>
                </div>

                <select className="form-select">
                    <option value="0">All Modules</option>
                </select>

                <select className="form-select">
                    <option value="0">All Actions</option>
                </select>

                <select className="form-select">
                    <option value="0">All Dates</option>
                </select>
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

export default Audit_Trail;