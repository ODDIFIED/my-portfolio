import React from "react";
import { Link } from "react-router-dom";

const WebCard = ({ item }) => {
  const { url, img, desc, html, css, js, tool } = item;
  return (
    <div className=" w-[90%] md:w-[70%]  mt-10  mb-16 mx-auto ">
      <div className="border border-gray-300  md:w-[100%] lg:w-[70%] lg:mx-auto object-cover  ">
        <img src={img} alt={desc} />
      </div>
      <div>
        <p className=" mt-3 mb-5 xsm:text-xl font-sans font-semibold">{desc}</p>
        <Link
          to={url}
          className="border border-black rounded-xl hover:bg-black hover:text-white xsm:p-2  "
        >
          Visit Website
        </Link>
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default WebCard;
