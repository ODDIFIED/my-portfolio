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
        Dimgba David Chisom Front-end Developer Based in Nigeria
      </h3>
      <div className="w-100 flex justify-evenly mx-auto md:mt-5 lg:mt-20 xsm:mt-5 xsm:flex-col lg:flex-row   ">
        <div className="w-[30%] mt-6  xsm:w-full lg:w-[40%]  ">
          <div className="  lg:text-left  xsm:text-center">
            <p className="text-gray-500 mb-1  lg:text-left ">
              Welcome to My Portfolio
            </p>
            <p className="lg:w-[70%] lg:ml-[0] md:text-sm xsm:text-sm xsm:w-[130%] sm:w-[120%] md:mx-auto xsm:ml-[-30px] sm:ml-[5] font-semibold md:w-[90%]   md:text-center lg:text-left ">
              Hello and thank you for visiting my portfolio! I'm excited to
              share with you a glimpse into my journey as a creative
              professional. Here, you'll find a curated collection of my work,
              showcasing my passion for Front-end Development and my dedication
              to pushing creative boundaries.
            </p>
          </div>
          <div className=" mt-10  xsm:text-center">
            <p className="text-gray-500 mb-2 md:text-center lg:text-left ">
              Who am i?
            </p>
            <p className="lg:w-[70%] lg:ml-[0] md:text-sm xsm:text-sm xsm:w-[130%] sm:w-[120%] xsm:ml-[-30px] md:mx-auto sm:ml-[5] font-semibold  md:w-[90%] lg:text-left ">
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
                to="https://linkedin.com/in/dimgba-david-a74a3824a"
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
        <div className=" w-[40%] md:w-[60%] xsm:w-[100%] xsm:mt-10 lg:w-[30%]  xsm:mx-auto lg:ml-7  rounded-[85px]  lg:h-[70vh] md:h-[60vh] flex place-items-center px-4 py-3 border border-gray-200 ">
          <img
            className="h-[80vh] xsm:h-[55vh] lg:h-[65vh]    rounded-[85px] "
            src={imgTwo}
            alt="myPhoto"
          />
        </div>
        <div className="lg:w-[30%]  md:text-center  mt-6 ">
          <h3 className="font-semibold text-xl md:text-center lg:text-right text-gray-500">
            Stacks
          </h3>
          <div className=" w-full lg:flex lg:flex-col lg:justify-end lg:items-end xsm:flex xsm:flex-row md:justify-evenly md:mt-2 ">
            <AiFillHtml5 className=" xsm:mt-0 lg:mt-6  " size={70} color="orange" />
            <BiLogoCss3 className=" xsm:mt-0 lg:mt-6" size={70} color="blue" />
            <BiLogoJavascript className=" xsm:mt-0 lg:mt-6 text-yellow-400" size={70} />
            <BiLogoTailwindCss className=" xsm:mt-0 lg:mt-6 text-blue-500" size={70} />
            <FaBootstrap className=" xsm:mt-0 lg:mt-6 text-purple-700" size={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
