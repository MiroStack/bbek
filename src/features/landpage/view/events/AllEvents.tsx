import { useEffect, useState } from "react";
import type { EventModel } from "../../../../datasource/models/Event/EventModel";
import EventRepo from "../../../../datasource/repositories/EventRepo";
import { motion } from "framer-motion";
import { IoMdFunnel } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarDays, FaClock, FaLocationDot } from "react-icons/fa6";
import dayjs from "dayjs";
import { JoinCard } from "../../components/JoinCard";
import { showErrorDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import { useAppDispatch } from "../../../../datasource/redux/staff/hooks/hooks";
export const AllEventsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [eventData, setEventDate] = useState<EventModel[]>([]);
  const [showSort, setShowSort] = useState(false);
  const [showJoinEvent, setShowJoinEvent] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [totalPage, setTotalPage] = useState(1);
  const [refresh, setIsRefreshing] = useState<boolean>(true);
  const handleJoinEvent = () => {
    setShowJoinEvent(!showJoinEvent);
  }
  const toggleSort = () => {
    setShowSort(!showSort);
  };
  useEffect(() => {
    if (refresh) {
      fetchEventData();
      setIsRefreshing(false);
    }
  });
  useEffect(() => {
    setTotalPage(Math.ceil((eventData[0]?.totalRows ?? 0) / 11));
  }, [eventData]);
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

  const fetchEventData = async () => {
    try {
      const res = await EventRepo.getAllEvent(query, pageNumber);
      console.log(res);
      setEventDate(res);
    } catch (e) { }
  };
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsRefreshing(true);
  }
  return (
    <div className="relative">

      {showJoinEvent &&
        (
          <JoinCard setJoinEvent={setShowJoinEvent} joinEvent={showJoinEvent} />
        )
      }

      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <motion.section className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
          <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold text-blue-500"
            >
              Events
            </motion.h2>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-700 mt-4 max-w-2xl text-center"
            >
              Our events are a time to worship, learn, and grow together as a
              family of faith. There’s something for everyone—come and be part
              of what God is doing.
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
                <input
                  type="text"
                  placeholder="Search events..."
                  onChange={handleQueryChange}
                  value={query}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative group">
                  <IoMdFunnel
                    className="text-gray-500 text-2xl cursor-pointer hover:text-blue-500 transition-colors "
                    onClick={toggleSort}
                  />
                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10  ${showSort ? "block" : "hidden"
                      }`}
                  >
                    <ul className="py-1">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={toggleSort}
                      >
                        Upcoming Evens
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={toggleSort}
                      >
                        Regular Schedule
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={toggleSort}
                      >
                        Yearly Events
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-5"
                style={{}}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {
                    eventData.map((event, index) => (
                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-3 flex flex-col">
                        <div className="w-full h-auto">

                          <img
                            src={`http://localhost:8081/bbek/event_image?eventName=${encodeURIComponent(event.eventName)}`} alt={event.eventName}
                            className="h-40 w-full object-cover"
                          />
                        </div>

                        <div className="flex items-center justify-center flex-grow">
                          <div className="flex flex-col justify-center mt-2">
                            <h3 className="text-xl font-bold mb-2">
                              {event.eventName}
                            </h3>
                            <div className="w-full h-auto flex gap-2 bottom-1">
                              <div className="w-auto flex items-center justify-center gap-2 text-xs bg-blue-500 text-white rounded-sm px-1">
                                <FaCalendarDays />
                                <span>{dayjs(event.eventStartDate).format("MMMM D, YYYY")}</span>
                              </div>

                              <div className="w-auto flex items-center justify-center gap-2 text-xs bg-blue-500 text-white rounded-sm  px-1">
                                <FaClock />
                                <span>{dayjs(event.eventStartDate).format("hh:mm A")}-{dayjs(event.eventEndDate).format("hh:mm A")}</span>
                              </div>

                              <div className="w-auto flex items-center justify-center gap-2 text-xs bg-blue-500 text-white rounded-sm">
                                <FaLocationDot />
                                <span>{event.eventLocation}</span>
                              </div>

                            </div>
                            <p className="text-gray-600 mb-2">
                              {event.description.length > 100 ? (
                                <>
                                  {event.description.substring(0, 100)}...
                                  <br />
                                  <Link
                                    to="/landpage/events/learn-more-event"
                                    state={{ eventModel: event }}
                                    className="text-blue-500 cursor-pointer">See more</Link>
                                </>
                              ) : event.description}
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
                              to="/landpage/events/learn-more-event"
                              state={{ eventModel: event }}
                            >
                              LEARN MORE
                            </Link>
                          </motion.button>
                          <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-400  w-36 h-12  text-white rounded-md text-sm  border border-gray-100"
                            onClick={handleJoinEvent}
                          >
                            JOIN US
                          </motion.button>
                        </div>
                      </div>
                    ))
                  }
                  {/* {end} */}
                </div>
                <div className="w-full p-4 flex items-center justify-center relative">
                  <button className="cursor-pointer"
                    onClick={() => {
                      if (pageNumber > 1) {
                        setPageNumber(pageNumber - 1);
                        setIsRefreshing(true);
                      } else {
                        sessionStorage.setItem("message", "No previous records available");
                        dispatch(showErrorDialog());
                      }
                    }}
                  >&laquo;</button>
                  <span className="mx-4">{pageNumber} of {totalPage}</span>
                  <button className="cursor-pointer"
                    onClick={() => {
                      if (pageNumber < totalPage) {
                        setPageNumber(pageNumber + 1);
                        setIsRefreshing(true);
                      } else {
                        sessionStorage.setItem("message", "No more records available");
                        dispatch(showErrorDialog());
                      }
                    }}
                  >&raquo;</button>

                  <div className="absolute right-4 flex items-center gap-2">
                    {
                      pages.map((page, index) => (
                        <span key={index} className={`p-1 ${pageNumber == page ? 'bg-green-200' : 'bg-gray-100'} w-7 text-center hover:cursor-pointer`}
                          onClick={() => {
                            if (totalPage < page) {
                              sessionStorage.setItem("message", "No more records available");
                              dispatch(showErrorDialog());
                            } else {
                              setPageNumber(page);
                              setIsRefreshing(true);

                            }

                          }}
                        >{page}</span>
                      ))

                    }

                  </div>
                </div>
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
      </div>
    </div>
  );
};
