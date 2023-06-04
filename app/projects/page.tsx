import { Metadata } from "next";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icon";
import Transition from "@/components/Transition";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};

type featuredPorjectType = {
  type: string;
  title: string;
  summary: string;
  image: string;
  link: string;
  gitLink: string;
};

type PorjectType = {
  type: string;
  title: string;
  image: string;
  link: string;
  gitLink: string;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  gitLink,
}: featuredPorjectType) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl">
      <div className="absolute top-0 left-0 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/3 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="w-full h-auto"
        ></Image>
      </Link>
      <div className="w-2/3 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-0">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={gitLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, gitLink }: PorjectType) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-xl p-6 relative sm:p-4">
      <div className="absolute top-0 left-0 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="w-full h-auto"
        ></Image>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={gitLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const project = () => {
  return (
    <>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                link="/"
                gitLink="/"
                image="https://source.unsplash.com/random/?bitcoin"
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="/"
                gitLink="/"
                image="https://source.unsplash.com/random/?bitcoin"
                type="Project"
                title="Crypto Screener Application"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="/"
                gitLink="/"
                image="https://source.unsplash.com/random/?bitcoin"
                type="Project"
                title="Crypto Screener Application"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="/"
                gitLink="/"
                image="https://source.unsplash.com/random/?bitcoin"
                type="Project"
                title="Crypto Screener Application"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="/"
                gitLink="/"
                image="https://source.unsplash.com/random/?bitcoin"
                type="Project"
                title="Crypto Screener Application"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
