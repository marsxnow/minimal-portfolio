import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Intro() {
  return (
    <div
      id="intro"
      className="flex items-center justify-center flex-col text-center pb-6 m-auto"
    >
      <img
        className="w-full h-screen object-cover object-left"
        src="./img/lightskin.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700] m-auto h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
            Hey, Im Rax !
          </h1>
          <h2 className=" md:text-xl sm:text-xl mb-3 font-medium flex">
            <TypeAnimation
              sequence={[
                "I am a student at CSUF,",
                1000,
                "I am a aspiring web developer,",
                1000,
                "I am a aspiring software engineer,",
                1000,
                "I am alwasys learning new things!",
                1000,
                "Check out my work below!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between max-w-[100px] w-full mt-2">
            <a href="https://twitter.com/newpateks" target="_blank">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/marsxnow" target="_blank">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/raxel-ortiz-1958b526b/"
              target="_blank"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
