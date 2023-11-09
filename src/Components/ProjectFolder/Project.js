import React from "react";
import { WebData } from "../../Data";
import WebCard from "./WebCard";

function Project() {
  return (
    <div className="w-full xsm:max-w-xs  md:max-w-6xl mx-auto mt-40" id="works">
      <h2 className="uppercase text-4xl  font-bold   ">Projects</h2>
      <div>
        <hr className=" xsm:w-[10%] lg:w-[2%] mx-auto mt-3 h-1 bg-black rounded-md"></hr>
      </div>
      <p className=" xsm:w-[90%] xsm:mx-auto xsm:text-sm md:text-xl lg:text-xl font-semibold mt-4">
        Here you will find some of the personal projects I created
      </p>
      <div>
        <div className="md:grid md:grid-cols-3 ">
          {WebData.map((item) => {
            return <WebCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
