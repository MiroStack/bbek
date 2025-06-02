import '../css/style.css';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Item Name',
        selector: (row: { itemName: any; }) => row.itemName,
        sortable: true,
    },
    {
        name: 'Category',
        selector: (row: { category: any; }) => row.category,
        sortable: true,
    },
    {
        name: 'Quantity',
        selector: (row: { quantity: any; }) => row.quantity,
        sortable: true,
    },
    {
        name: 'Location',
        selector: (row: { location: any; }) => row.location,
        sortable: true,
    },
    {
        name: 'Condition',
        selector: (row: { condition: any; }) => row.condition,
        sortable: true,
    },
    {
        name: 'Last Checked',
        selector: (row: { lastChecked: any; }) => row.lastChecked,
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
        itemName: 'Microphones',
        category: 'Equipment',
        quantity: 5,
        location: 'Sound Room',
        condition: 'Good',
        lastChecked: '2025-03-10',
    },
    {
        itemName: 'Speakers',
        category: 'Equipment',
        quantity: 4,
        location: 'Main Hall',
        condition: 'Good',
        lastChecked: '2025-03-10',
    },
    {
        itemName: 'Projector',
        category: 'Equipment',
        quantity: 1,
        location: 'Main Hall',
        condition: 'Needs Repair',
        lastChecked: '2025-03-10',
    },
];

function Inventory_Records() {
    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Inventory Records</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i>Add New Item</button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted text-sm'>Total Items</span>
                                <span className='text-bold text-2xl'>12</span>
                            </div>
                            <div>
                                <span className='rounded-full text-blue-500 bg-blue-200 p-2'><i className="fa-solid fa-lg fa-box "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Categories</span>
                                <span className='text-bold text-2xl'>5</span>
                            </div>
                            <div>
                                <span className='rounded-full text-green-500  bg-green-200 p-2'><i className="fa-solid fa-lg fa-box "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Needs Attention</span>
                                <span className='text-bold text-2xl'>81</span>
                            </div>
                            <div>
                                <span className='rounded-full text-yellow-600 bg-yellow-200 p-2'><i className="fa-solid fa-lg fa-warning"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control " placeholder="Search inventory..." aria-label="Search inventory..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills mt-2 p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active text-nowrap" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        All Items
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Equipment
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Furniture
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Books
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Worship Items
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Instruments
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        Need Attention
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

export default Inventory_Records;