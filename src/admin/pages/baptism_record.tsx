import '../css/style.css';
import DataTable, { type TableColumn } from 'react-data-table-component';
import React, { useEffect, useState, useRef } from 'react';
import axios, { all } from 'axios';




function Baptism_Record() {
    const baseUrl = import.meta.env.VITE_MACKY_BASE_URL;

    const [allBaptismRecord, setAllBaptismRecord] = useState<any[]>([]);
    const [baptismRecord, setBaptismRecord] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [pending, setPending] = useState(true);
    const [totalBaptism, setTotalBaptism] = useState(0);
    const [totalBaptized, setTotalBaptized] = useState(0);
    const [totalOngoing, setTotalOngoing] = useState(0);
    const [status, setStatus] = useState("");
    const handleChangeStatus = (e: any) => {
        setStatus(e.target.value);
    };

    // View Member
    const [row, setRow] = useState<any>(null);
    const [action, setAction] = useState<any>(null);

    useEffect(() => {
        const modalElement = document.getElementById('sendMessage_modal');
        const handler = (event: any) => {
            const trigger = event.relatedTarget as HTMLElement;
            const rowData = trigger?.getAttribute('data-row');
            if (rowData) {
                const row = JSON.parse(rowData);
                setRow(row);
            }
        }

        if (modalElement) {
            modalElement.addEventListener('show.bs.modal', handler as EventListener);
        }

        const handleHide = () => {
            setRow(null);
            console.log('Modal hidden, row reset.');
        };

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('show.bs.modal', handler as EventListener);
                modalElement.addEventListener('hide.bs.modal', handleHide);
            }
        };
    }, []);

    // Show Baptism Modal
    useEffect(() => {
        const modalElement = document.getElementById('baptism_modal');

        const handler = (event: any) => {
            const trigger = event.relatedTarget as HTMLElement;
            const rowData = trigger?.getAttribute('data-row');
            const actionData = trigger?.getAttribute('data-action');
            console.log(actionData);
            if (actionData) {
                setAction(actionData);
            }
            if (rowData) {
                const row = JSON.parse(rowData);
                setRow(row);
                setStatus(row.status_id);
            }
        };

        if (modalElement) {
            modalElement.addEventListener('show.bs.modal', handler as EventListener);
        }

        const handleHide = () => {
            setRow(null);
            console.log('Modal hidden, row reset.');
        };

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('show.bs.modal', handler as EventListener);
                modalElement.addEventListener('hide.bs.modal', handleHide);
            }
        };
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);

        const filtered = allBaptismRecord.filter(baptism =>
            baptism.firstname.toLowerCase().includes(value)
        );

        setBaptismRecord(filtered);
    };

    const fetchMembers = async () => {
        try {
            const response = await axios.get(baseUrl + 'baptism/getAllBaptismRecord', {
                withCredentials: true,
            });
            setAllBaptismRecord(response.data.data);
            setBaptismRecord(response.data.data);
        } catch (error) {
            console.error("Failed to fetch members:", error);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    useEffect(() => {
        const totalBaptism = allBaptismRecord.length;
        const totalBaptized = allBaptismRecord.filter(o => o.status_id === 5).length;
        const totalOngoing = allBaptismRecord.filter(o => o.status_id === 1).length;
        setTotalBaptism(totalBaptism);
        setTotalBaptized(totalBaptized);
        setTotalOngoing(totalOngoing);
    }, [allBaptismRecord]);

    const columns: TableColumn<any>[] = [
        {
            name: '#',
            selector: (_row: any, index: any) => index + 1,
            sortable: true,
        },
        {
            name: 'Full Name',
            cell: (row: any) => (
                <span>{row.firstname + ' ' + row.lastname}</span>
            )
        },
        {
            name: 'Date of Birth',
            selector: (row) => row.date_of_birth,
            sortable: true,
        },
        {
            name: 'Baptism Status',
            cell: (row) => {
                if (row.status_id !== 5) {
                    return (
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                            {row.status_name}
                        </span>
                    );
                } else {
                    return (
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            {row.status_name}
                        </span>
                    );
                }
            },
            sortable: true,
        },
        {
            name: 'Baptism Date',
            selector: (row: { baptism_date: any }) => row.baptism_date ?? '-',
            sortable: true,
        },
        {
            name: 'Contact Number',
            selector: (row: { phone_number: any; }) => row.phone_number,
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
                        <li><a data-action={"View"} data-row={JSON.stringify(row)} data-bs-toggle="modal" data-bs-target="#baptism_modal" className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Baptism Details</a></li>
                        <li><a data-action={"Edit"} data-row={JSON.stringify(row)} data-bs-toggle="modal" data-bs-target="#baptism_modal" className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Baptism Record</a></li>
                        <li><a data-row={JSON.stringify(row)} data-bs-toggle="modal" data-bs-target="#sendMessage_modal" className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-message p-2"></i>Send Message</a></li>
                        <li><a onClick={() => deleteRecord(row.id)} className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Baptism Record</a></li>
                    </ul>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    // Edit 
    const formRef = useRef(null);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const serializedData = Object.fromEntries(formData.entries());
        console.log(serializedData);
        swal("Do you want to save this Data?", {
            icon: "warning",
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
                confirm: {
                    text: "Yes, Save it",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
            },
            dangerMode: true,
        }).then((willSave) => {
            if (willSave) {
                axios.post(baseUrl + 'baptism/updateBaptismRecord', serializedData,
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        const data = response.data;
                        if (data.status == "success") {
                            swal(data.message, "", "success").then(() => {
                                window.location.reload();
                            });
                        } else {
                            swal(data.message, "", "error").then(() => {
                                window.location.reload();
                            });
                        }
                    })
                    .catch(error => {
                        swal(error, "", "error").then(() => {
                            window.location.reload();
                        });
                    });
            }
        });
    };

    // send message
    const formRef2 = useRef(null);
    const sendMessage = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!formRef2.current) return;
        const formData = new FormData(formRef2.current);
        const serializedData = Object.fromEntries(formData.entries());
        console.log(serializedData);
        swal("Do you want to send this message?", {
            icon: "warning",
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
                confirm: {
                    text: "Yes, Send it",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
            },
            dangerMode: true,
        }).then((willSave) => {
            if (willSave) {
                axios.post(baseUrl + 'baptism/sendEmailMessage', serializedData,
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        const data = response.data;
                        if (data.status == "success") {
                            swal(data.message, "", "success").then(() => {
                                window.location.reload();
                            });
                        } else {
                            swal(data.message, "", "error").then(() => {
                                window.location.reload();
                            });
                        }
                    })
                    .catch(error => {
                        swal(error, "", "error").then(() => {
                            window.location.reload();
                        });
                    });
            }
        });
    };

    // Delete Record

    const deleteRecord = (id: any) => {
        swal("Do you want to delete this record?", {
            icon: "warning",
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
                confirm: {
                    text: "Yes, Delete it",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
            },
            dangerMode: true,
        }).then((willSave) => {
            if (willSave) {
                axios.post(baseUrl + 'baptism/deleteRecord', {id : id},
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        const data = response.data;
                        if (data.status == "success") {
                            swal(data.message, "", "success").then(() => {
                                window.location.reload();
                            });
                        } else {
                            swal(data.message, "", "error").then(() => {
                                window.location.reload();
                            });
                        }
                    })
                    .catch(error => {
                        swal(error, "", "error").then(() => {
                            window.location.reload();
                        });
                    });
            }
        });
    };
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
                                <span className='text-bold text-2xl'>{totalBaptism}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Baptized</span>
                                <span className='text-bold text-2xl'>{totalBaptized}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Ongoing</span>
                                <span className='text-bold text-2xl'>{totalOngoing}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card p-3 mt-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input value={search} onChange={handleSearch} type="text" className="form-control " placeholder="Search records..." aria-label="Search records..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <div className='mt-2 card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={baptismRecord}
                        pagination
                        striped
                        className="table table-bordered"
                    />
                </div>
            </div>
            {/* 
            <!-- Modal --> */}
            <div className="modal fade" id="baptism_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="baptism_modal_label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h2 className="text-xl font-bold">{action} Baptism Record</h2>
                                <p className='text-muted text-sm '>Make changes to the baptism record.</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form encType="multipart/form-data" ref={formRef} onSubmit={handleSubmit} id="form_baptism">
                            <input name="id" type='hidden' defaultValue={row?.id || ''}></input>
                            <div className="modal-body">
                                <div className=''>
                                    <label htmlFor="name" className="text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        First Name
                                    </label>
                                    <input disabled defaultValue={row?.firstname || ''} required name="firstname" type="text" id="firstname" className="form-control" />
                                    <label htmlFor="name" className="text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Last Name
                                    </label>
                                    <input disabled defaultValue={row?.lastname || ''} required name="lastname" type="text" id="name" className="form-control" />
                                    <label htmlFor="name" className=" text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Date of Birth
                                    </label>
                                    <input disabled defaultValue={row?.date_of_birth || ''} required name="date_of_birth" type="date" id="name" className="form-control" />
                                    <label htmlFor="name" className=" text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Baptism Status
                                    </label>
                                    <select
                                        name="status_id"
                                        id="status_id"
                                        value={status}  // this decides which option is selected
                                        onChange={handleChangeStatus}
                                        disabled={action === 'View'}
                                        className="form-select"
                                    >
                                        <option value="">SELECT STATUS</option>
                                        <option value="1">ON GOING</option>
                                        <option value="2">PENDING</option>
                                        <option value="3">APPROVED</option>
                                        <option value="4">CANCELLED</option>
                                        <option value="5">BAPTIZED</option>
                                    </select>
                                    <label htmlFor="name" className=" text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Baptism Date
                                    </label>
                                    <input disabled={action === 'View'} defaultValue={row?.baptism_date || ''} required name="baptism_date" type="date" id="baptism_date" className="form-control" />
                                    <label htmlFor="name" className=" text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Contact Number
                                    </label>
                                    <input disabled defaultValue={row?.phone_number || ''} required name="phone_number" type="text" id="phone_number" className="form-control" />
                                    <label htmlFor="name" className=" text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Address
                                    </label>
                                    <input disabled defaultValue={row?.address || ''} required name="address" type="text" id="address" className="form-control" />
                                    {/* <label htmlFor="name" className=" text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Member Type
                                    </label> */}
                                    {/* <select disabled={action === 'View'} className='form-select'>
                                        <option>Non Member</option>
                                        <option>Member</option>
                                    </select> */}
                                </div>
                            </div>
                            <div className="modal-footer">
                                {action !== 'View' && (
                                    <button type="submit" className="btn btn-success">
                                        Save
                                    </button>
                                )}
                            </div>
                        </form>

                    </div>
                </div>
            </div >


            <div className="modal fade" id="sendMessage_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="sendMessage_modal_label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h2 className="text-xl font-bold">Send Message</h2>
                                <p className='text-muted text-sm '>Send a message to {row?.firstname + ' ' + row?.lastname}</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form encType="multipart/form-data" onSubmit={sendMessage} ref={formRef2} id="form_sendMessage">
                            <input type='hidden' name="email" defaultValue={row?.email}></input>
                            <div className="modal-body">
                                <div className='d-flex flex-column gap-2'>
                                    <div>
                                        <label>Subject</label>
                                        <input required name="subject" placeholder='Enter message subject' className='form-control'></input>
                                    </div>
                                    <div>
                                        <label>Message</label>
                                        <textarea required name="message" placeholder='Enter your message here...' className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Baptism_Record;