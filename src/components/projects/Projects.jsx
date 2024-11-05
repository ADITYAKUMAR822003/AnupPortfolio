/** @format */

import React from "react";
import Title from "../layouts/Title";
import {
  socialMedia,
  webDevelopment,
  appDevelopment,
  seoDevelopment,
  consultancyServices,
  googleAdds,
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
          des="Our Services"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Marketing"
          des="Skilled Social Media Expert with a strategic mindset, adept at crafting impactful content and driving engagement to elevate brand presence and connect with target audiences effectively."
          src={socialMedia}
        />
        <ProjectsCard
          title="Web Development"
          des="We create and maintain dynamic, user-friendly websites and applications that optimize user experience, and drive business growth through innovative design and robust functionality."
          src={webDevelopment}
        />
        <ProjectsCard
          title="App Development"
          des="We specialize in crafting custom, high-performance mobile and web applications, delivering intuitive user experiences and robust solutions tailored to meet your business needs and drive digital success."
          src={appDevelopment}
        />
        <ProjectsCard
          title="SEO"
          des="We optimize your online presence through strategic SEO practices that enhance visibility, drive organic traffic, and boost search engine rankings, ensuring that your target audience finds you easily."
          src={seoDevelopment}
        />
        <ProjectsCard
          title="Google Ads"
          des="We drive targeted growth through expertly managed Google Ads campaigns, leveraging data-driven strategies to maximize reach, and deliver measurable results for our clients."
          src={googleAdds}
        />
        <ProjectsCard
          title="Lead Conversion"
          des="We specialize in transforming potential leads into valuable, long-term clients through personalized outreach, and data-driven insights to maximize conversion and enhance customer satisfaction."
          src={consultancyServices}
        />
      </div>
    </section>
  );
};

export default Projects;
