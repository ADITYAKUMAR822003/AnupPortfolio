/** @format */

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Media = () => {
  const linkedinOpen = () => {
    window.open("https://www.linkedin.com/in/anup-nadgiri", "_blank");
  };
  const facebookOpen = () => {
    window.open("https://www.facebook.com/share/4MPQdRwVkDogbkP9", "_blank");
  };
  const instagramOpen = () => {
    window.open(
      "https://www.instagram.com/annu_71671?utm_source=qr&igsh=MWtxYWhhd2hkZG92aA==",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={linkedinOpen}>
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon" onClick={facebookOpen}>
            <FaFacebookF />
          </span>
          <span className="bannerIcon" onClick={instagramOpen}>
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
