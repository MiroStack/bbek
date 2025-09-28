import '../css/style.css';
import DataTable, { type TableColumn } from 'react-data-table-component';
import ModalXL from './modals/member_record/view_modal';
import user_logo from '../img/default_user.png';
import React, { useState, useEffect, useRef, act } from 'react';
import axios from 'axios';

function Department_Officers() {
    const baseUrl = import.meta.env.VITE_MACKY_BASE_URL;

    // SAVE LEADERS
    const [isModalView, setIsModalViewOpen] = useState(false);
    const formRef = useRef(null);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        swal("Do you want to save this Department Officer?", {
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
                    axios.post(baseUrl + 'department-officers/saveOfficer', serializedData,
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
                        id: parseInt(officer_id),
                        department: formData.get("department")?.toString() || '',
                        position: formData.get("position")?.toString() || '',
                        member: {
                            id: parseInt(member_id)
                        }
                    };
                    axios.post(baseUrl + 'department-officers/updateOfficer', data,
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

    // GET LEADERS
    const [search, setSearch] = useState('');
    const [officer, setOfficer] = useState<any[]>([]);
    const [allOfficer, setAllOfficer] = useState<any[]>([]);
    const [pending, setPending] = useState(true);
    const [filterDepartment, setFilterDepartment] = useState<'all' | 'adult ladies' | 'adult men' | 'young people'>('all');
    const [totalOfficerCount, setTotalOfficerCount] = useState(0);
    const [totalActiveOfficer, setTotalActiveOfficer] = useState(0);
    const [members, setMembers] = useState<any[]>([]);
    const [selectedOfficer, setselectedOfficer] = useState<any>([]);

    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [member_id, setMember_id] = useState('');
    const [officer_id, setOfficer_id] = useState('');
    const [action, setAction] = useState<any>(null);

    useEffect(() => {
        setDepartment(selectedOfficer?.department || '');
        setPosition(selectedOfficer?.position || '');
        setMember_id(selectedOfficer.member?.id || '');
        setOfficer_id(selectedOfficer?.id || '');
        console.log(selectedOfficer.member?.id);
    }, [selectedOfficer]);

    const fetchOfficer = async () => {
        try {
            const response = await axios.get(baseUrl + 'department-officers/getAllOfficers', {
                withCredentials: true,
            });
            setOfficer(response.data.data);
            setAllOfficer(response.data.data);
        } catch (error) {
            console.error("Failed to fetch members:", error);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchOfficer();
        getMember();
    }, []);

    useEffect(() => {
        const count = allOfficer.length;
        const countActive = allOfficer.filter(o => o.status === true).length;
        setTotalOfficerCount(count);
        setTotalActiveOfficer(countActive);
    }, [allOfficer]);

    const columns: TableColumn<any>[] = [
        {
            name: 'Name',
            selector: (row: { member: { name: any }; }) => row.member.name,
            sortable: true,
        },
        {
            name: 'Department',
            selector: (row: { department: any; }) => row.department,
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
                            setselectedOfficer(row.member);
                            setIsModalViewOpen(true)
                        }} className="text-sm dropdown-item" href="#"><i className="fa-sm fa-regular fa-eye p-2"></i>View Officer Details</a></li>
                        <li><a onClick={() => {
                            setselectedOfficer(row);
                            handleChange(row.member);
                            setAction("Edit");
                        }} data-bs-toggle="modal" data-bs-target="#department_modal" className="text-sm dropdown-item" href="#"><i className="fa-sm fa-solid fa-pencil p-2"></i>Edit Officer Information</a></li>
                        <li><a onClick={() => deleteOfficer(row.id)} className="text-sm dropdown-item text-danger" href="#"><i className="fa-sm fa-solid fa-trash p-2"></i>Delete Officer Record</a></li>
                    </ul>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        console.log(value);
        const filtered = allOfficer.filter(officer =>
            officer.name.toLowerCase().includes(value)
        );
        setOfficer(filtered);
    };

    const filteredOfficer = officer.filter(officer => {
        if (filterDepartment === 'adult ladies') return officer.department === 'Adult Ladies Department';
        if (filterDepartment === 'adult men') return officer.department === 'Adult Men Department';
        if (filterDepartment === 'young people') return officer.department === 'Young People Department';
        return true;
    });

    // Delete Officer
    const deleteOfficer = (id: number) => {
        swal("Do you want to delete this Officer?", {
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
                axios.post(`${baseUrl}department-officers/deleteOfficer?id=${id}`, null, {
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

    // Get Member List
    const getMember = async () => {
        try {
            const response = await axios.get(baseUrl + 'department-officers/memberList', {
                withCredentials: true,
            });
            console.log(response.data.data)
            setMembers(response.data.data);
            setAllOfficer(response.data.data);
        } catch (error) {
            console.error("Failed to fetch members:", error);
        } finally {
            setPending(false);
        }
    };

    const [selectedMemberId, setSelectedMemberId] = useState('0');

    // Function that handles the change (like trigger("change"))
    const handleChange = (value: any) => {
        setSelectedMemberId(value.id);
    };

    return (
        <>
            <div className="d-flex p-3 w-full align-items-center justify-content-between">
                <div>
                    <h5 className="text-3xl font-bold">Department Officers</h5>
                </div>
                <div className="d-flex gap-2">
                    <button className='btn btn-light border'>
                        <i className="fa-solid fa-download pe-2"></i>
                        <span className='text-sm'>
                            Export CSV
                        </span>
                    </button>
                    <button onClick={() => {
                        setselectedOfficer("");
                        setAction("Add");
                    }} data-bs-toggle="modal" data-bs-target="#department_modal" className="btn btn-success"><i className="fa-solid fa-plus pe-2"></i><span className='text-sm'>Add New Officer</span></button>
                </div>
            </div>

            <div className='d-flex gap-3'>
                <div className='card w-100'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                            <div className='d-flex flex-column '>
                                <span className='text-muted  text-sm'>Total Officers</span>
                                <span className='text-bold text-2xl'>{totalOfficerCount}</span>
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
                                <span className='text-muted  text-sm'>Departments</span>
                                <span className='text-bold text-2xl'>3</span>
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
                                <span className='text-muted  text-sm'>Active Officers</span>
                                <span className='text-bold text-2xl'>{totalActiveOfficer}</span>
                            </div>
                            <div>
                                <span className='rounded-full text-purple-500 bg-purple-200 p-2'><i className="fa-solid fa-lg fa-user-group "></i></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='card mt-2 p-3 mb-2'>
                <div className="input-group w-25">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input onChange={handleSearch} type="text" className="form-control " placeholder="Search Officers..." aria-label="Search Officers..." aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <ul style={{ width: "max-content" }} className="nav rounded nav-pills p-2 d-flex flex-row flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterDepartment('all')} className={`nav-link ${filterDepartment === 'all' ? 'active' : ''}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        <span className='text-sm'>All Officers</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterDepartment('adult ladies')} className={`nav-link ${filterDepartment === 'adult ladies' ? 'active' : ''}`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <span className='text-sm'>Adult Ladies</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterDepartment('adult men')} className={`nav-link ${filterDepartment === 'adult men' ? 'active' : ''}`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span className='text-sm'> Adult Men</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => setFilterDepartment('young people')} className={`nav-link ${filterDepartment === 'young people' ? 'active' : ''}`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span className='text-sm'>Young People</span>
                    </button>
                </li>
            </ul>

            <div className='mt-2 card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={filteredOfficer}
                        progressPending={pending}
                        pagination
                        striped
                        className="table table-bordered"
                    />
                </div>
            </div>

            <div className="modal fade" id="department_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="department_modal_label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h1 className="modal-title fs-5" id="department_modal_label">Add New Department Officer</h1>
                                <p className='text-muted text-sm'>Enter the details of the department officer. Click save when you're done.</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form ref={formRef} id="form_saveOfficers" onSubmit={handleSubmit}>
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
                                            disabled={selectedOfficer !== "0" && selectedOfficer !== "" && selectedOfficer !== null}
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
                                    <label htmlFor="department" className="col-sm-3 text-sm text-nowrap col-form-label">
                                        Department
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                            name="department"
                                            id="departmentname"
                                            className="form-select"
                                            required
                                        >
                                            <option value="">-- Select Department --</option>
                                            <option value="Adult Men Department">Adult Men Department</option>
                                            <option value="Adult Ladies Department">Adult Ladies Department</option>
                                            <option value="Young People Department">Young People Department</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label htmlFor="position" className="col-sm-3  text-sm col-form-label">
                                        Position
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            name="position"
                                            id="position"
                                            className="form-select"
                                            required
                                        >
                                            <option value="">-- Select Position --</option>
                                            <option value="President">President</option>
                                            <option value="Vice President">Vice President</option>
                                            <option value="Secretary">Secretary</option>
                                            <option value="Treasurer">Treasurer</option>
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
                </div>
            </div >


            <ModalXL isOpen={isModalView} onClose={() => setIsModalViewOpen(false)}>
                <h2 className="text-xl font-bold">Member Details</h2>
                <div className='d-flex mt-2 flex-row gap-3' >
                    <div className='card flex-grow-1'>
                        <div className='card-body'>
                            <span>Personal Information</span>
                            <div className='d-flex w-100 flex-column gap-2'>
                                <div className='d-flex justify-content-center'>
                                    <img src={baseUrl + "member/getImage?filename=" + selectedOfficer?.image} style={{ width: 200, height: 200 }} className="logo img-fluid rounded-circle" />
                                </div>
                                <span className='text-muted text-sm'>Full Name</span>
                                <span className=''> {selectedOfficer?.name || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Age</span>
                                <span className=''> {selectedOfficer?.age + ' years old' || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Birth Date</span>
                                <span className=''>{selectedOfficer?.birth_date || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Gender</span>
                                <span className=''>{selectedOfficer?.gender || ''}</span>
                                <hr></hr>
                                <span className='text-muted text-sm'>Status</span>
                                <span className=''>
                                    {selectedOfficer?.status ? (
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
                                                <span className=''>{selectedOfficer?.address || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Email</span>
                                                <span className=''>{selectedOfficer?.email_address || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Phone</span>
                                                <span className=''>{selectedOfficer?.phone || ''}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex w-100 flex-column gap-2'>
                                            <span>Church Information</span>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Join Date</span>
                                                <span className=''>{selectedOfficer?.join_date || ''}</span>
                                            </div>

                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Baptism Date</span>
                                                <span className=''>{selectedOfficer?.baptism_date || ''}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='text-muted text-sm'>Baptism Officiant</span>
                                                <span className=''>{selectedOfficer?.baptism_officiant || ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 w-100'>
                                        <span>Emergency Contact</span>
                                        <div className='mt-2 d-flex'>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Name</span>
                                                <span className=''>{selectedOfficer?.emergency_contact_name || ''}</span>
                                            </div>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Relationship</span>
                                                <span className=''>{selectedOfficer?.emergency_relationship || ''}</span>
                                            </div>
                                            <div className='d-flex col-4 flex-column'>
                                                <span className='text-muted text-sm'>Phone</span>
                                                <span className=''>{selectedOfficer?.emergency_phone || ''}</span>
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

export default Department_Officers