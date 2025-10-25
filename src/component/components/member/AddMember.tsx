import React, { useEffect, useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import {
  hideLoader,
  showErrorDialog,
  showLoader,
  showSuccessDialog,
} from "../../../datasource/redux/dialog/DialogSlice";
import { BaptismRepo } from "../../../datasource/repositories/BaptismRepo";
import {
  hideAddBaptism,
  hideUpdateBaptism,
} from "../../../datasource/redux/modules/service/BaptismSlice";
import type { RegistrationModel } from "../../../datasource/models/User/RegistrationModel";
import type { UserAndIdModel } from "../../../datasource/models/User/UserAndIdModel";
import type { AddBaptismRequestModel } from "../../../datasource/models/baptism/AddBaptismRequestModel";
import dayjs from "dayjs";
import { hideAddMember } from "../../../datasource/redux/modules/church_record/MemberSlice";
import { MemberRepo } from "../../../datasource/repositories/MemberRepo";

interface AddMemberRecordProps {
  setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddMemberRecord = ({ setIsRefresh }: AddMemberRecordProps) => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [baptismDate, setBaptismDate] = useState("");
  const [toggleOfficiantDropDown, setToggleOfficiantDropdown] =
    useState<boolean>(false);
  const [officiant, setOfficiant] = useState("");
  const [location, setLocation] = useState("");
  const [officiantList, setOfficiantList] = useState<UserAndIdModel[]>([]);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const baptismRepo = BaptismRepo();
  const memberRepo = MemberRepo();
  useEffect(() => {
    fetchOfficiant();
  }, []);

  const fetchOfficiant = async () => {
    try {
      dispatch(showLoader());
      const response = await baptismRepo.getOfficiants();
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        setOfficiantList(response.data);
      }
    } catch (e) {
    } finally {
    }
  };

  const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePreferredDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferredDate(e.target.value);
  };
  const handleMiddleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName(e.target.value);
  };
  const handleBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  useEffect(() => {
    if (!birthdate) return;

    const birth = new Date(birthdate);
    const today = new Date();
    if (birth == today || birth > today) {
      alert("Invalid Dates.");
      setBirthdate("");
      return;
    }

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    setAge(age);
  }, [birthdate]);

  useEffect(() => {
    const date1 = new Date(preferredDate);
    const date = new Date();
    if (date == date1 || date1 < date) {
      alert("Invalid Dates.");
      setPreferredDate("");
      return;
    }
  }, [preferredDate]);

  const handleOfficiantDropdown = () => {
    setToggleOfficiantDropdown(!toggleOfficiantDropDown);
  };

  const handleBaptismDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date1 = new Date(e.target.value);
    const date = new Date();
    if (date1 < date) {
      alert("Invalid Dates.");
      setBaptismDate("");
      return;
    }
    setBaptismDate(e.target.value);
  };
  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch(showLoader());
      const model: AddBaptismRequestModel = {
          firstname: firstname,
          middlename: middleName,
          lastname: lastname,
          birthdate: birthdate,
          age: age,
          sex: gender,
          address: address,
          email: email,
          contactNo: phoneNumber,
          baptismDate: baptismDate,
          baptismOfficiant: officiant,
          baptismOfficiantId: officiantList.find((item)=>item.fullName == officiant)?.id ?? 0,
          location: location,
          baptismStringDate: dayjs(baptismDate).format("MMMM D, YYYY h:mm A")
      };
      const response = await memberRepo.addMember(model);
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        sessionStorage.setItem("message", response.message);
        dispatch(showSuccessDialog());
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhoneNumber("");

        setPreferredDate("");
        setAddress("");
        setBirthdate("");
        setMiddleName("");
        setAge(0);
        setGender("");
        setLocation("");
        setOfficiant("");
        setBaptismDate("");
        dispatch(hideAddMember());
        setIsRefresh(true);
      } else {
        sessionStorage.setItem("message", response.message);
        dispatch(showErrorDialog());
      }
    } catch (e) {
    } finally {
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="h-[32rem] overflow-y-auto bg-white fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[500px]"
      >
        <div className="flex flex-col items-start gap-2  text-center sm:text-left">
          <h2
            id="radix-«r4o»"
            className="text-lg font-semibold leading-none tracking-tight"
          >
            Add Member Record
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="first-name"
            >
              {"First Name "}
              {firstname.trim() === "" && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
              id="first-name"
              value={firstname}
              onChange={handleFirstname}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="last-name"
            >
              {"Middle Name "}
              {middleName.trim() === "" && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
              id="middle-name"
              value={middleName}
              onChange={handleMiddleName}
              placeholder="Enter your middle name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="last-name"
            >
              {"Last Name "}
              {lastname.trim() === "" && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
              id="first-name"
              value={lastname}
              onChange={handleLastname}
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="birthdate"
            >
              {"Birthdate "}
              {birthdate.trim() === "" && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
              id="birthdate"
              value={birthdate}
              onChange={handleBirthDate}
              placeholder="Enter your birthdate"
              type="date"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="age"
            >
              {"Age "}
              {age === 0 && <span className="text-red-500">*</span>}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
              id="age"
              value={age}
              placeholder="Enter your age"
              type="number"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="gender"
            >
              {"Sex "}
              {gender.trim() === "" && <span className="text-red-500">*</span>}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
              id="sex"
              value={gender}
              onChange={handleGender}
              placeholder="Enter your Sex"
              type="text"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="address"
          >
            {"Address "}
            {address.trim() === "" && <span className="text-red-500">*</span>}
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
            id="address"
            value={address}
            onChange={handleAddress}
            placeholder="Enter your address"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            {"Email "}
            {email.trim() === "" && <span className="text-red-500">*</span>}
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
            type="email"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="phone"
          >
            {"Phone Number "}
            {address.trim() === "" && <span className="text-red-500">*</span>}
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
            id="phone"
            value={phoneNumber}
            maxLength={11}
            onChange={handlePhoneNumber}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="grid gap-1">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="baptism-date"
          >
            {"Baptism Date "}
            {baptismDate.trim() === "" && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <input
            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="new-name"
            name="baptism-date-input"
            value={baptismDate}
            type="dateTime-local"
            onChange={handleBaptismDate}
            required
          />
        </div>
        <div className="grid gap-2 relative">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="officiant"
          >
            {"Baptism Officiant "}
            {officiant.trim() === "" && <span className="text-red-500">*</span>}
          </label>
          <button
            type="button"
            onClick={handleOfficiantDropdown}
            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
            id="new-status"
          >
            <span className="">{officiant}</span>
            <div
              className={`${
                toggleOfficiantDropDown ? "" : "hidden"
              } absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}
            >
              <ul className="flex flex-col items-start px-3 w-100">
                {officiantList.map((officiant) => (
                  <li
                    key={officiant.id}
                    className="hover:text-green-500"
                    onClick={() => {
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
        <div className="grid gap-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="location"
          >
             {"Location "}
            {location.trim() === "" && <span className="text-red-500">*</span>}
          </label>
          <input
            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="location"
            type="text"
            name="location"
            value={location}
            onChange={handleLocation}
            required
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2"
            type="submit"
            name="create-marriage-confirm-btn"
          >
            Add Record
          </button>
        </div>
        <button
          type="button"
          onClick={() => dispatch(hideAddMember())}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
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
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </form>
    </>
  );
};
