"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaHome, FaInfo, FaPhone } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons: { [key: string]: JSX.Element } = {
    home: <FaHome />,
    info: <FaInfo />,
    phone: <FaPhone />,
  };

  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 1,
      }}
      animate={{
        y: isScrolled ? 0 : -50, // Adjust position based on scroll
        opacity: 1,
        top: isScrolled ? "auto" : "90px", // Position on top initially
        bottom: isScrolled ? "10px" : "auto", // Move to bottom after scroll
      }}
      transition={{
        duration: 0,
      }}
      className={cn(
        "flex max-w-fit fixed  inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-blue-400 hover:text-blue-500"
          )}
        >
          <span className=" sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};
