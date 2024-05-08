import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Hey, Im Rax !
      </h1>
      <p className="textbase md:text-xl mb-3 font medium">
        I am working on being a software engineer and web developer.
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        This is my minimalistic website
      </p>
    </div>
  );
}

export default Intro;