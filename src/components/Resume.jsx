import React from "react";
import Title from "./Title";

function Resume() {
  return (
    // Resume Section of the website
    <div id="resume" className="flex flex-col justify-center items-center">
      <Title>Resume</Title>
      {/* Embedding the Resume PDF */}
      <iframe
        className="w-[90%] h-[720px] m-4"
        height="720"
        src="./img/Raxel_Resume.pdf"
      ></iframe>
    </div>
  );
}

export default Resume;
