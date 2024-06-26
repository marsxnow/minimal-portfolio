import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
// Sidebar Component
const sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    // Sidebar
    <div className="sidebar scroll-smooth">
      {/* Sidebar Content when screen is smaller*/}
      <AiOutlineMenu
        onClick={handleSidebar}
        className="absolute top-4 right-4 z-[99] md:hidden "
      />
      {sidebar ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleSidebar}
            href="#intro"
            className="scroll-smooth w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-40 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleSidebar}
            href="#project"
            className="scroll-smooth w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-40 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleSidebar}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-40 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleSidebar}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-40 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      {/* Sidebar Button / Default mode*/}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#intro"
            className="rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover-scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover-scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>{" "}
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover-scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>{" "}
          <a
            href="#contact"
            className="scroll-smooth rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover-scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
