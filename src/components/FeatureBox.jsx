import React, { useEffect, useRef } from "react";

const FeatureBox = (props) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 mb-8 text-center opacity-0">
      <img src={props.icon} alt="" />
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <p className="font-medium w-[360px] text-sm">{props.desc}</p>
    </div>
  );
};

export default FeatureBox;
