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

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group font-semibold`}>
      {title}
      <span
        className={`h-[1px] inline-block ${
          pathname.startsWith(href) ? "w-full" : "w-0"
        } bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
