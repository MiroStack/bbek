import { useEffect, useState } from "react";
import { JoinUsSection } from "../../components/JoinUsSection";
import { MinistriesCard } from "../../components/MinistriesCard";
import type { MinistryModel } from "../../../../datasource/models/Ministry/MinistryModel";
import { MinistryRepo } from "../../../../datasource/repositories/MinistryRepo";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdFunnel } from "react-icons/io";
import { FaCalendarDays, FaClock, FaLocationDot } from "react-icons/fa6";
import { JoinCard } from "../../components/JoinCard";
import {
  hideLoader,
  showErrorDialog,
  showLoader,
  showSuccessDialog,
} from "../../../../datasource/redux/dialog/DialogSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../datasource/redux/modules/hooks/hooks";
import { Pagination } from "../../../../component/components/pagination/Pagination";
import { MemberRepo } from "../../../../datasource/repositories/MemberRepo";
import type { DepartmentModel } from "../../../../datasource/models/member/DepartmentModel";
import { Loader } from "../../components/Loader";
import { TextFormatter } from "../../../../util/TextFormatter";

export const AllMinistries = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { departmentId } = useParams();
  const dialogs = useAppSelector((state) => state.dialog);
  const ministryRepo = MinistryRepo();
  const [ministryData, setMinistryData] = useState<MinistryModel[]>([]);
  const [showJoinEvent, setShowJoinEvent] = useState<boolean>(false);
  const [showSort, setShowSort] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [totalPage, setTotalPage] = useState(1);
  const [refresh, setIsRefreshing] = useState<boolean>(true);
  const [isMemberLandPage, setIsMemberLandpage] = useState<boolean>(false);
  const memberRepo = MemberRepo();
  const [departmentList, setDepartmentList] = useState<DepartmentModel[]>([]);

  const handleJoinEvent = () => {
    setShowJoinEvent(!showJoinEvent);
  };
  const toggleSort = () => {
    setShowSort(!showSort);
  };

  useEffect(() => {
    try {
      getAllMinistryList();
      fetchDepartmentList();
      const isMember: boolean = sessionStorage.getItem("isMember") === "true";
      setIsMemberLandpage(isMember);
      setIsRefreshing(false);
    } catch (e) {
      console.log(e);
    }
  }, [departmentId, pageNumber]);
  useEffect(() => {
    setTotalPage(Math.ceil((ministryData[0]?.totalRows ?? 0) / 11));
  }, [ministryData]);
  useEffect(() => {
    const maxVisible = 5; // how many page buttons you want to show
    let start = Math.max(1, pageNumber - Math.floor(maxVisible / 10));
    let end = start + maxVisible - 1;

    if (end > totalPage) {
      end = totalPage;
      start = Math.max(1, end - maxVisible + 1);
    }

    const newPages = [];
    for (let i = start; i <= end; i++) {
      newPages.push(i);
    }
    setPages(newPages);
    console.log(pageNumber);
  }, [pageNumber, totalPage]);
  const getAllMinistryList = async () => {
    dispatch(showLoader());
    let data: any = "";
    switch (departmentId) {
      case "1":
        data = await ministryRepo.getAllLadies(query, pageNumber);
        break;
      case "2":
        data = await ministryRepo.getAllMen(query, pageNumber);
        break;
      case "3":
        data = await ministryRepo.getYoungPeople(query, pageNumber);
        break;

      default:
        data = await ministryRepo.getUserMinistries(query, pageNumber);
        if (data.statusCode === 200) {
          setMinistryData(data.data);
          dispatch(hideLoader());
          return;
        }
        break;
    }
    dispatch(hideLoader());
    setMinistryData(data);
  };

  const fetchDepartmentList = async () => {
    try {
      dispatch(showLoader());

      const response = await memberRepo.departments();
      dispatch(hideLoader());

      if (response.statusCode == 200) {
        setDepartmentList(response.data);
      }
    } catch (e) {}
  };

  const joinMinistry = async (ministryId: number) => {
    try {
      dispatch(showLoader());
      const response = await ministryRepo.joinMinistry(ministryId);
      console.log(response);
      if (response.statusCode === 200) {
        sessionStorage.setItem("message", response.message);
        dispatch(showSuccessDialog());
      }
      dispatch(hideLoader());
    } catch (e) {}
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsRefreshing(true);
  };
  return (
    <>
      {showJoinEvent && (
        <JoinCard setJoinEvent={setShowJoinEvent} joinEvent={showJoinEvent} />
      )}

      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <motion.section className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
          <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold text-blue-500"
            >
              {departmentList.find((dept) => dept.id === Number(departmentId))
                ?.departmentName ??
                `${isMemberLandPage ? "My Ministry" : "All Ministries"}`}
            </motion.h2>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-700 mt-4 max-w-2xl text-center"
            >
              Our ministries are dedicated to meeting spiritual and practical
              needs, helping people grow in faith, and sharing God’s love in our
              community
            </motion.p>
          </div>
        </motion.section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div
              dir="ltr"
              data-orientation="horizontal"
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between gap-2">
                <button></button>
                <input
                  type="text"
                  placeholder="Search minitries..."
                  value={query}
                  onChange={handleQueryChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative group">
                  <IoMdFunnel
                    className="text-gray-500 text-2xl cursor-pointer hover:text-blue-500 transition-colors "
                    onClick={toggleSort}
                  />
                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10  ${
                      showSort ? "block" : "hidden"
                    }`}
                  >
                    <ul className="py-1">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={toggleSort}
                      >
                        Sort By Schedule
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={toggleSort}
                      >
                        Sort By Name
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-5">
                <div className="grid grid-cols-1  gap-6">
                  {ministryData.map((ministryData, index) => (
                    <div
                      key={index}
                      className="rounded-lg border bg-card text-card-foreground shadow-sm p-3 flex flex-col"
                    >
                      <div className="w-full h-auto">
                        <img
                          className="object-cover w-full h-60 rounded-t-lg"
                          src={`http://localhost:8081/bbek/ministry_image?ministryName=${encodeURIComponent(
                            ministryData.ministryName
                          )}`}
                          alt={ministryData.ministryName}
                        />
                      </div>

                      <div className="w-100 flex flex-grow p-2">
                        <div className="flex flex-col justify-center mt-2">
                          <h3 className="text-xl font-bold mb-2">
                            {ministryData.ministryName}
                          </h3>
                          <div className="w-full h-auto flex gap-2 bottom-1">
                            <div className="w-auto flex items-center justify-center gap-2 text-xs bg-blue-500 text-white rounded-sm px-1">
                              <FaCalendarDays />
                              <span>{ministryData.schedule}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">
                            {ministryData.description.length > 80 ? (
                              <>{ministryData.description}</>
                            ) : (
                              ministryData.description
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-center gap-3 mt-2">
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="bg-blue-600 w-36 h-12  text-white  rounded-md text-sm "
                        >
                          <Link
                            className="hover:bg-transparent hover:text-white"
                            to="/landpage/ministries/learn-more-ministry"
                            state={{ ministryModel: ministryData }}
                          >
                            LEARN MORE
                          </Link>
                        </motion.button>
                        {departmentId == "0" ? null : (
                          <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-400  w-36 h-12  text-white rounded-md text-sm  border border-gray-100"
                            onClick={() => {
                              isMemberLandPage
                                ? joinMinistry(ministryData.id)
                                : handleJoinEvent();
                            }}
                          >
                            JOIN US
                          </motion.button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination
                  pages={pages}
                  pageNumber={pageNumber}
                  totalPage={totalPage}
                  setPageNumber={setPageNumber}
                  setRefresh={setIsRefreshing}
                  setPages={setPages}
                />
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-«r0»-trigger-regular"
                id="radix-«r0»-content-regular"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-«r0»-trigger-yearly"
                id="radix-«r0»-content-yearly"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
        </section>
        <motion.section
          initial={{ backgroundColor: "#ffffff", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { ease: "easeInOut", delay: 0.2 },
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="py-16 bg-white text-black"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              We invite you to be a part of our church family. Come worship with
              us and experience the love of Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-400 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-full px-8"
                onClick={() => {
                  navigate("/landpage/beoneofus/waterbaptism");
                }}
              >
                Become a Member
              </button>
            </div>
          </div>
        </motion.section>

        {/* <JoinUsSection /> */}
      </div>
    </>
  );
};
