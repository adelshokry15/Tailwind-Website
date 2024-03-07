import React, { useEffect, useRef } from "react";
import productiveImg from "../assets/images/illustration-stay-productive.png";
import iconArr from "../assets/images/icon-arrow.svg";

const StayProductive = () => {
  const stayLeft = useRef();
  const stayRight = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >
        stayLeft.current.offsetTop - stayLeft.current.parentElement.offsetHeight
      ) {
        stayLeft.current.classList.add("animate-stayLeft");
        stayLeft.current.classList.add("opacity-100");
        stayRight.current.classList.add("animate-stayRight");
        stayRight.current.classList.add("opacity-100");
      }
    });
  }, []);
  return (
    <section className=" py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center justify-between gap-y-7 gap-x-4">
        <div ref={stayLeft} className="opacity-0">
          <img src={productiveImg} alt="" />
        </div>
        <div ref={stayRight} className=" opacity-0">
          <h3 className="font-medium text-[35px] leading-8 mb-4">
            Stay roductive,
            <br />
            wherever you are
          </h3>
          <p className="mb-3 tracking-[0.8px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ad inventore beatae. Repellat, suscipit nihil eligendi ratione sed
            quod accusantium, velit odio fugiat exercitationem accusamus
            voluptates doloribus nulla saepe. Libero?
          </p>
          <p className="mb-3 tracking-[0.8px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ad inventore beatae. Repellat, suscipit nihil eligendi ratione sed
            quod accusantium, velit odio fugiat exercitationem accusamus
            voluptates doloribus nulla saepe. Libero?
          </p>
          <a
            href="/"
            className="text-primary hover:text-[#42b0d1] border-b-2 border-primary border-solid transition-colors duration-200 pb-[5px] flex items-center gap-2 w-fit"
          >
            See how fylo works
            <img
              className=" w-[20px] h-[20px] object-contain animate-moveRight"
              src={iconArr}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
