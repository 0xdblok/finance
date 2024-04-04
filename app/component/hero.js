import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";
import matters from "../asset/matters.png";
export default function Hero() {
  return (
    <div className="text-white pb-4">
      <div className=" flex justify-center">
        <Image
          className="px-20"
          src={hero}
          alt="hero"
          width={450}
          height={450}
        />
      </div>
      <div className=" flex justify-center">
        <a href="https://x.com/snappfinance/">
          {" "}
          <Image className="" src={x} alt="hero" width={17} height={17} />
        </a>
      </div>
      <p className=" text-white pt-6 text-center  text-2xl ">Snapp Finance</p>
      <div className="text-white pt-10 flex  justify-center">
        <Image className="" src={mint} alt="hero" width={140} height={140} />
      </div>{" "}
      <p className="text-center  text-[8px]  text-xs">
        Empowering ZK ecosystem by providing liquidity on starting up projects
      </p>
      <div className="flex  pt-10 justify-center">
        <Image
          className=" "
          src={matters}
          alt="comunity"
          width={180}
          height={180}
        />{" "}
      </div>{" "}
      <div className="pt-2 flex justify-center">
        {" "}
        <Image src={zig} alt="comunity" width={180} height={180} />{" "}
      </div>
    </div>
  );
}

0;
