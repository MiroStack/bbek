import { FaPlay } from "react-icons/fa6";
export const WatchLive = () => {
  return (
    <div className="fixed bottom-10 right-1 w-36 h-20 bg-card shadow-md rounded-md cursor-pointer p-2">
      <div className="h-full w-full flex flex-col justify-center items-center bg-gray-900">
        <FaPlay className="text-red-600 text-xs"/>
        <p className="text-white text-xs">Watch Live</p>
      </div>
    </div>
  );
};
