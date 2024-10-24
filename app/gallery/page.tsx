import { FloatingNav } from "@/components/ui/FloatingNav";
import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import { galleryImages, navItems } from "@/data";
import React from "react";
import Footer from "@/components/Footer";
import { LayoutGrid } from "@/components/ui/LayoutGrid";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
import { FaImages } from "react-icons/fa";
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
        <div className="h-screen py-2 w-full text-center">
          <LayoutGrid cards={galleryCards} />
          <a href="#latest-event" className="">
            <MagicButton
              title="See Latest Event"
              icon={<FaImages />}
              position="right"
            />
          </a>
        </div>
        <div className="my-28">
          <ParallaxScroll images={galleryImages} />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Gallery;

const EventOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        India Blockchain Week
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Join us for a deep dive into decentralized finance, NFTs, and Web3
        technologies. Network with blockchain experts and innovators during this
        immersive event.
      </p>
    </div>
  );
};

const EventTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Avalanche Game Night
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A fun-filled gaming night featuring play-to-earn games built on
        Avalanche. Experience the future of decentralized gaming and connect
        with other enthusiasts.
      </p>
    </div>
  );
};

const EventThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Ethereum Connect Meetup
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Discuss smart contracts, dApps, and the latest innovations in the
        Ethereum ecosystem with developers and experts at this exciting meetup.
      </p>
    </div>
  );
};

const EventFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Lucknow DAO Meetup
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A gathering for Web3 developers, blockchain startups, and enthusiasts in
        Lucknow. Share ideas, collaborate, and explore the future of
        decentralized technology together.
      </p>
    </div>
  );
};
const galleryCards = [
  {
    id: 1,
    content: <EventOne />,
    className: "md:col-span-2",
    thumbnail: "./b1.svg"
  },
  {
    id: 2,
    content: <EventTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1553447979-2d5a0d7363a6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    content: <EventThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3cde?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    content: <EventFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];
