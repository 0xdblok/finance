import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";

export default function Heros() {
  return (
    <div className="flex  pt-10 xl:px-32 px-10 h-screen ">
      <div className="w-1/3">
        {" "}
        <Image
          className=""
          src={hero}
          alt="hero"
          width={450}
          height={450}
        />{" "}
        <div className="flex justify-center">
          <a href="https://x.com/snappfinance/">
            {" "}
            <Image className="" src={x} alt="hero" width={34} height={34} />
          </a>
        </div>
      </div>
      <div className="w-2/3">
        <p className="text-5xl pt-16 ">Snapp Finance</p>
        <div className="flex pt-12 justify-center items-center gap-20">
          <Image className="" src={mint} alt="hero" width={240} height={240} />
          <p>
            Empowering ZK ecosystem by providing liquidity on starting up
            projects
          </p>
        </div>{" "}
        <div className="flex pt-12 justify-center items-center gap-6">
          <div className="pl-12 pt-14">
            <Image
              className=""
              src={matter}
              alt="matter"
              width={240}
              height={240}
            />
            <p className="pl-6">Nothing matters more than community</p>
          </div>
          <Image className="" src={zig} alt="zig" width={240} height={240} />
        </div>
      </div>
    </div>
  );
}
