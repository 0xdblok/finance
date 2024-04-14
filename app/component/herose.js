import React from "react";
import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import discord from "../asset/discord.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";
import matters from "../asset/matters.png";
import "animate.css";
export default function Herose() {
  return (
    <div className="pb-4">
      <div>
        {" "}
        <div className="flex justify-center">
          {" "}
          <Image
            className="animate__animated animate__fadeInUp"
            src={hero}
            alt="hero"
            width={450}
            height={450}
          />{" "}
        </div>
        <div className="flex gap-1 justify-center">
          <a href="https://x.com/snappfinance/">
            {" "}
            <Image className="" src={x} alt="hero" width={34} height={34} />
          </a>
          <a href="https://discord.com/invite/S6WQpfPU">
            {" "}
            <Image
              className="pt-2"
              src={discord}
              alt="hero"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
      <div className="px-12">
        <h1 className=" text-5xl pt-16 animate__animated   animate__slideInLeft">
          Snapp Finance
        </h1>
        <div className="flex pt-12 justify-center items-center gap-20">
          <a href="https://www.omnisea.org/vog1ZyX9rV8xIuFR9x5P">
            {" "}
            <Image
              className=""
              src={mint}
              alt="hero"
              width={240}
              height={240}
            />
          </a>
          <p className="animate__animated animate__fadeInLeft">
            Empowering ZK ecosystem by providing liquidity on starting up
            projects
          </p>
        </div>{" "}
        <div className="flex pt-12 justify-center items-center gap-6">
          <div className="pl-12 ">
            <Image
              className="animate__animated animate__fadeInUp"
              src={matters}
              alt="matter"
              width={280}
              height={280}
            />
          </div>
          <Image
            className="animate__animated animate__fadeInLeft"
            src={zig}
            alt="zig"
            width={280}
            height={280}
          />
        </div>
      </div>
    </div>
  );
}
