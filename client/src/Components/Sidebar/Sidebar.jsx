import React from "react";
import { FaHome, FaHistory, FaClock, FaThumbsUp, FaFire, FaMusic, FaGamepad, FaNewspaper, FaRunning } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdVideoLibrary, MdPlaylistPlay } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import './Sidebar.css'

const Sidebar = ({SideBar}) => {


  return (
    <div className={`
      ${SideBar ? 'w-[25vw] md:w-[240px]' : 'w-0 px-0 overflow-hidden'} 
      h-screen py-4 bg-gradient-to-b from-gray-900 to-black text-white 
      flex flex-col px-3 overflow-y-auto scrollbar-hide scrollbar-bg-black
      transition-all duration-300 fixed md:relative z-40
      hidden lg:block
    `}>
      {/* First Section */}
      <div className="flex flex-col gap-3">
        <SidebarItem icon={<FaHome size={22} className="text-red-500" />} text="Home" />
        <SidebarItem icon={<SiYoutubeshorts size={22} className="text-blue-400" />} text="Shorts" />
        <SidebarItem icon={<MdOutlineSubscriptions size={22} className="text-green-400" />} text="Subscriptions" />
      </div>
      <hr className="my-3 border-gray-800" />

      {/* Library Section */}
      <div className="flex flex-col gap-3">
        <SidebarItem icon={<MdVideoLibrary size={22} className="text-purple-400" />} text="Library" />
        <SidebarItem icon={<FaHistory size={22} className="text-blue-400" />} text="History" />
        <SidebarItem icon={<MdPlaylistPlay size={22} className="text-yellow-400" />} text="Your Videos" />
        <SidebarItem icon={<FaClock size={22} className="text-green-400" />} text="Watch Later" />
        <SidebarItem icon={<FaThumbsUp size={22} className="text-red-400" />} text="Liked Videos" />
        <SidebarItem icon={<IoMdArrowDropdown size={22} className="text-gray-400" />} text="Show More" />
      </div>
      <hr className="my-3 border-gray-800" />

      {/* Subscription Channels */}
      <h2 className="text-gray-300 text-sm font-medium px-2 mb-2">Subscriptions</h2>
      <div className="flex flex-col gap-3">
        <SidebarItem icon={<div className="rounded-full w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500"></div>} text="Channel 1" />
        <SidebarItem icon={<div className="rounded-full w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500"></div>} text="Channel 2" />
        <SidebarItem icon={<div className="rounded-full w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500"></div>} text="Channel 3" />
        <SidebarItem icon={<IoMdArrowDropdown size={22} className="text-gray-400" />} text="Show More" />
      </div>
      <hr className="my-3 border-gray-800" />

      {/* Explore Section with Better Icons */}
      <h2 className="text-gray-300 text-sm font-medium px-2 mb-2">Explore</h2>
      <div className="flex flex-col gap-3">
        <SidebarItem icon={<FaFire size={22} className="text-red-500" />} text="Trending" />
        <SidebarItem icon={<FaMusic size={22} className="text-blue-400" />} text="Music" />
        <SidebarItem icon={<FaGamepad size={22} className="text-green-400" />} text="Gaming" />
        <SidebarItem icon={<FaNewspaper size={22} className="text-yellow-400" />} text="News" />
        <SidebarItem icon={<FaRunning size={22} className="text-purple-400" />} text="Sports" />
      </div>
    </div>
  );
};

// Reusable Sidebar Item Component
const SidebarItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800/80 rounded-lg cursor-pointer transition-all duration-200">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default Sidebar;