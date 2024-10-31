"use client";
import { cn } from "@/utils/cn";
import { FaTags, FaClock, FaUser } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const BlogsGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BlogsGridItem = ({
  className,
  title,
  description,
  category,
  img,
  id,
  readTime,
  author
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  category?: string;
  img?: string;
  id?: number;
  readTime?: string;
  author?: string;
}) => {
  const maxDescriptionLength = 80;
  const truncatedDescription =
    typeof description === "string" && description.length > maxDescriptionLength
      ? `${description.slice(3, maxDescriptionLength)}...`
      : description;

  // Create a ref to track when the component is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -30% 0px" }); // Adjust margin for middle of the screen

  //   const isInView = useInView(ref, { once: true }); // Animation only triggers once

  // Define the animation for the item
  const animationVariants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Fade in and slide up
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger visibility when in view
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Link href={`/blogs/${id}`} passHref>
        <img
          src={img}
          alt={title?.toString()}
          className="w-full h-44 rounded-xl object-cover object-center transition-opacity duration-300"
        />
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <p className="text-xs py-1 px-2 mt-3 rounded-3xl bg-neutral-600 inline-flex items-center gap-1.5">
            <FaTags size={16} /> {category}
          </p>

          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {truncatedDescription}
          </div>
          <div className="flex mt-2 items-center justify-start gap-5">
            <p className="text-xs inline-flex items-center gap-1.5">
              <FaClock size={15} />
              {readTime}
            </p>
            <p className="text-xs inline-flex items-center gap-1.5">
              <FaUser size={13} />
              {author}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
