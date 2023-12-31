import React from "react";

const Contact = () => {
  return (
    <div id="contact"
      className=" w-full  xsm:max-w-sm md:max-w-4xl mx-auto mt-28 "
      
    >
      <h2 className="uppercase xsm:text-3xl md:text-4xl  font-bold ">
        Contact
      </h2>
      <div>
        <hr className=" xsm:w-[10%] lg:w-[2%] mx-auto mt-3 h-1 bg-black rounded-md"></hr>
      </div>
      <div>
        <p className=" w-full xsm:w-[90%] lg:w-[60%] mx-auto mt-5 pb-5 font-semibold font-sans">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/01048347-0935-4a87-b401-1e39685aa3cc"
        className="flex flex-col bg-gray-400 shadow-md md:px-5 lg:px-7  xsm:px-2 mt-5 xsm:w-[85%] sm:w-[95%] md:w-[70%] xsm:h-[92vh] sm:h-[90vh] md:h-[67vh] lg:h-[110vh] mx-auto rounded-lg "
      >
        <div className=" mt-10 flex flex-col justify-start items-start px-4">
          <label className="pb-2 text-white font-semibold">Name</label>
          <input
            className="w-full bg-white p-5"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className=" mt-5 flex flex-col justify-start items-start px-4">
          <label className=" pb-2 text-white font-bold">Email</label>
          <input
            className="w-full bg-white p-5"
            type="text"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className=" mt-5 flex flex-col justify-start items-start px-4">
          <label className=" pb-2 text-white font-bold">Message</label>
          <textarea
            className="w-full"
            rows={"10"}
            placeholder="  Leave a message"
          />
        </div>

        <button className="w-[90%] mx-auto border border-black bg-black text-white py-2 px-4 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
