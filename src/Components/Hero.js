import React from "react";
import {
  AiFillGithub,
  AiFillHtml5,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";
// import imgOne from "../images/WhatsApp Image 2023-09-17 at 16.24.23.jpeg";
import imgTwo from "../images/WhatsApp Image 2023-09-17 at 16.25.18.jpeg";
function Hero() {
  return (
    <div className="w-full  mx-auto max-w-7xl xsm:mx-w-xl mt-10 px-20 ">
      <h3 className="font-medium font-serif md:text-3xl xsm:text-xl xsm:mt-2 xsm:mx-auto  xsm:w-[100%] sm:w-[90%] md:w-[50%] lg:text-4xl lg:w-[35%]   ">
        Hi, I'm Dimgba David Front-end Developer Based in Nigeria
      </h3>
      <div className=" w-full max-w-5xl mx-auto xsm:flex xsm:flex-col-reverse lg:flex  lg:justify-evenly lg:flex-row   ">
        <div className=" mt-6  xsm:w-full lg:w-[50%]  ">
          <div className="  mt-10 lg:text-left  xsm:text-center">
            <p className="text-gray-500 mb-1  lg:text-left ">
              Welcome to My Portfolio
            </p>
            <p className="lg:w-[70%] lg:ml-[0] md:text-lg xsm:text-sm lg:text-sm xsm:w-[130%] sm:w-[120%] md:mx-auto xsm:ml-[-30px] sm:ml-[5] font-semibold md:w-[100%]   md:text-center lg:text-left ">
              Hello and thank you for visiting my portfolio! I'm excited to
              share with you a glimpse into my journey as a creative
              professional. Here, you'll find a curated collection of my work,
              showcasing my passion for Front-end Development and my dedication
              to pushing creative boundaries.
            </p>
          </div>
          <div className=" mt-5  xsm:text-center">
            <p className="text-gray-500 mb-2 md:text-center lg:text-left ">
              Who am i?
            </p>
            <p className="lg:w-[70%] lg:ml-[0] md:text-lg xsm:text-sm lg:text-sm xsm:w-[130%] sm:w-[120%] xsm:ml-[-30px] md:mx-auto sm:ml-[5] font-semibold  md:w-[100%] lg:text-left ">
              I am a Frontend Developer with a deep-seated love for HTML, CSS,
              JavaScript with Framework knowledge of react and tailwind With 1
              years of experience in the industry. My work is not just a job;
              it's an expression of my creativity and commitment to excellence.
              If i'm not coding,i love to play video games, watch movies and
              football ,also love to socialize.
            </p>
          </div>
          <div className="  xsm:text-center md:text-center lg:text-left mt-5 ">
            <p className="text-gray-500 mb-2 ">Contacts</p>
            <div className="  xsm:flex xsm:justify-center md:justify-center lg:justify-start xsm:mx-auto     ">
              <Link
                to="https://www.linkedin.com/in/dimgba-david-a74a3824a"
                className="  text-sm mr-2 font-semibold"
              >
                <AiFillLinkedin size={20} />
              </Link>
              <Link
                to="https://github.com/ODDIFIED"
                className="  text-sm mr-2 font-semibold"
              >
                <AiFillGithub size={20} />
              </Link>
              <Link
                to="https://wa.link/8zeow9"
                className=" text-sm font-semibold"
              >
                <AiOutlineWhatsApp size={20} />
              </Link>
            </div>
            <div className="  text-sm mt-2">
              <p>Lagos, Nigeria</p>
              <p>iamdheevee@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" xsm:w-[130%]  xsm:ml-[-30px] sm:ml-[-40px] md:w-[65%]  md:mx-auto lg:ml-0 lg:w-[50%]   xsm:mx-auto xsm:mt-10 md:mt-20 flex justify-center ease-in-out delay-300ms ">
          <div className=" w-[130%] sm:w-[100%] lg:w-[50%] xsm:h-[55vh] xsm:px-4  xsm:flex xsm:justify-center xsm:items-center   lg:h-[55vh] lg:flex lg:justify-center lg:items-center border  border-gray-300 rounded-[85px]">
            <img
              className="  xsm:h-[50vh]   lg:h-[50vh] rounded-[85px] "
              src={imgTwo}
              alt="myPhoto"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[100%]  md:text-center  mt-6 ">
        <h3 className="font-semibold text-sm md:text-center lg:text-center text-gray-500">
          Stacks
        </h3>
        <div className=" w-full mx-auto lg:flex  lg:justify-center lg:items-center lg:space-x-20 xsm:flex xsm:flex-row md:justify-evenly md:mt-2 ">
          <AiFillHtml5
            className=" xsm:mt-0 lg:mt-2  "
            size={70}
            color="orange"
          />
          <BiLogoCss3 className=" xsm:mt-0 lg:mt-2" size={70} color="blue" />
          <BiLogoJavascript
            className=" xsm:mt-0 lg:mt-2 text-yellow-400"
            size={70}
          />
          <BiLogoTailwindCss
            className=" xsm:mt-0 lg:mt-2 text-blue-500"
            size={70}
          />
          <FaBootstrap
            className=" xsm:mt-0 lg:mt-2 text-purple-700"
            size={70}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
