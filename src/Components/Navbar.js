import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const handleNav = () => {
    setisOpen(!isOpen);
  };
  return (
    <div
      class=" w-[100%] max-w-7xl mx-auto  font-extrabold flex justify-between  py-4 border-t-0 border-r-0 border-l-0 border-b-0 
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
          <a href="work" class="text-sm font-mono">
            WORKS
          </a>
          <a href="work" class="text-sm font-mono">
            RESUME
          </a>
          <a href="work" class="text-sm font-mono">
            CONTACT
          </a>
        </div>
      </div>
      <div
        class="    text-white space-x-20 justify-between
         md:flex xlg:flex lg:flex sm:hidden xsm:hidden 
      "
      >
        <div className="flex space-x-1 ">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
      </div>
      <div className="  md:hidden lg:hidden xlg:hidden" onClick={handleNav}>
        {isOpen ? (
          <AiOutlineCloseCircle size={"25px"} color="white" />
        ) : (
          <AiOutlineMenu size={"25px"} color="white" />
        )}
      </div>
      <div
        className={
          isOpen
            ? " absolute w-[100%] h-[80%] border border-t-white border-t-2 border-r-0 border-l-0 right-0  top-0 mt-14 md:hidden xlg:hidden lg:hidden bg-black ease-linear duration-300ms "
            : "hidden"
        }
      >
        <div className="pt-10">
          <ul class="  border-b-2 border-white p-6 text-white text-2xl    font-mono">WORKS</ul>
          <ul class="  border-b-2 border-white p-6 text-white text-2xl font-mono">RESUME</ul>
          <ul class=" border-b-2 border-white p-6 text-white text-2xl font-mono">CONTACT</ul>
        </div>
        <div className="flex space-x-3  mx-[35%] pt-7">
          <AiFillLinkedin size={45} color="white" />
          <AiFillGithub size={45} color="white" />
          <AiFillInstagram size={45} color="white" />
          <AiFillTwitterCircle size={45} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
