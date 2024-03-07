import React from "react";
import landingImg from "../assets/images/illustration-intro.png";
import landingBack from "../assets/images/bg-curvy-desktop.svg";

const Landing = () => {
  return (
    <section className="bg-[#1c2230] pt-48 ">
      <div className="container px-6 sm:px-0  mx-auto">
        <div className="animate-fadeOut flex gap-8 flex-col justify-center items-center  text-center">
          <img src={landingImg} alt="" className="size-fit" />
          <h1 className="text-2xl sm:text-5xl font-semibold">
            All your files in one secure location
            <br />
            accessible anywhere
          </h1>
          <p className="w-[600px] mx-auto max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            error porro id quas sapiente odit nam sequi dicta dolore fugit,
            distinctio amet repellat provident minus iste sunt magni officiis
            mollitia?
          </p>
          <a
            href="/"
            className="btn w-[280px] h-[60px] flex justify-center items-center font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
      <img src={landingBack} alt="" className=" w-full h-[200px]" />
    </section>
  );
};

export default Landing;
