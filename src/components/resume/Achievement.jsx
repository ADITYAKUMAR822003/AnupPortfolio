/** @format */

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Marketing & CRM Specialist"
            subTitle="Techmash Worldwide | Digital Marketing Agency (2017 - Present)"
            des="As a Marketing & CRM Specialist, your role is to develop, execute, and refine strategies aimed at attracting and retaining customers. This involves overseeing the entire customer journey, from lead generation to post-purchase engagement, with a strong focus on enhancing customer satisfaction and loyalty."
          />
          <ResumeCard
            title="Cluster Manager"
            subTitle="Four Fountains De-Stress Spa"
            des="The role of a Cluster Manager involves overseeing operations across multiple locations, ensuring consistent performance, meeting financial and operational targets, and maintaining high standards for customer satisfaction. Cluster Managers often work in industries like retail, hospitality, healthcare, logistics, and other multi-site operations."
          />
          <ResumeCard
            title="Business Development Specialist"
            subTitle="HR wellness spa and salon"
            des="A Business Development Specialist focuses on expanding a company's reach, increasing revenue, and fostering strategic partnerships. This role typically involves identifying new business opportunities, researching potential markets, and building relationships with clients."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
