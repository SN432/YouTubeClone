import { HiHome } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiCuboid } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
const SideBar = () => {
    return (
        <>
            <div className=" overflow-auto h-screen pb-5 w-48 mr-10 bg-green-300 space-y-20 pl-3 pt-3">
                <div className="flex items-end space-x-3">
                    <HiHome className="w-6 h-7 " />
                    <h3 className="font-semibold  text-gray-600">Home</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <MdOutlineExplore className="w-6 h-7" />
                    <h3 className="font-semibold  text-gray-600">Explore</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <MdOutlineSubscriptions className="w-6 h-7" />
                    <h3 className="font-semibold  text-gray-600">Subscription</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <BiCuboid className="w-6 h-7" />
                    <h3 className="font-semibold  text-gray-600">Short</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <MdOutlineVideoLibrary className="w-6 h-7" />
                    <h3 className="font-semibold  text-gray-600">Library</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <BiHistory className="w-6 h-7" />
                    <h3 className="font-semibold text-gray-600">History</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <MdOndemandVideo className="w-6 h-7" />
                    <h3 className="font-semibold text-gray-600">Your videos</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <BiTime className="w-6 h-7" />
                    <h3 className="font-semibold text-gray-600">Watch later</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <BiLike className="w-6 h-7" />
                    <h3 className="font-semibold text-gray-600">Liked Video</h3>
                </div>
                <div className=" flex items-end space-x-3">
                    <FiChevronDown className="w-6 h-7" />
                    <h3 className="font-semibold text-gray-600">Show more</h3>
                </div>
            </div></>
    );
}
export default SideBar;