/** @format */

import React from "react";
import Title from "../layouts/Title";
import {
  socialMedia,
  webDevelopment,
  appDevelopment,
  seoDevelopment,
  consultancyServices,
  elevator,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT OUR PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Our Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Expert"
          des="Skilled Social Media Expert with a strategic mindset, adept at crafting impactful content and driving engagement to elevate brand presence and connect with target audiences effectively."
          src={socialMedia}
        />
        <ProjectsCard
          title="Web Development"
          des="Web development combines creative design and technical proficiency to build digital solutions that drive user engagement and business growth."
          src={webDevelopment}
        />
        <ProjectsCard
          title="App Development"
          des="Our expertise in cross-platform development enables efficient, high-quality app delivery for iOS, Android, and web, maximizing reach and impact."
          src={appDevelopment}
        />
        <ProjectsCard
          title="SEO"
          des="Strong on-page SEO, like effective title tags, meta descriptions, and internal linking, can boost your off-page efforts, leading to better authority and relevance."
          src={seoDevelopment}
        />
        <ProjectsCard
          title="Elevator"
          des="Elevators are the backbone of vertical transportation, enhancing accessibility and efficiency in buildings of all sizes, from residential complexes to towering skyscrapers."
          src={elevator}
        />
        <ProjectsCard
          title="Consultancy services IT and non-IT"
          des="Consultancy services in both IT and non-IT domains are essential for organizations seeking to navigate the complexities of today’s business landscape."
          src={consultancyServices}
        />
      </div>
    </section>
  );
};

export default Projects;
