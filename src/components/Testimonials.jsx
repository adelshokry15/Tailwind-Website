import React, { useState } from "react";
import p1 from "../assets/images/profile-1.jpg";
import p2 from "../assets/images/profile-2.jpg";
import p3 from "../assets/images/profile-3.jpg";
import qoute from "../assets/images/bg-quotes.png";
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: p1,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: p2,
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: p3,
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className=" pt-16 pb-56">
      <div className="container mx-auto relative p-7">
        <img
          src={qoute}
          alt=""
          className="w-[60] absolute left-0 top-0 -z-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testData.map((e, i) => (
            <TestimonialBox {...e} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
