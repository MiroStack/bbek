import type { MinistryModel } from "../../../datasource/models/Ministry/MinistryModel";
import PlaceHolder from "../../../assets/img/image.png"
type MinistryCardProps = {
  ministryModel: MinistryModel;
};
export const MinistriesCard: React.FC<MinistryCardProps> = ({
  ministryModel,
}) => {
  console.log("Placeholder image path:", PlaceHolder);
  return (
    <>
      <div className="rounded-lg text-card-foreground overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
        <div className="h-64 overflow-hidden">
          <img
            alt="Soulwinning/Evangelism"
            className="w-full h-full object-cover"
            src={`http://localhost:8081/bbek/ministry_image?ministryName=${encodeURIComponent(
              ministryModel.ministryName
            )}`}
            // src={PlaceHolder}
            onError={(e) => {
               console.log("Image failed to load, falling back to placeholder.");
              e.currentTarget.onerror = null; 
              e.currentTarget.src = PlaceHolder;
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {ministryModel.ministryName}
          </h3>
          <div className="flex items-center text-gray-600 mb-4">
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
            <span className="text-sm">{ministryModel.schedule}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {ministryModel.description}
          </p>
        </div>
        <div className="flex items-center p-6 px-6 pb-6 pt-0">
          <div className="flex gap-3 w-full">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
              href="/ministries/evangelism"
            >
              Learn More
            </a>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 flex-1 bg-blue-600 hover:bg-blue-700 text-white">
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
                className="lucide lucide-mail mr-2 h-4 w-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Join Ministry
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
