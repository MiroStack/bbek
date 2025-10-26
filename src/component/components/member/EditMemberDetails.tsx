import { useEffect, useState } from "react";
import { FaArrowLeft, FaPen, FaUser } from "react-icons/fa";
import dayjs from "dayjs";
import type { MemberDetailsModel } from "../../../datasource/models/member/MemberDetailsModel";
import type { PositionModel } from "../../../datasource/models/member/PositionModel";
import type { DepartmentModel } from "../../../datasource/models/member/DepartmentModel";
import type { UserAndIdModel } from "../../../datasource/models/User/UserAndIdModel";
import { MemberRepo } from "../../../datasource/repositories/MemberRepo";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../datasource/redux/modules/hooks/hooks";
import {
  hideLoader,
  showLoader,
  showSuccessDialog,
} from "../../../datasource/redux/dialog/DialogSlice";
import type { UserInfoModel } from "../../../datasource/models/User/UserInfoModel";

export const EditMemberDetails = (props: {
  memberDetails: MemberDetailsModel;
  positionList: PositionModel[];
  departmentList: DepartmentModel[];
  officiantList: UserAndIdModel[];
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setEditDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // Initialize local state for editable fields
  const dispatch = useAppDispatch();
  const dialogs = useAppSelector((state) => state.dialog);
  const userInfoModel: UserInfoModel =
    JSON.parse(sessionStorage.getItem("userInfo")?? "") ;

  const [toggleOfficiantDropDown, setToggleOfficiantDropdown] =
    useState<boolean>(false);
  const [toggleDepartmentDropDown, setToggleDepartmentDropdown] =
    useState<boolean>(false);
  const [togglePositionDropDown, setTogglePositionDropdown] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<MemberDetailsModel>({
    ...props.memberDetails,
  });
  const [officiant, setOfficiant] = useState(
    props.memberDetails.baptismOfficiant
  );
  const [department, setDepartment] = useState(
    props.departmentList.find(
      (item) => item.id == props.memberDetails.departmentId
    )?.departmentName
  );
  const [position, setPosition] = useState(
    props.positionList.find((item) => item.id == props.memberDetails.positionId)
      ?.positionName
  );
  const memberRepo = MemberRepo();


  const handleOfficiantDropdown = () => {
    setToggleOfficiantDropdown(!toggleOfficiantDropDown);
  };
  const handleDepartmentDropdown = () => {
    setToggleDepartmentDropdown(!toggleDepartmentDropDown);
  };

  const handlePositionDropdown = () => {
    setTogglePositionDropdown(!togglePositionDropDown);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(showLoader());
      const response = await memberRepo.EditMemberDetails(formData);
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        props.setRefresh(true);
        sessionStorage.setItem("message", response.message);
        dispatch(showSuccessDialog());
      }
    } catch (e) {}
    // TODO: call API or update function here
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Member Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Information Card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-1">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-2xl font-semibold leading-none tracking-tight flex items-center">
              <FaUser className="h-5 w-5 mr-2" />
              Personal Information
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="flex justify-center mb-6">
              <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                <FaUser className="h-16 w-16 text-gray-500" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First name"
                className="border rounded w-full p-2 mb-2"
              />
              <input
                type="text"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                placeholder="Middle name"
                className="border rounded w-full p-2 mb-2"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last name"
                className="border rounded w-full p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Age</h3>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Birthdate</h3>
              <input
                type="date"
                name="birthdate"
                value={dayjs(formData.birthdate).format("YYYY-MM-DD")}
                onChange={handleChange}
                className="border rounded w-full p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Gender</h3>
              <select
                name="gender"
                value={formData.gender ?? ""}
                onChange={handleChange}
                className="border rounded w-full p-2"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Active</h3>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="active"
                  checked={formData.active}
                  onChange={handleCheckbox}
                />
                <span>{formData.active ? "Active" : "Inactive"}</span>
              </label>
            </div>

            <div className="pt-4">
              <button
                onClick={() => props.setEditDetails(false)}
                className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-500 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                <FaArrowLeft className="h-4 w-4 mr-2" />
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Contact & Church Info */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Address</h4>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <input
                    type="text"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
              </div>
            </div>

            {/* Church Info */}
            <div>
              <h3 className="text-lg font-medium mb-4">Church Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Join Date
                  </h4>
                  <input
                    type="date"
                    name="joinDate"
                    value={dayjs(formData.joinDate).format("YYYY-MM-DD")}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Baptism Date
                  </h4>
                  <input
                    type="date"
                    name="baptismDate"
                    value={dayjs(formData.baptismDate).format("YYYY-MM-DD")}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleOfficiantDropdown}
                  className="flex h-8 relative w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                  id="new-status"
                >
                  <span className="">
                    {props.memberDetails.baptismOfficiant}
                  </span>
                  <div
                    className={`${
                      toggleOfficiantDropDown ? "" : "hidden"
                    } absolute bg-white w-100 border  top-[150%] left-[50%]  -translate-y-1/2 -translate-x-1/2 z-10`}
                  >
                    <ul className="flex flex-col items-start px-3 w-100">
                      {props.officiantList.map((officiant) => (
                        <li
                          key={officiant.id}
                          className="hover:text-green-500"
                          onClick={() => {
                            setFormData((item) => ({
                              ...item,
                              baptismOfficiant: officiant.fullName,
                              baptismOfficiantId: officiant.id,
                            }));
                            setOfficiant(officiant.fullName);
                            handleOfficiantDropdown();
                          }}
                        >
                          {officiant.fullName}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {userInfoModel.role == "ADMIN" ? (
            <div>
              <h3 className="text-lg font-medium mb-4">
                Department and Position
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={handleDepartmentDropdown}
                  className="flex relative h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                  id="new-status"
                >
                  <span className="">{department}</span>
                  <div
                    className={`${
                      toggleDepartmentDropDown ? "" : "hidden"
                    } absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}
                  >
                    <ul className="flex flex-col items-start px-3 w-100">
                      {props.departmentList.map((department) => (
                        <li
                          key={department.id}
                          className="hover:text-green-500"
                          onClick={() => {
                            setFormData((item) => ({
                              ...item,
                              departmentId: department.id,
                            }));
                            setDepartment(department.departmentName);
                            handleDepartmentDropdown();
                          }}
                        >
                          {department.departmentName}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handlePositionDropdown}
                  className="flex relative h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                  id="new-status"
                >
                  <span className="">{position}</span>
                  <div
                    className={`${
                      togglePositionDropDown ? "" : "hidden"
                    } absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}
                  >
                    <ul className="flex flex-col items-start px-3 w-100">
                      {props.positionList.map((position) => (
                        <li
                          key={position.id}
                          className="hover:text-green-500"
                          onClick={() => {
                            setFormData((item) => ({
                              ...item,
                              positionId: position.id,
                            }));
                            setPosition(position.positionName);
                            handlePositionDropdown();
                          }}
                        >
                          {position.positionName}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">
                Department and Position
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Department
                  </h4>
                  <p>
                    {
                      props.departmentList.find(
                        (item) => item.id == props.memberDetails?.departmentId
                      )?.departmentName
                    }
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Position
                  </h4>
                  <p>
                    {
                      props.positionList.find(
                        (item) => item.id == props.memberDetails.positionId
                      )?.positionName
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Emergency Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Name</h4>
                <input
                  type="text"
                  name="emergencyContactPerson"
                  value={formData.emergencyContactPerson ?? ""}
                  onChange={handleChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">
                  Relationship
                </h4>
                <input
                  type="text"
                  name="relationshipToContactPerson"
                  value={formData.relationshipToContactPerson ?? ""}
                  onChange={handleChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                <input
                  type="text"
                  name="emergencyContactNo"
                  value={formData.emergencyContactNo ?? ""}
                  onChange={handleChange}
                  className="border rounded w-full p-2"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              <FaPen className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
