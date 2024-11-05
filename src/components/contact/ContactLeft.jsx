/** @format */

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
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
  const whatsappOpen = () => {
    window.open(`https://wa.me/${7776060053}`, "_blank");
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
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:
          <a href="tel:+917776060053" className="text-lightText">
            +91 7776060053
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <a
            href="mailto:worldwidesocialmediaexpert@gmail.com"
            className="text-lightText"
          >
            worldwidesocialmediaexpert@gmail.com
          </a>
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
          <span className="bannerIcon" onClick={whatsappOpen}>
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
