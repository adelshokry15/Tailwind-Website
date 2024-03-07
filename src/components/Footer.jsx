import React from "react";
import GetStarted from "./GetStarted";
import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import MobIcon from "../assets/images/icon-phone.svg";
import gmailIcon from "../assets/images/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" pt-60 pb-10 bg-[#0c1524] relative">
      <div className="container mx-auto">
        <GetStarted />
        <div>
          <a href="/" className="mb-6 block">
            <img src={logo} alt="" className="mx-auto" />
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            <div className=" flex items-start">
              <img src={locationIcon} alt="" className="mr-2" />
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit totam culpa blanditiis molestiae, asperiores, alias
                necessitatibus dignissimos beatae vero cupiditate eaque atque ab
                officia consequuntur, ratione quae distinctio aperiam fuga!
              </p>
            </div>
            <div className=" flex justify-center">
              <ul className=" mx-auto">
                <li>
                  <h5>
                    <img src={MobIcon} alt="" className="mr-2 inline" />
                    +01212121212
                  </h5>
                </li>
                <li>
                  <h5>
                    <img src={gmailIcon} alt="" className="mr-2 inline" />
                    example@fylo.com
                  </h5>
                </li>
              </ul>
            </div>
            <div className="flex gap-10 justify-center">
              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="flex justify-center items-start gap-6">
              <span className="p-2 border-[1px] w-fit rounded-full hover:text-primary hover:border-primary cursor-pointer">
                <FaFacebook />
              </span>
              <span className="p-2 border-[1px] w-fit rounded-full hover:text-primary hover:border-primary cursor-pointer">
                <FaTwitter />
              </span>
              <span className="p-2 border-[1px] w-fit rounded-full hover:text-primary hover:border-primary cursor-pointer">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
