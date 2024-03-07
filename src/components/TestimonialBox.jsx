import React from "react";

const TestimonialBox = (props) => {
  return (
    <div className="bg-[#1c2230] rounded-sm">
      <div className="p-7">
        <p className=" mb-6 text-gray-200">{props.desc}</p>
        <div className="flex items-center">
          <img
            src={props.image}
            alt=""
            className="rounded-full w-[60px] h-[60px] mr-3"
          />
          <div>
            <h2>{props.name}</h2>
            <h3>{props.position}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
