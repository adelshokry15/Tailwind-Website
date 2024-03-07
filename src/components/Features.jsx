import React, { useRef, useState } from "react";
import FeatureBox from "./FeatureBox";
import img1 from "../assets/images/icon-access-anywhere.svg";
import img2 from "../assets/images/icon-security.svg";
import img3 from "../assets/images/icon-collaboration.svg";
import img4 from "../assets/images/icon-any-file.svg";
import { useEffect } from "react";

const Features = () => {
  const feat = useRef();
  const [items, setItems] = useState([
    {
      icon: img1,
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: img2,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: img3,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: img4,
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (
          window.scrollY >
          feat.current.offsetTop - feat.current.offsetHeight
        ) {
          Array.from(feat.current.children).forEach((b) => {
            b.classList.add("animate-fadeBox");
            b.classList.add("opacity-100");
          });
        }
      },
      []
    );
  }, []);
  return (
    <section className="py-7">
      <div className="container mx-auto">
        <div ref={feat} className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
          {items.map((e, i) => (
            <FeatureBox {...e} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
