import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const handleNav = () => {
    setisOpen(!isOpen);
  };
  return (
    <div
      class=" w-[100%] max-w-7xl mx-auto fixed top-0 font-extrabold flex justify-between  py-4 border-t-0 border-r-0 border-l-0 border-b-0 
     border border-black  items-center   xsm:px-7 md:px-20 lg:px-26
      bg-black  "
    >
      <div className="  max-w-xl  flex items-center  ">
        <h3 className="text-xl text-white font-semibold">
          ODDIF<span className="text-md">/</span>ED.
        </h3>
      </div>

      <div className="text-white">
        <div className="flex space-x-10 xsm:hidden sm:hidden md:flex">
          <Link to={"#About"} class="text-sm font-mono">
            About
          </Link>
          <Link to={"#works"} class="text-sm font-mono">
            Project
          </Link>
          <Link to={"#contact"} class="text-sm font-mono">
            Contact
          </Link>
        </div>
        <div className="  md:hidden lg:hidden xlg:hidden" onClick={handleNav}>
          {isOpen ? (
            <AiOutlineCloseCircle size={"25px"} color="white" />
          ) : (
            <AiOutlineMenu size={"25px"} color="white" />
          )}
        </div>
      </div>

      <div
        className={
          isOpen
            ? " absolute w-[100%] xsm:h-[65vh] sm:h-[60vh] bg-black border border-t-2 border-r-0 border-l-0 right-0  top-0 mt-14 md:hidden xlg:hidden lg:hidden left-[-100]  ease-in-out  duration-100 "
            : "hidden"
        }
      >
        <div className=" text-right pt-10">
          <Link to="#about">
            <ul
              onClick={handleNav}
              class="   border-b-2 border-white p-7 text-white text-2xl    font-mono"
            >
              About
            </ul>
          </Link>
          <Link to="#works">
            <ul
              onClick={handleNav}
              class="  border-b-2 border-white p-7 text-white text-2xl    font-mono"
            >
              Project
            </ul>
          </Link>
          <Link to="#contact">
            <ul
              onClick={handleNav}
              class="  border-b-2 border-white p-7 text-white text-2xl    font-mono"
            >
              Contact
            </ul>
          </Link>
        </div>
        <div className="flex  justify-end items-end space-x-2 pr-7 pt-7">
          <AiFillLinkedin size={30} color="white" />
          <AiFillGithub size={30} color="white" />
          <AiFillInstagram size={30} color="white" />
          <AiFillTwitterCircle size={30} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
