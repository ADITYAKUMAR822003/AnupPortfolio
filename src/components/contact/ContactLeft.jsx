/** @format */

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
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
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Anup Nadgiri</h3>
        <p className="text-lg font-normal text-gray-400">Social Media Expert</p>
        <p className="text-base text-gray-400 tracking-wide">
          Social Media Specialist with a deep understanding of platform
          algorithms, audience segmentation, and content optimization, dedicated
          to creating impactful campaigns that inspire loyalty and drive
          measurable results.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7776060053</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            worldwidesocialmediaexpert@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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

export default ContactLeft;
