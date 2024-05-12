import React from "react";
import Title from "./Title";
function Contact() {
  return (
    <div id="contact" className=" flex flex-col mb-10 mx-auto py-8">
      <div className="flex jusify-center items-center">
        <form
          action="https://getform.io/slug"
          method="POST"
          className="flex flex-col w-[75%] mx-auto"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-b-2 border-gray-400 mb-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-mb focus:outline-none"
          />
          <textarea
            name="message"
            id="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-mb focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            work with me :3
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
