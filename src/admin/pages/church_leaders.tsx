import '../css/style.css';
import DataTable, { type TableColumn } from 'react-data-table-component';
import React, { useState, useEffect, useRef } from 'react';
import ModalXL from './modals/member_record/view_modal';
import user_logo from '../img/default_user.png';
import axios from 'axios';

function Church_Leaders() {
    const baseUrl = import.meta.env.VITE_MACKY_BASE_URL;

    // SAVE CHURCH LEADERS
    const [isModalView, setIsModalViewOpen] = useState(false);
    const formRef = useRef(null);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        swal("Do you want to save this Member?", {
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
                if (action == "Add") {
                    if (!formRef.current) return;
                    const formData = new FormData(formRef.current);
                    const serializedData = Object.fromEntries(formData.entries());

                    axios.post(baseUrl + 'church-leaders/saveLeader', serializedData,
                        {
                            withCredentials: true,
                            headers: {
                                'Content-Type': 'application/json'
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
                } else {
                    if (!formRef.current) return;
                    const formData = new FormData(formRef.current);
                    const data = {
                        id: parseInt(leader_id),
                        position: formData.get("position")?.toString() || '',
                        member: {
                            id: parseInt(member_id)
                        }
                    };
                    axios.post(baseUrl + 'church-leaders/updateOfficer', data,
                        {
                            withCredentials: true,
                            headers: {
                                'Content-Type': 'application/json'
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
            }
        });

    }
    // GET CHURCH LEADERS
    const [search, setSearch] = useState('');
    const [churchLeaders, setChurchLeaders] = useState<any[]>([]);
    const [allChurchLeaders, setAllChurchLeaders] = useState<any[]>([]);
    const [members, setMembers] = useState<any[]>([]);
    const [selectedLeader, setSelectedLeader] = useState<any>(null);
    const [member_id, setMember_id] = useState('');
    const [leader_id, setLeader_id] = useState('');
    const [position, setPosition] = useState('');
    const [pending, setPending] = useState(true);
    const [action, setAction] = useState("");

    // Get Member List
    const getMember = async () => {
        try {
            const response = await axios.get(baseUrl + 'church-leaders/memberList', {
                withCredentials: true,
            });
            setMembers(response.data.data);
        } catch (error) {
            console.error("Failed to fetch members:", error);
        } finally {
            setPending(false);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        console.log(value);
        const filtered = allChurchLeaders.filter(churchLeader =>
            churchLeader.name.toLowerCase().includes(value)
        );
        setChurchLeaders(filtered);
    };

    const fetchChurchLeaders = async () => {
        try {
            const response = await axios.get(baseUrl + 'church-leaders/getAllChurchLeaders', {
                withCredentials: true,
            });
            setChurchLeaders(response.data.data);
            setAllChurchLeaders(response.data.data);
        } catch (error) {
            console.error("Failed to fetch church leaders:", error);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchChurchLeaders();
        getMember();
    }, []);

    useEffect(() => {
        setLeader_id(selectedLeader?.id);
        if (selectedLeader?.position) {
            setPosition(selectedLeader.position);
        } else {
            setPosition("");
        }
        if (selectedLeader && selectedLeader.member && selectedLeader.member.id) {
            setMember_id(selectedLeader.member.id);

        } else {
            setMember_id('');
        }
    }, [selectedLeader]);
    const columns: TableColumn<any>[] = [
        {
            name: 'Name',
            selector: (row: { member: { name: any }; }) => row.member.name,
            sortable: true,
        },
        {
            name: 'Position',
            selector: (row: { position: any; }) => row.position,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: { member: { email_address: any }; }) => row.member.email_address,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: (row: { member: { phone: any }; }) => row.member.phone,
            sortable: true,
        },
        {
            name: 'Join Date',
            selector: (row: { member: { join_date: any }; }) => row.member.join_date,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) =>
                row.member.status ? (
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                ) : (
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Inactive</span>
                ),
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
                        <li><a onClick={() => {
                            setSelectedLeader(row.member);
                            setIsModalViewOpen(true)
                        }} className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Leader Details</a></li>
                        <li><a onClick={() => {
                            setSelectedLeader(row);
                            // handleChange(row.member);
                            setAction("Edit");
                        }} data-bs-toggle="modal" data-bs-target="#leader_modal" className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Leader Information</a></li>
                        <li><a onClick={() => deleteChurchLeader(row.id)} className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Leader Record</a></li>
                    </ul>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    // Delete Church Leader

    const deleteChurchLeader = (id: number) => {
        swal("Do you want to delete this Church Leader?", {
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
        }).then((willDelete) => {
            if (willDelete) {
                axios.post(`${baseUrl}church-leaders/deleteChurchLeader?id=${id}`, null, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        const data = response.data;
                        if (data.status === "success") {
                            swal(data.message, "", "success").then(() => {
                                window.location.reload();
                            });
                        } else {
                            swal(data.message, "", "error");
                        }
                    })
                    .catch(error => {
                        swal("An error occurred while deleting.", "", "error");
                        console.error(error);
                    });
            }
        });
    };


    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Church Leaders</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className='btn btn-light border'>
                        <i className="fa-solid fa-download pe-2"></i>
                        <span className='text-sm'>
                            Export CSV
                        </span>
                    </button>
                    <button onClick={() => {
                        setAction("Add");
                        setSelectedLeader("");
                    }} data-bs-toggle="modal" data-bs-target="#leader_modal" className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i><span className='text-sm'>Add New Leader</span></button>
                </div>
            </div>
            <div className='card p-3'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input value={search} security='' onChange={handleSearch} type="text" className="form-control " placeholder="Search Leaders..." aria-label="Search Leaders..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <div className="mt-2 card">
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={churchLeaders}
                        progressPending={pending}
                        striped
                        highlightOnHover
                        pagination
                        className="table table-bordered"
                    />
                </div>
            </div>

            <div className="modal fade" id="leader_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="leader_modal_label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h2 className="text-xl font-bold">Add New Church Leader</h2>
                                <p className='text-muted text-sm'>Enter the details of the church leader. Click save when you're done.</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form ref={formRef} id="form_saveLeader" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="member_id" className="col-sm-3 text-sm text-nowrap col-form-label">
                                        Member :
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            name="member_id"
                                            id="member_id"
                                            className="form-select"
                                            value={member_id}
                                            onChange={(e) => setMember_id(e.target.value)}
                                            disabled={selectedLeader !== "0" && selectedLeader !== "" && selectedLeader !== null}
                                        >
                                            <option value="">-- Select Member --</option>
                                            {members.map((member) => (
                                                <option key={member.id} value={member.id}>
                                                    {member.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="position" className="col-sm-3  text-sm col-form-label">
                                        Position
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            name="position"
                                            id="position"
                                            className="form-select"
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            required
                                        >
                                            <option value="">-- Select Position --</option>
                                            <option value="Senior Pastor">Senior Pastor</option>
                                            <option value="Sending Pastor">Sending Pastor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary"><span className='text-sm'>Save Officer</span></button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

            <ModalXL isOpen={isModalView} onClose={() => setIsModalViewOpen(false)}>
                <h2 className="text-xl font-bold">Member Details</h2>
                <div className='d-flex mt-2 flex-row gap-3' >
                    <div className='card flex-grow-1'>
                        <div className='card-body'>
                            <span>Personal Information</span>
                            <div className='d-flex w-100 flex-column gap-2'>
                                <div className='d-flex justify-content-center'>
                                    <img src={selectedLeader?.image || user_logo} style={{ width: 200, height: 200 }} className="logo img-fluid rounded-circle" />
                                </div>
                                <span className='text-muted text-sm'>Full Name</span>
                                <span className=''> {selectedLeader?.name || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Age</span>
                                <span className=''> {selectedLeader?.age + ' years old' || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Birth Date</span>
                                <span className=''>{selectedLeader?.birth_date || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Gender</span>
                                <span className=''>{selectedLeader?.gender || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Status</span>
                                <span className=''>
                                    {selectedLeader?.status ? (
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                                    ) : (
                                        <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Inactive</span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='card flex-grow-1'>
                        <div className='card-body'>
                            <ul style={{ width: "max-content" }} className="nav rounded nav-pills p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-details-tab" data-bs-toggle="pill" data-bs-target="#pills-details" type="button" role="tab" aria-controls="pills-details" aria-selected="true">
                                        <span className='text-sm'>Details</span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-certificates-tab" data-bs-toggle="pill" data-bs-target="#pills-certificates" type="button" role="tab" aria-controls="pills-certificates" aria-selected="false">
                                        <span className='text-sm'>Certificates</span>
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade mt-3 show active" id="pills-details" role="tabpanel" aria-labelledby="pills-details-tab" >
                                    <div className='d-flex gap-2'>
                                        <div className='d-flex w-100 flex-column gap-2'>
                                            <span>Contact Information</span>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Address</span>
                                                <span className=''>{selectedLeader?.address || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Email</span>
                                                <span className=''>{selectedLeader?.email_address || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Phone</span>
                                                <span className=''>{selectedLeader?.phone || ''}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex w-100 flex-column gap-2'>
                                            <span>Church Information</span>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Join Date</span>
                                                <span className=''>{selectedLeader?.join_date || ''}</span>
                                            </div>

                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Baptism Date</span>
                                                <span className=''>{selectedLeader?.baptism_date || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Baptism Officiant</span>
                                                <span className=''>{selectedLeader?.baptism_officiant || ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 w-100'>
                                        <span>Emergency Contact</span>
                                        <div className='mt-2 d-flex'>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Name</span>
                                                <span className=''>{selectedLeader?.emergency_contact_name || ''}</span>
                                            </div>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Relationship</span>
                                                <span className=''>{selectedLeader?.emergency_relationship || ''}</span>
                                            </div>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Phone</span>
                                                <span className=''>{selectedLeader?.emergency_phone || ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="pills-certificates" role="tabpanel" aria-labelledby="pills-certificates-tab">
                                    <div className='w-100 mt-3 d-flex justify-content-between align-items-center'>
                                        <span>Certificates</span>
                                        <button className='btn btn-success'>
                                            <i className="fa-solid fa-file-lines pe-2"></i>
                                            <span className='text-sm'>Issue New Certificate</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </ModalXL>
        </>
    )
}

export default Church_Leaders