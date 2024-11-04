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
          des="Web development is the process of building, creating, and maintaining websites or web applications. It combines elements of design, programming and content creation to bring websites to life."
          src={webDevelopment}
        />
        <ProjectsCard
          title="App Development"
          des="App development is an evolving field that requires a combination of technical skill, and strategic planning. We create applications that not only meet user expectations but also drive business growth."
          src={appDevelopment}
        />
        <ProjectsCard
          title="SEO"
          des="SEO is the strategic process of improving a website's visibility on search engines like Google. It involves optimizing content, structure, and technical aspects of a website to drive organic (non-paid) traffic."
          src={seoDevelopment}
        />
        <ProjectsCard
          title="Elevate Media"
          des="We believe in crafting digital experiences that make an impact. Specializing in content creation, and digital strategy, our mission is to elevate brands by creating compelling stories and memorable visuals."
          src={elevator}
        />
        <ProjectsCard
          title="Prospera Social"
          des="We believe that every brand has a unique story to tell. Our team of skilled marketers, designers, and strategists collaborates closely with clients to uncover what makes their brand special."
          src={consultancyServices}
        />
      </div>
    </section>
  );
};

export default Projects;
