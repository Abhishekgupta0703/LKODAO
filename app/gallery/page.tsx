import { FloatingNav } from "@/components/ui/FloatingNav";
import { galleryImages, navItems } from "@/data";
import React from "react";
import Footer from "@/components/Footer";
import { LayoutGrid } from "@/components/ui/LayoutGrid";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
import { FaImages } from "react-icons/fa";
import { galleryEvents } from "@/data"; // Import event data
import "./gallery.css";

function Gallery() {
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
      <div className="relative w-full pt-52 flex flex-col items-center text-center z-10">
        <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-4">
          Explore the Decentralized Future
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
          words="Gallery of Lucknow DAO Events"
        />
        <p className="text-center text-sm md:text-lg lg:text-2xl text-neutral-300 mt-4">
          Browse our collection of decentralized events and moments, where
          blockchain meets collaboration.
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className=" py-2 w-full text-center">
          <LayoutGrid
            cards={galleryEvents.map(event => ({
              id: event.id,
              content: (
                <div>
                  <p className="font-bold md:text-4xl text-xl text-white">
                    {event.title}
                  </p>
                  <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    {event.description}
                  </p>
                </div>
              ),
              className: event.className,
              thumbnail: event.image,
            }))}
          />
          
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default Gallery;
