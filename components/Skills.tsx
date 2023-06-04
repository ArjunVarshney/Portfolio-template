import { motion } from "framer-motion";
import React from "react";

type skillType = {
  name: string;
  x: string;
  y: string;
};

const Skill = ({ name, x, y }: skillType) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x,
        y,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[70vw]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="React" x="0vw" y="12vw" />
        <Skill name="Next" x="-20vw" y="-15vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-20vw" y="15vw" />
        <Skill name="MongoDB" x="15vw" y="18vw" />
        <Skill name="MySQL" x="15vw" y="-12vw" />
        <Skill name="Golang" x="25vw" y="2vw" />
      </div>
    </>
  );
};

export default Skills;
