import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";
import matters from "../asset/matters.png";
import "animate.css";
export default function Heros() {
  return (
    <div className="flex  h-screen pt-10 xl:px-32 px-10  ">
      <div className="pt-">
        {" "}
        <div className=" h-full items-end">
          {" "}
          <Image
            className="animate__animated animate__fadeInUp h-[540px] w-[400px]"
            src={hero}
            alt="hero"
            width={420}
            height={420}
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
        <p className=" text-[74px] pt-6 animate__animated   animate__slideInLeft">
          Snapp Finance
        </p>
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
          <p className="animate__animated animate__fadeInLeft ">
            Empowering ZK ecosystem by providing liquidity on starting up
            projects
          </p>
        </div>{" "}
        <div className="flex  justify-center pt-[82px] gap-6">
          <div className="pl-12  ">
            <Image
              className="animate__animated animate__fadeInUp"
              src={matters}
              alt="matter"
              width={350}
              height={350}
            />
          </div>
          <div className="animate__animated animate__fadeInLeft">
            <Image className="" src={zig} alt="zig" width={350} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
}
