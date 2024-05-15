import React from "react";
import { FaTwitter, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    // Footer Section of the website
    <div className="py-5 text-center">
      {/*adding date and footercontent*/}
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Rax. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
