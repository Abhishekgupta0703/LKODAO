import Footer from "@/components/Footer";
import { BlogsGrid, BlogsGridItem } from "@/components/ui/BlogsGrid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { daoBlogs,  navItems } from "@/data";
import React from "react";

export default function page() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Spotlights for background effect */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Intro Section for Gallery */}
      <div className="relative w-full pt-44 flex flex-col items-center text-center z-10">
        <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-4">
          Explore the Decentralized Future
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
          words="Web3 Nexus in Lucknow"
        />
        <p className="text-center text-sm md:text-lg lg:text-2xl text-neutral-300 mt-4">
          Browse our collection of decentralized events and moments, where
          blockchain meets collaboration.
        </p>
      </div>
      <FloatingNav navItems={navItems} />

      <BlogsGrid className="w-full py-20">
        {daoBlogs.map((item, i) => (
          <BlogsGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            img={item.image}
            category={item.category}
            readTime={item.readTime}
            author={item.author}
          />
        ))}
      </BlogsGrid>
      <Footer/>
    </main>
  );
}
