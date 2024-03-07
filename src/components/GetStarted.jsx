import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-[#1c2230] px-3 md:px-12 pt-14 pb-10 absolute top-[0] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
      <h3 className="text-4xl mb-3 font-semibold">Get early access today</h3>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eum{" "}
        cumque suscipit, distinctio id exercitationem?
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
        <input
          type="text"
          className="min-h-9 rounded-3xl px-6 focus:outline-none grow text-black w-[420px]"
        />
        <a
          href=""
          className="btn h-[50px] flex justify-center items-center px-6"
        >
          Get Started For Free
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
