import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";
import matters from "../asset/matters.png";
export default function Heros() {
  return (
    <div className="flex h-screen pt-10 xl:px-32 px-10  ">
      <div className="pt-">
        {" "}
        <div className=" h-full items-end">
          {" "}
          <Image
            className="h-[480px] w-[380px]"
            src={hero}
            alt="hero"
            width={400}
            height={400}
          />{" "}
          <div className="flex justify-center items-end">
            <a href="https://x.com/snappfinance/">
              {" "}
              <Image className="" src={x} alt="hero" width={34} height={34} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex    flex-col">
        <p className="text-5xl pt-16 ">Snapp Finance</p>
        <div className="flex pt-12 justify-center items-center gap-20">
          <Image className="" src={mint} alt="hero" width={240} height={240} />
          <p>
            Empowering ZK ecosystem by providing liquidity on starting up
            projects
          </p>
        </div>{" "}
        <div className="flex  justify-center pt-[70px] gap-6">
          <div className="pl-12  ">
            <Image
              className=""
              src={matters}
              alt="matter"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image className="" src={zig} alt="zig" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
