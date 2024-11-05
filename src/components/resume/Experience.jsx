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
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Marketing & CRM Specialist"
            subTitle="Techmash Worldwide | Digital Marketing Agency"
            des="As a Marketing & CRM Specialist, My role is to develop, execute, and refine strategies aimed at attracting and retaining customers. This involves overseeing the entire customer journey, from lead generation to post-purchase engagement, with a strong focus on enhancing customer satisfaction and loyalty."
          />
          <ResumeCard
            title="Marketing Manager"
            subTitle="HR wellness spa and salon"
            des="As a Marketing Manager, I am dedicated to developing and executing innovative marketing strategies that drive brand awareness, engage target audiences, and increase revenue. With a strong analytical mindset and a passion for creativity, I leverage data-driven insights to optimize campaigns and deliver measurable results in competitive markets."
          />
          <ResumeCard
            title="Business Marketing Specialist"
            subTitle="HR wellness spa and salon"
            des="A Business Marketing Specialist is responsible for developing and executing marketing strategies to drive business growth and enhance brand visibility. This role involves conducting market research, analyzing consumer behavior, and leveraging various marketing channels to reach target audiences effectively."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
