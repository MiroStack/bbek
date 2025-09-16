import '../css/style.css';
import DataTable, { type TableColumn } from 'react-data-table-component';
import Modal from '../pages/modals/member_record/add_new_member_modal';
import ModalXL from './modals/member_record/view_modal';
import user_logo from '../img/default_user.png';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { IMaskInput } from 'react-imask';



function Member_Record() {
    const baseUrl = import.meta.env.VITE_MACKY_BASE_URL;

    const [isModalView, setIsModalViewOpen] = useState(false);

    // SAVE MEMBERS
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formRef = useRef(null);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const fileInput = document.getElementById("image") as HTMLInputElement;
        if (fileInput && fileInput.files && fileInput.files[0]) {
            formData.append("imageInput", fileInput.files[0]);
        }
        const serializedData = Object.fromEntries(formData.entries());

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
                    axios.post(baseUrl + 'member/saveMember', serializedData,
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
                } else {
                    axios.post(baseUrl + 'member/updateMember', serializedData,
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
            }
        });


    };

    // GET MEMBERS
    const [search, setSearch] = useState('');
    const [allMembers, setAllMembers] = useState<any[]>([]);
    const [members, setMembers] = useState<any[]>([]);
    const [pending, setPending] = useState(true);
    const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
    const [selectedMember, setSelectedMember] = useState<any>(null);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);

        const filtered = allMembers.filter(member =>
            member.name.toLowerCase().includes(value)
        );

        setMembers(filtered);
    };

    const fetchMembers = async () => {
        try {
            const response = await axios.get(baseUrl + 'member/getAllMembers', {
                withCredentials: true,
            });
            setAllMembers(response.data.data);
            setMembers(response.data.data);
        } catch (error) {
            console.error("Failed to fetch members:", error);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const columns: TableColumn<any>[] = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Age",
            selector: (row) => row.age,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row) => row.address,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) =>
                row.status ? (
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                ) : (
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Inactive</span>
                ),
            sortable: true,
        },
        {
            id: 'join_date',
            name: 'Join Date',
            selector: (row) => row.join_date,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="dropdown">
                    <a className="cursor-pointer" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-ellipsis"></i>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a onClick={() => {
                            setSelectedMember(row);
                            setIsModalViewOpen(true)
                        }} className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Member Details</a></li>
                        <li><a data-action={"Edit"} data-id={row.id} data-row={JSON.stringify(row)} data-bs-toggle="modal" data-bs-target="#addNewMember" className="btn_editMember text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Member Information</a></li>
                        <li><a onClick={() => deleteMember(row.id)} className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Member Record</a></li>
                    </ul>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const filteredMembers = members.filter(member => {
        if (filterStatus === 'active') return member.status === true;
        if (filterStatus === 'inactive') return member.status === false;
        return true;
    });

    // Delete Member
    const deleteMember = (id: number) => {
        swal("Do you want to delete this Member?", {
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
                axios.post(`${baseUrl}member/deleteMember?id=${id}`, null, {
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

    // Edit Member
    const [row, setRow] = useState<any>(null);
    const [action, setAction] = useState<any>(null);

    useEffect(() => {
        const modalElement = document.getElementById('addNewMember');

        const handler = (event: any) => {
            const trigger = event.relatedTarget as HTMLElement;
            const rowData = trigger?.getAttribute('data-row');
            const actionData = trigger?.getAttribute('data-action');
            if (actionData) {
                setAction(actionData);
            }
            if (rowData) {
                const row = JSON.parse(rowData);
                setRow(row);
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

    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Member Records</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className='btn btn-light border'>
                        <i className="fa-solid fa-download pe-2"></i>
                        <span className='text-sm'>
                            Export CSV
                        </span>
                    </button>
                    <a data-action={"Add"} data-bs-toggle="modal" data-bs-target="#addNewMember" className="btn btn-success" href=""><i className="fa-solid fa-plus pe-2"></i><span className='text-sm'>Add New Member</span></a>
                </div>
            </div>
            <div className='card p-3 mb-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input value={search} onChange={handleSearch} type="text" className="form-control " placeholder="Search Members..." aria-label="Search Members..." aria-describedby="basic-addon1"></input>
                </div>
            </div>


            <ul style={{ width: "max-content" }} className="nav rounded nav-pills p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterStatus('all')} className={`nav-link ${filterStatus === 'all' ? 'active' : ''}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        <span className='text-sm'>All Members</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterStatus('active')} className={`nav-link ${filterStatus === 'active' ? 'active' : ''}`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <span className='text-sm'>Active</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterStatus('inactive')} className={`nav-link ${filterStatus === 'inactive' ? 'active' : ''}`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span className='text-sm'>Inactive</span>
                    </button>
                </li>
            </ul>


            <div className='mt-2 card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={filteredMembers}
                        progressPending={pending}
                        pagination
                        striped
                        className="table table-bordered "
                        defaultSortFieldId="join_date"
                        defaultSortAsc={false}
                    />
                </div>
            </div>

            <div id="addNewMember" className="modal" >
                <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h2 className="text-xl font-bold">{action} Member</h2>
                                <p className='text-muted text-sm '>Enter the details of the member. Click save when you're done</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form encType="multipart/form-data" ref={formRef} id="form_addMember" className="container" onSubmit={handleSubmit}>


                                <input defaultValue={row?.id || ''} required name="id" type="hidden" id="id" className="form-control" />

                                <span className='text-muted mb-3'>Personal Information</span>
                                <div className="row my-3 align-items-center">
                                    <label htmlFor="name" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Name
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.name || ''} required name="name" type="text" id="name" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="age" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Age
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.age || ''} required type="number" id="age" name="age" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="birth_date" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Birth Date
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.birth_date || ''} required type="date" id="birth_date" name="birth_date" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="gender" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Gender
                                    </label>
                                    <div className="col-sm-9">
                                        <select defaultValue={row?.gender || ''} required name="gender" id="status" className="form-select" >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="status" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Status
                                    </label>
                                    <div className="col-sm-9">
                                        <select defaultValue={row?.status || ''} required name="status" id="status" className="form-select" >
                                            <option value="true">Active</option>
                                            <option value="false">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                {row?.image && (
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="image" className="col-sm-3 text-sm col-form-label">
                                            Current Image
                                        </label>
                                        <div className="col-sm-9">
                                            <img src={baseUrl + "member/getImage?filename=" + row?.image} style={{ width: 50 }} className="logo img-fluid" alt="" />
                                        </div>
                                        <input type="hidden" name="image" value={row.image} />
                                    </div>
                                )}
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="image" className="col-sm-3 text-sm col-form-label">
                                        Upload Image
                                    </label>
                                    <div className="col-sm-9">
                                        <input required type="file" id="image" className="form-control" ></input>
                                    </div>
                                </div>

                                <span className='text-muted mb-3'>Contact Infomation</span>
                                <div className="row my-3 align-items-center">
                                    <label htmlFor="phone" className="col-sm-3 text-sm col-form-label">
                                        Phone
                                    </label>
                                    <div className="col-sm-9">
                                        <IMaskInput
                                            key={row?.phone || 'empty'}
                                            mask="+63 000 000 0000"
                                            definitions={{
                                                '#': /[0-9]/,
                                            }}
                                            lazy={false}
                                            placeholder="+63 912 345 6789"
                                            className="form-control"
                                            name="phone"
                                            defaultValue={row?.phone || ''}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="email_address" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Email Address
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.email_address || ''} required type="email" name="email_address" id="email_address" className="form-control" ></input>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="address" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Address
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea defaultValue={row?.address || ''} required name="address" id="address" className="form-control" ></textarea>
                                    </div>
                                </div>

                                <span className='text-muted mb-3'>Church Infomation</span>

                                <div className="row my-3 align-items-center">
                                    <label htmlFor="join_date" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Join Date
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.join_date || ''} type="date" required name="join_date" id="join_date" className="form-control" ></input>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="baptism_date" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Baptism Date
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.baptism_date || ''} type="date" required name="baptism_date" id="baptism_date" className="form-control" ></input>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="baptism_officiant" className="col-sm-3 text-sm col-form-label">
                                        <small className='text-danger'>*</small>
                                        Baptism Officiant
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.baptism_officiant || ''} type="text" required name="baptism_officiant" id="baptism_officiant" className="form-control" ></input>
                                    </div>
                                </div>

                                <span className='text-muted mb-3'>Emergency Contact</span>
                                <div className="row my-3 align-items-center">
                                    <label htmlFor="emergency_contact_name" className="col-sm-3 text-sm col-form-label">
                                        Emergency Contact Name
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.emergency_contact_name || ''} type="name" name="emergency_contact_name" id="emergency_contact_name" className="form-control" ></input>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="emergency_relationship" className="col-sm-3 text-sm col-form-label">
                                        Relationship
                                    </label>
                                    <div className="col-sm-9">
                                        <input defaultValue={row?.emergency_relationship || ''} type="name" name="emergency_relationship" id="emergency_relationship" className="form-control" ></input>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="emergency_phone" className="col-sm-3 text-sm col-form-label">
                                        Phone
                                    </label>
                                    <div className="col-sm-9">
                                        <IMaskInput
                                            key={row?.emergency_phone || 'empty'}
                                            mask="+63 000 000 0000"
                                            definitions={{
                                                '#': /[0-9]/,
                                            }}
                                            lazy={false}
                                            placeholder="+63 912 345 6789"
                                            className="form-control"
                                            name="emergency_phone"
                                            defaultValue={row?.emergency_phone || ''}
                                        />
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className='modal-footer'>
                            <div className='text-end'>
                                <button type="submit" form="form_addMember" id="btn_submit" className='btn btn-success'>Save Member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalXL isOpen={isModalView} onClose={() => setIsModalViewOpen(false)}>
                <h2 className="text-xl font-bold">Member Details</h2>
                <div className='d-flex mt-2 flex-row gap-3' >
                    <div className='card flex-grow-1'>
                        <div className='card-body'>
                            <span>Personal Information</span>
                            <div className='d-flex w-100 flex-column gap-2'>
                                <div className='d-flex justify-content-center'>
                                    <img src={baseUrl + "member/getImage?filename=" + selectedMember?.image}
                                        style={{ width: 200, height: 200 }} className="logo img-fluid rounded-circle" />
                                </div>
                                <span className='text-muted text-sm'>Full Name</span>
                                <span className=''> {selectedMember?.name || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Age</span>
                                <span className=''> {selectedMember?.age + ' years old' || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Birth Date</span>
                                <span className=''>{selectedMember?.birth_date || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Gender</span>
                                <span className=''>{selectedMember?.gender || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Status</span>
                                <span className=''>
                                    {selectedMember?.status ? (
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
                                                <span className=''>{selectedMember?.address || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Email</span>
                                                <span className=''>{selectedMember?.email_address || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Phone</span>
                                                <span className=''>{selectedMember?.phone || ''}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex w-100 flex-column gap-2'>
                                            <span>Church Information</span>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Join Date</span>
                                                <span className=''>{selectedMember?.join_date || ''}</span>
                                            </div>

                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Baptism Date</span>
                                                <span className=''>{selectedMember?.baptism_date || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Baptism Officiant</span>
                                                <span className=''>{selectedMember?.baptism_officiant || ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 w-100'>
                                        <span>Emergency Contact</span>
                                        <div className='mt-2 d-flex'>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Name</span>
                                                <span className=''>{selectedMember?.emergency_contact_name || ''}</span>
                                            </div>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Relationship</span>
                                                <span className=''>{selectedMember?.emergency_relationship || ''}</span>
                                            </div>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Phone</span>
                                                <span className=''>{selectedMember?.emergency_phone || ''}</span>
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

export default Member_Record