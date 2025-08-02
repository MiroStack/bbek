import { useEffect, useState } from "react";
import { EventsCard } from "../../components/EventsCard";
import type { EventModel } from "../../../models/EventModel";
import EventRepo from "../../../repositories/EventRepo";

export const AllEventsPage = () => {
  const [eventData, setEventDate] = useState<EventModel[]>([]);
  useEffect(() => {
    fetchEventData();
  }, []);
  const fetchEventData = async () => {
    try {
      const res = await EventRepo.getAllEvent();
      setEventDate(res);
    } catch (e) {}
  };
  return (
    <>
      <div className="w-screen h-auto items-center flex flex-col justify-center">
        <section className="relative w-100 h-[60vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60940904_644013782780677_9060964737684078592_n.jpg-2YMGA7eKGhc8nlFG4dusUjIzmk1HYF.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
              filter: "brightness(0.5)",
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Church Events
            </h1>
            <p className="text-xl md:text-2xl text-white font-light">
              Join us in worship and fellowship
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>
        {/* events card section */}
        <div className="h-auto mx-5 py-5 flex flex-col items-center justify-center gap-2 ">
          <main className="flex-1 bg-white">
            <section className="py-12 md:py-24 bg-gray-50">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900 animate-fade-in-up">
                  Church Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {/* cards */}

                  {
                    eventData.map((item, index)=>(
                        <EventsCard key={index} eventModel={item}/>
                    ))
                  }
                 
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
