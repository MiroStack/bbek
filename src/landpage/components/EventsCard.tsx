import type { EventModel } from "../../models/EventModel";
import PlaceHolder from "../../assets/img/image.png"
type EventCardProps = {
  eventModel: EventModel;
};
export const EventsCard: React.FC<EventCardProps> = ({ eventModel }) => {
  console.log(eventModel);
  return (
    <>
      <div
        className="border text-card-foreground overflow-hidden h-full flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up"
        style={{ animationDelay: "0ms" }}
      >
        <div className="aspect-video relative bg-gray-200 overflow-hidden">
          <img
            alt="Soulwinning/Evangelism"
            className="w-full h-full object-cover"
            src={`http://localhost:8081/bbek/event_image?eventName=${encodeURIComponent(
              eventModel.eventName
            )}`}
            // src={PlaceHolder}
            onError={(e) => {
              console.log("Image failed to load, falling back to placeholder.");
              e.currentTarget.onerror = null;
              e.currentTarget.src = PlaceHolder;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            Couples Banquet
          </h3>
          <div className="flex items-center text-gray-500 mb-2">
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
              className="lucide lucide-calendar h-4 w-4 mr-2"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span className="text-sm">Every Second week of February</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            A special evening for couples to celebrate love and strengthen
            marriages through fellowship and Biblical teaching.
          </p>
          <div className="mt-auto">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
              href="/events/couples-banquet"
            >
              Learn More
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
                className="lucide lucide-arrow-right h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
