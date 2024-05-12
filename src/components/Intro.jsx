import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Intro() {
  return (
    <div
      id="intro"
      className="flex items-center justify-center flex-col text-center pb-6 m-auto"
    >
      <img
        className="w-full h-screen object-cover object-left"
        src="https://media.discordapp.net/attachments/1179276305729073232/1217525991224639649/20240313_103302.jpg?ex=663db1b0&is=663c6030&hm=fa14b142e79efdc5418f3f1bcf1781d0a8cec8157af2cd94f8b8cc9906c99359&format=webp&width=854&height=1138&"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700] m-auto h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
            Hey, Im Rax !
          </h1>
          <h2 className="textbase md:text-xl sm:text-3xl mb-3 font-medium flex">
            <TypeAnimation
              sequence={[
                "I am a student",
                1000,
                "I am an aspiring web developer",
                1000,
                "I am an aspiring software engineer",
                1000,
                "I am Mexican",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between max-w-[100px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
