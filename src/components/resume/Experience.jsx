/** @format */

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2016 - Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Marketing & CRM Specialist"
            subTitle="Techmash Worldwide | Digital Marketing Agency (2017 - Present)"
            result="Pune, Maharashtra, India"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Cluster Manager"
            subTitle="Four Fountains De-Stress Spa (2016 - Present)"
            result="Pune, Maharashtra, India"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Business Development Specialist"
            subTitle="HR wellness spa and salon (2016 - Present)"
            result="Pune, Maharashtra, India"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - Present</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Marketing & CRM Specialist"
            subTitle="Techmash Worldwide | Digital Marketing Agency (2017 - Present)"
            result="Pune, Maharashtra, India"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Cluster Manager"
            subTitle="Four Fountains De-Stress Spa (2016 - Present)"
            result="Pune, Maharashtra, India"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Business Development Specialist"
            subTitle="HR wellness spa and salon (2016 - Present)"
            result="Pune, Maharashtra, India"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
