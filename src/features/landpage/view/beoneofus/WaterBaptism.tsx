import { motion } from 'framer-motion'
import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BaptismRepo from '../../../../datasource/repositories/BaptismRepo';
import { useDispatch } from 'react-redux';
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from '../../../../datasource/redux/dialog/DialogSlice';
import type { RegistrationModel } from '../../../../datasource/models/User/RegistrationModel';
export const WaterBaptismPage = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [testimony, setTestimony] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);

    const dispatch = useDispatch();

    const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value);
    }
    const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }
    const handleTestimony = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTestimony(e.target.value);
    }
    const handlePreferredDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreferredDate(e.target.value);
    }
    const handleMiddleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMiddleName(e.target.value);
    }
    const handleBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthdate(e.target.value);
    }
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }
    const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            dispatch(showLoader());
            const model: RegistrationModel = {
                firstname: firstname,
                middlename: middleName,
                lastname: lastname,
                address: address,
                age: age,
                birthdate: birthdate,
                email: email,
                contactNo: phoneNumber,
                gender: gender,
                preferred_dt: preferredDate,
                testimony: testimony
            }
            const response = await BaptismRepo.submitBaptism(model);
            dispatch(hideLoader());
            if (response.statusCode == 200) {
                sessionStorage.setItem("message", response.message);
                dispatch(showSuccessDialog());
                setFirstname("");
                setLastname("");
                setEmail("");
                setPhoneNumber("");
                setTestimony("");
                setPreferredDate("");
                setAddress("");
                setBirthdate("");
                setMiddleName("");
                setAge(0);
                setGender("");

            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }

        } catch (e) {

        } finally {

        }
    }

    return (
        <>
            <div className="w-screen h-auto items-center flex flex-col justify-center  bg-gray-100">
                <main className="w-100 flex-1">
                    <motion.section
                        className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
                        <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
                            <motion.h2
                                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}
                                className="text-4xl font-bold text-blue-500">Water Baptism</motion.h2>
                            <motion.p
                                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
                                className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
                                Take the next step in your faith journey through water baptism, a public
                                declaration of your commitment to follow Jesus Christ.
                            </motion.p>

                            <div>
                                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} onClick={() => { window.location.href = "#learn-more" }} className="bg-blue-600 w-36 h-14 text-white  rounded-md text-sm mr-2 mt-2" >LEARN MORE</motion.button>
                                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} onClick={() => { window.location.href = "#register" }} className="bg-gray-400  w-36 h-14 rounded-md text-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">REQUEST TO JOIN</motion.button>
                            </div>
                        </div>
                    </motion.section>

                    {/* <section className="relative py-20 md:py-28 bg-gray-200">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                                Water Baptism
                            </h1>
                            <p
                                className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in"
                                style={{ animationDelay: '100ms' }}
                            >
                                Take the next step in your faith journey through water baptism, a public
                                declaration of your commitment to follow Jesus Christ.
                            </p>
                        </div>
                       
                    </section> */}
                    <motion.section
                        initial={{ backgroundColor: '#ffffff', opacity: 0 }}
                        whileInView={{
                            backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
                            opacity: 1,
                            transition: { ease: 'easeInOut', delay: 0.2 }
                        }}
                        className="py-16 bg-white" id='learn-more'>
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2
                                    className="text-3xl font-bold text-center mb-12 animate-fade-in"
                                    style={{ animationDelay: '200ms' }}
                                >
                                    What is Water Baptism?
                                </h2>
                                <div className="grid gap-8 md:grid-cols-2 mb-12">
                                    <div
                                        className="rounded-lg border bg-card text-card-foreground shadow-sm animate-fade-in-up"
                                        style={{ animationDelay: '300ms' }}
                                    >
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                                Biblical Foundation
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <p>
                                                Water baptism is an act of obedience symbolizing the believer's
                                                faith in a crucified, buried, and risen Savior. It is a public
                                                declaration of one's faith and commitment to Christ.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="rounded-lg border bg-card text-card-foreground shadow-sm animate-fade-in-up"
                                        style={{ animationDelay: '400ms' }}
                                    >
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                                Significance
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <p>
                                                Baptism illustrates Christ's death, burial, and resurrection.
                                                When you are immersed in water, you identify with Christ's death
                                                and burial, and when you come out of the water, you identify
                                                with His resurrection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-gray-50 p-6 rounded-lg mb-12 animate-fade-in"
                                    style={{ animationDelay: '500ms' }}
                                >
                                    <h3 className="text-xl font-bold mb-4">Who Should Be Baptized?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start transform transition-all duration-500 hover:translate-x-2">
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
                                                className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                                            >
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>
                                                Those who have accepted Jesus Christ as their personal Savior
                                            </span>
                                        </li>
                                        <li className="flex items-start transform transition-all duration-500 hover:translate-x-2">
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
                                                className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                                            >
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>
                                                Those who understand the meaning and significance of baptism
                                            </span>
                                        </li>
                                        <li className="flex items-start transform transition-all duration-500 hover:translate-x-2">
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
                                                className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                                            >
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>
                                                Those who are willing to publicly profess their faith in Christ
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="bg-blue-50 p-6 rounded-lg mb-12 animate-fade-in"
                                    style={{ animationDelay: '600ms' }}
                                >
                                    <h3 className="text-xl font-bold mb-4">Upcoming Baptism Dates</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center transform transition-all duration-500 hover:translate-x-2">
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
                                                className="lucide lucide-calendar h-5 w-5 text-blue-500 mr-3"
                                            >
                                                <path d="M8 2v4"></path>
                                                <path d="M16 2v4"></path>
                                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                <path d="M3 10h18"></path>
                                            </svg>
                                            <div>
                                                <p className="font-medium">Sunday, June 16, 2024</p>
                                                <p className="text-sm text-gray-600">
                                                    During the 9:00 AM service
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center transform transition-all duration-500 hover:translate-x-2">
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
                                                className="lucide lucide-calendar h-5 w-5 text-blue-500 mr-3"
                                            >
                                                <path d="M8 2v4"></path>
                                                <path d="M16 2v4"></path>
                                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                <path d="M3 10h18"></path>
                                            </svg>
                                            <div>
                                                <p className="font-medium">Sunday, August 18, 2024</p>
                                                <p className="text-sm text-gray-600">
                                                    During the 9:00 AM service
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center transform transition-all duration-500 hover:translate-x-2">
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
                                                className="lucide lucide-calendar h-5 w-5 text-blue-500 mr-3"
                                            >
                                                <path d="M8 2v4"></path>
                                                <path d="M16 2v4"></path>
                                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                <path d="M3 10h18"></path>
                                            </svg>
                                            <div>
                                                <p className="font-medium">Sunday, October 20, 2024</p>
                                                <p className="text-sm text-gray-600">
                                                    During the 9:00 AM service
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { ease: 'easeInOut', delay: 0.2 }
                        }}

                        className="py-16 bg-gray-50" id='register'>
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl mx-auto">
                                <h2
                                    className="text-3xl font-bold text-center mb-8 animate-fade-in"
                                    style={{ animationDelay: '700ms' }}
                                >
                                    Register for Baptism
                                </h2>
                                <div
                                    className="rounded-lg border bg-card text-card-foreground shadow-sm animate-fade-in-up"
                                    style={{ animationDelay: '800ms' }}
                                >
                                    <div className="flex flex-col space-y-1.5 p-6">
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            Baptism Registration Form
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Please fill out this form to register for an upcoming baptism
                                            service.
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <form className="space-y-4" onSubmit={handleSubmit}>
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
                                                        type='date'
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
                                                         {age=== 0 && (
                                                            <span className="text-red-500">*</span>
                                                        )}
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
                                                         {gender.trim()==="" && (
                                                            <span className="text-red-500">*</span>
                                                        )}
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                                        id="sex"
                                                        value={gender}
                                                        onChange={handleGender}
                                                        placeholder="Enter your Sex"
                                                        type='text'
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
                                                         {address.trim()==="" && (
                                                            <span className="text-red-500">*</span>
                                                        )}
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
                                                         {email.trim()==="" && (
                                                            <span className="text-red-500">*</span>
                                                        )}
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
                                                         {address.trim()==="" && (
                                                            <span className="text-red-500">*</span>
                                                        )}
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                                    id="phone"
                                                    value={phoneNumber}
                                                    onChange={handlePhoneNumber}
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="date"
                                                >
                                                    {"Preferered Baptism Date "}
                                                         {preferredDate.trim()==="" && (
                                                            <span className="text-red-500">*</span>
                                                        )}
                                                </label>
                                                <input
                                                    type="date"
                                                    id="preferredDate"
                                                    onChange={handlePreferredDate}
                                                    value={preferredDate}
                                                    placeholder="Select a date"
                                                    className="hover:cursor-pointer w-full p-2 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                    required
                                                />

                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="testimony"
                                                >
                                                    Your Testimony (Optional)
                                                </label>
                                                <textarea
                                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                                    id="testimony"
                                                    value={testimony}
                                                    onChange={handleTestimony}
                                                    placeholder="Share your journey to faith in Christ"
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="flex items-center p-6 pt-0">
                                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transform transition-all duration-300 hover:scale-105"
                                                    type='submit'>
                                                    Submit Registration
                                                </button>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.section>
                </main>
            </div>
        </>
    )
}