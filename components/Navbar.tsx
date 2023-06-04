// @ts-nocheck
"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icon";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  toggle?: any;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group font-semibold`}>
      {title}
      <span
        className={`h-[1px] inline-block ${
          pathname == href ? "w-full" : "w-0"
        } bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group font-semibold text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block ${
          pathname == href ? "w-full" : "w-0"
        } bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm translate-y-0.5 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About" href="/about" className="mx-4" />
          <CustomLink title="Projects" href="/projects" className="mx-4" />
          <CustomLink title="Articles" href="/articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center gap-4">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <DribbbleIcon />
          </motion.a>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink title="Home" href="/" toggle={handleClick} />
            <CustomMobileLink
              title="About"
              href="/about"
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Projects"
              href="/projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Articles"
              href="/articles"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center gap-4 sm:gap-2 flex-wrap mt-2">
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 bg-light rounded-full"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 bg-light rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 bg-light rounded-full"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 bg-light rounded-full"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 bg-light rounded-full"
            >
              <DribbbleIcon />
            </motion.a>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
