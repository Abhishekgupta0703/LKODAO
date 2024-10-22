import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Join <span className="text-purple">LUCKNOW DAO</span> to shape LKO's
          WEB3 Future
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Be a part of Lucknow DAO and help shape a transparent, decentralized
          future fueled by the limitless potential of Web3.
        </p>
        <a href="https://x.com/suraj_sharma14?t=vbPj3PEyf6eW_qZlQJZlPw&s=09">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="md:text-base text-sm md:font-normal font-light cursor-pointer z-20">
          Made with ❤️ by{" "}
          <a
            href="https://x.com/Shashwa82230334?t=5F3bKaJXn4pWCsxEduFWuA&s=09"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shashwat
          </a>{" "}
          &{" "}
          <a
            href="https://Abhishekgupta.github.io/Portfolio"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek
          </a>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
