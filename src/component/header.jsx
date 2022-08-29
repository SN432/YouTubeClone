import { HiMicrophone } from "react-icons/hi";
import { FaAlignJustify } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { TbVideoPlus } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
const Header = () => {
    return (
        <>
            <div className="z-50 flex justify-between sticky top-0 bg-green-200 mx-5 p-5 border-1 drop-shadow-md">
                <div className="flex items-center space-x-2">
                    <div><FaAlignJustify /></div>
                    <div><FiYoutube className="w-8 h-8 fill-red-500 ml-5" /></div>
                    <div className=" relative text-xl text-black font-bold ">YouTube <div className="absolute -top-2 -right-3 font-thin text-sm"><h4 >KH</h4></div></div>
                </div>
                <div className="flex items-center">
                    <input className="bg-gray-100 px-4 py-2 pr-10 " type="text" value="" placeholder="Search here " />
                    <button className="pl-3 w-10 h-10 bg-gray-100 border-l-2 border-gray-300 hover:bg-blue-200"><HiOutlineSearch /></button>
                    <button className="pl-2 w-9 h-10 bg-gray-100 border-l-2 border-gray-200 hover:bg-blue-200 rounded-full ml-2"><HiMicrophone /></button>
                </div>
                <div className="flex items-center space-x-3">
                    <div><TbVideoPlus className="w-7 h-7" /></div>
                    <div className="relative"><MdNotificationsNone className="w-7 h-7" />
                        <div className=" absolute top-0 -right-1 rounded-full bg-red-500 w-4 h-4 text-xs pl-1 text-white">3</div></div>
                    <div className="bg-purple-300 px-4 py-2 rounded-full">S</div>
                </div>
            </div></>
    );
}
export default Header;