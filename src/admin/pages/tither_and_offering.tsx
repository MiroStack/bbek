import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Member Name',
        selector: (row: { memberName: any; }) => row.memberName,
        sortable: true,
    },
    {
        name: 'Amount',
        selector: (row: { amount: number }) => `₱${row.amount.toLocaleString()}`,
        sortable: true,
    },
    {
        name: 'Date',
        selector: (row: { date: any; }) => row.date,
        sortable: true,
    },
    {
        name: 'Type',
        selector: (row: { type: any; }) => row.type,
        sortable: true,
    },
    {
        name: 'Payment Method',
        selector: (row: { paymentMethod: any; }) => row.paymentMethod,
        sortable: true,
    },
    {
        name: 'Notes',
        selector: (row: { notes: any; }) => row.notes,
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
                    <li><a className="text-sm dropdown-item" href="#">View Details</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Edit Donation</a></li>
                    <li><a className="text-sm dropdown-item" href="#">Print Receipt</a></li>
                    <li><a className="text-sm dropdown-item text-danger" href="#">Delete</a></li>
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
        memberName: "John Doe",
        amount: 1000,
        date: "2025-04-05",
        type: "Tithe",
        paymentMethod: "Cash",
        notes: "Monthly tithe"
    },
    {
        memberName: "Jane Smith",
        amount: 500,
        date: "2025-04-05",
        type: "Offering",
        paymentMethod: "Bank Transfer",
        notes: "Sunday offering"
    },
    {
        memberName: "Michael Johnson",
        amount: 2000,
        date: "2025-04-02",
        type: "Tithe",
        paymentMethod: "Cash",
        notes: "Monthly tithe"
    },
    {
        memberName: "Emily Davis",
        amount: 300,
        date: "2025-04-02",
        type: "Offering",
        paymentMethod: "Mobile Payment",
        notes: "Midweek service offering"
    },
    {
        memberName: "Robert Wilson",
        amount: 5000,
        date: "2025-03-28",
        type: "Special Offering",
        paymentMethod: "Check",
        notes: "Building fund donation"
    },
    {
        memberName: "Sarah Thompson",
        amount: 1500,
        date: "2025-03-28",
        type: "Tithe",
        paymentMethod: "Cash",
        notes: "Monthly tithe"
    }
];

function TithesAndOffering() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Tithes & Offering</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Record New Donation</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Donations</span>
                                <span className='text-bold text-2xl'>₱10,300</span>
                            </div>
                            <div>
                                <span className='rounded-full text-green-500 bg-green-200 p-2'><i className="fa-solid fa-lg fa-gift"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Tithes</span>
                                <span className='text-bold text-2xl'>₱4,500</span>
                            </div>
                            <div>
                                <span className='rounded-full  text-blue-500 bg-blue-200 p-2'><i className="fa-solid fa-lg fa-gift"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Offerings</span>
                                <span className='text-bold text-2xl'>₱800</span>
                            </div>
                            <div>
                                <span className='rounded-full  text-purple-500 bg-purple-200 p-2'><i className="fa-solid fa-lg fa-gift "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Special Offerings</span>
                                <span className='text-bold text-2xl'>₱5,000</span>
                            </div>
                            <div>
                                <span className='rounded-full   text-yellow-600 bg-yellow-200 p-2'><i className="fa-solid fa-lg fa-gift "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search donations..." aria-label="Search Donations..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills p-2 d-flex flex-row flex-nowrap mt-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        All Donations
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Tithes
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Offerings
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Special Offerings
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
                        className="table table-bordered "
                    />
                </div>
            </div>

        </>
    )
}

export default TithesAndOffering;