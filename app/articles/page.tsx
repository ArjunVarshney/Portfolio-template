"use client";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";
import { motion, useMotionValue } from "framer-motion";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const FramerImage = motion(Image);

export const metadata: Metadata = {
  title: "Articles",
  description: "Article page",
};

type featuredType = {
  image: string;
  title: string;
  time: string;
  summary: string;
  link: string;
};

type articleType = {
  image: string;
  title: string;
  date: string;
  link: string;
};
type imagetype = {
  image: string;
  title: string;
  link: string;
};

const MovingImage = ({ title, image, link }: imagetype) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  const handleMouse = (event: { pageX: any }) => {
    // @ts-ignore
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (event: { pageX: any }) => {
    // @ts-ignore
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href="/"
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={image}
        alt={title}
        width={300}
        height={300}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        ref={imageRef}
      ></FramerImage>
    </Link>
  );
};

const Featured = ({ image, title, time, summary, link }: featuredType) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-dark border-solid rounded-2xl relative">
      <div className="absolute top-0 left-0 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <FramerImage
          src={image}
          width={300}
          height={300}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const Article = ({ image, title, date, link }: articleType) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImage title={title} image={image} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words can change the World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            <Featured
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              image="https://source.unsplash.com/random/?website"
            />
            <Featured
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              image="https://source.unsplash.com/random/?website"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="
Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              image="https://source.unsplash.com/random/?reactjs"
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="
Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              image="https://source.unsplash.com/random/?form"
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="
Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              image="https://source.unsplash.com/random/?form"
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="
Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              image="https://source.unsplash.com/random/?form"
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="
Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              image="https://source.unsplash.com/random/?form"
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
