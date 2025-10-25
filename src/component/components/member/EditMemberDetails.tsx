import { useState } from "react";
import { FaArrowLeft, FaPen, FaUser } from "react-icons/fa";
import dayjs from "dayjs";
import type { MemberDetailsModel } from "../../../datasource/models/member/MemberDetailsModel";

export const EditMemberDetails = (props: { memberDetails: MemberDetailsModel, setEditDetails:React.Dispatch<React.SetStateAction<boolean>> }) => {
  // Initialize local state for editable fields
  const [formData, setFormData] = useState<MemberDetailsModel>({
    ...props.memberDetails,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Member Data:", formData);
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
                  <h4 className="text-sm font-medium text-gray-500">Join Date</h4>
                  <input
                    type="date"
                    name="joinDate"
                    value={dayjs(formData.joinDate).format("YYYY-MM-DD")}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Baptism Date</h4>
                  <input
                    type="date"
                    name="baptismDate"
                    value={dayjs(formData.baptismDate).format("YYYY-MM-DD")}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Baptism Officiant</h4>
                  <input
                    type="text"
                    name="baptismOfficiant"
                    value={formData.baptismOfficiant}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>
              </div>
            </div>
          </div>

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
                <h4 className="text-sm font-medium text-gray-500">Relationship</h4>
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
