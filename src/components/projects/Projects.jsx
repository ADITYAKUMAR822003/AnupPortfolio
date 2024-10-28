/** @format */

import React from "react";
import Title from "../layouts/Title";
import {
  socialMedia,
  franchiseDevelopment,
  businessDevelopment,
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
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Expert"
          des="Skilled Social Media Expert with a strategic mindset, adept at crafting impactful content and driving engagement to elevate brand presence and connect with target audiences effectively."
          src={socialMedia}
        />
        <ProjectsCard
          title="Security Agency"
          des="Ensuring safety and peace of mind, our security agency provides reliable, vigilant, and expertly trained personnel dedicated to protecting what matters most."
          src={socialMedia}
        />
        <ProjectsCard
          title="Franchise Development"
          des="Successful franchise development hinges on identifying the right partners, providing comprehensive training, and fostering a collaborative culture that drives collective success."
          src={franchiseDevelopment}
        />
        <ProjectsCard
          title="Business Development"
          des="Successful business development professionals leverage market insights, networking, and negotiation skills to drive transformative initiatives that propel organizations forward."
          src={businessDevelopment}
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
