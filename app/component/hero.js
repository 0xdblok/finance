import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import discord from "../asset/discord.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";
import matters from "../asset/matters.png";
import "animate.css";
export default function Hero() {
  return (
    <div className="text-white pb-4">
      <div className=" flex justify-center">
        <Image
          className="px-20 animate__animated animate__fadeInUp"
          src={hero}
          alt="hero"
          width={450}
          height={450}
        />
      </div>
      <div className=" flex gap-1 justify-center">
        <a href="https://x.com/snappfinance/">
          {" "}
          <Image className="" src={x} alt="hero" width={17} height={17} />
        </a>{" "}
        <a href="https://discord.com/invite/S6WQpfPU">
          {" "}
          <Image
            className="pt-[3px]"
            src={discord}
            alt="hero"
            width={14}
            height={14}
          />
        </a>
      </div>
      <p className=" text-white pt-6 text-center  text-2xl animate__animated animate__slideInLeft ">
        Snapp Finance
      </p>
      <div className="text-white pt-10 flex  justify-center">
        <Image className="" src={mint} alt="hero" width={140} height={140} />
      </div>{" "}
      <p className="text-center  text-[8px] animate__animated animate__fadeInLeft  text-xs">
        Empowering ZK ecosystem by providing liquidity on starting up projects
      </p>
      <div className="  pt-10 ">
        <div className="flex justify-center">
          <Image
            className=" animate__animated animate__fadeInUp"
            src={matter}
            alt="comunity"
            width={180}
            height={180}
          />{" "}
        </div>
        <p className="text-center pt-1   text-[8px] animate__animated animate__fadeInLeft  text-xs">
          Nothing matters more than community
        </p>
      </div>{" "}
      <div className="pt-2 flex animate__animated animate__fadeInLeft justify-center">
        {" "}
        <Image src={zig} alt="comunity" width={180} height={180} />{" "}
      </div>
    </div>
  );
}

0;
