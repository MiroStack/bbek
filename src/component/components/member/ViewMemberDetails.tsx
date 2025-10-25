import { FaPen, FaUser } from "react-icons/fa";

import dayjs from "dayjs";
import type { MemberDetailsModel } from "../../../datasource/models/member/MemberDetailsModel";

export const ViewMemberDetails = (props: {
  memberDetails: MemberDetailsModel;
  setEditDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">Member Details</h1>
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
          <div className="p-6 pt-0">
            <div className="flex justify-center mb-6">
              <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                <FaUser className="h-16 w-16 text-gray-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                <p>
                  {props.memberDetails?.firstname}{" "}
                  {props.memberDetails?.middlename}{" "}
                  {props.memberDetails?.lastname}
                </p>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Age</h3>
                <p>{props.memberDetails?.age}</p>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Birthdate</h3>
                <p>{props.memberDetails?.birthdate}</p>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                <p>{props.memberDetails?.gender}</p>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p>
                  {/* Dynamic classes for status */}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      props.memberDetails?.active ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    {props.memberDetails?.active ? "Active" : "Inactive"}
                  </span>
                </p>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Category</h3>
                <p>
                  {/* Dynamic classes for category */}
                  <span
                    className={`px-2 py-1 rounded-full text-xs  bg-blue-50`}
                  >
                    Water baptism
                  </span>
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => props.setEditDetails(true)}
                  className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  <FaPen className="h-4 w-4 mr-2" />
                  Edit Information
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Contact and Church Information Card (Tabs) */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2">
          <div dir="ltr" data-orientation="horizontal">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-center">
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
                  data-orientation="horizontal"
                  style={{ outline: "none" }}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="radix-:rs:-content-details"
                    data-state="active"
                    id="radix-:rs:-trigger-details"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state-active]:shadow-sm"
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="radix-:rs:-content-certificates"
                    data-state="inactive"
                    id="radix-:rs:-trigger-certificates"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    Certificates
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:rs:-trigger-details"
                id="radix-:rs:-content-details"
                className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                style={{}}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Address
                        </h4>
                        <p>{props.memberDetails?.address}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Email
                        </h4>
                        <p>{props.memberDetails?.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Phone
                        </h4>
                        <p>{props.memberDetails?.contactNo}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Church Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Join Date
                        </h4>
                        <p>{props.memberDetails?.joinDate}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Baptism Date
                        </h4>
                        <p>
                          {dayjs(props.memberDetails?.baptismDate).format(
                            "DD/MM/YYYY"
                          )}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Baptism Officiant
                        </h4>
                        <p>{props.memberDetails?.baptismOfficiant}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">
                    Department and Position
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Department
                      </h4>
                      <p>{props.memberDetails?.emergencyContactPerson}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Position
                      </h4>
                      <p>{props.memberDetails?.relationshipToContactPerson}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">
                    Emergency Contact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Name
                      </h4>
                      <p>{props.memberDetails?.emergencyContactPerson}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Relationship
                      </h4>
                      <p>{props.memberDetails?.relationshipToContactPerson}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Phone
                      </h4>
                      <p>{props.memberDetails?.emergencyContactNo}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:rs:-trigger-certificates"
                id="radix-:rs:-content-certificates"
                className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
