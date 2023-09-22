import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full xsm:max-w-7xl bg-black xsm:h-[55vh] sm:h-[57vh] md:h-[33vh] lg:h-[38vh] xsm:px-0 md:px-10  mt-14   text-white">
      <div className=" xsm:w-[90%] md:w-[90%] md:pt-20 xsm:pt-16  mx-auto xsm:flex xsm:justify-center  xsm:flex-col-reverse lg:pt-10 md:flex md:flex-row md:justify-center md:place-items-center">
        <div className=" xsm:w-[100%] w-[50%] text-left">
          <h3 className=" xsm:mt-16 md:mt-0 uppercase text-sans text-xl font-bold">
            Dimgba David
          </h3>
          <p className=" xsm:w-[100%] md:w-[75%] lg:w-[60%] font-light pt-3">
            Thank you for visiting my portfolio! I'm excited to share with you a
            glimpse into my journey
          </p>
        </div>
        <div className=" md:w-[50%] xsm:w-[90%] xsm:pt-1 xsm:text-left md:pt-0 md:text-right">
          <p className="uppercase text-xl text-sans font-bold">Socials</p>
          <div className="w-full xsm:flex xsm:justify-start md:flex md:justify-end mt-4 space-x-3  ">
            <Link to="https://www.linkedin.com/in/dimgba-david-a74a3824a">
              <AiFillLinkedin size={30} color="white" />
            </Link>
            <Link to="https://github.com/ODDIFIED">
              <AiFillGithub size={30} color="white" />
            </Link>
            <Link to="https://twitter.com/blackboy0dd">
              <AiFillTwitterCircle size={30} color="white" />
            </Link>
          </div>
        </div>
      </div>
      <>
        <hr className=" xsm:mt-16 md:mt-16 lg:mt-14 xsm:text-gray-400"></hr>
      </>
      <div className=" xsm:mt-3 md:mt-6">
        <p className="flex justify-center space-x-1 items-center text-xs">
          <span>
            <FaRegCopyright />
          </span>
          Copyright 2023. Made by <span className="font-bold">ODDIFIED</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
