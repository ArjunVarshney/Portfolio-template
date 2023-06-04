import Layout from "@/components/Layout";
import { Metadata } from "next";
import Image from "next/image";
import profilePic from "../public/images/developer-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import lightBulb from "../public/images/lightBulb.svg";
import Transition from "@/components/Transition";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Arjun Varshney is a good full stack developer and a machine learning expert",
};

export default function Home() {
  return (
    <>
      <Transition />
      <main className="flex items-center test-dark w-full min-h-screen dark:bg-dark">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Arjun Varshney"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1.5" />
                </Link>
                <Link
                  href="mailto:varshneyarjun48@gmail.com"
                  target="_blank"
                  className="ml-6 text-lg font-medium capitalize text-dark underline nd:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Arjun Varshney"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
    </>
  );
}
