import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import "../styles/SocialMedia.css";
export const SocialMediaGroups = () => {
    return (
        <div className="h-auto w-auto hidden lg:block lg:fixed  right-5 top-1/2 -translate-y-1/2 z-50">
             <ul className="flex flex-col gap-2">
                <li className="cursor-pointer socials text-lg p-2 hover:p-3 text-blue-500"><FaFacebookF /></li>
                <li className="cursor-pointer socials text-lg p-2 hover:p-3 text-pink-500"><FaInstagram /></li>
                <li className="cursor-pointer socials text-lg p-2 hover:p-3 text-red-500"><FaYoutube /></li>
                <li className="cursor-pointer socials text-lg p-2 hover:p-3 text-black"><FaEnvelope /></li>
             </ul>
        </div>
    );
}