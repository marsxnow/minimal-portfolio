import React from "react";
import { FaTwitter, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Rax. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
