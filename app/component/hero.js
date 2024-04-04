import Image from "next/image";
import hero from "../asset/heroo.png";
import x from "../asset/x.png";
import matter from "../asset/matter.png";
import zig from "../asset/zig.png";
import mint from "../asset/mint.png";

export default function Hero() {
  return (
    <div className="text-white ">
      <div className="  justify-center">
        <Image
          className="px-20"
          src={hero}
          alt="hero"
          width={450}
          height={450}
        />
        <div className=" flex justify-center">
          <a href="">
            {" "}
            <Image className="" src={x} alt="hero" width={17} height={17} />
          </a>
        </div>
      </div>
      <p className=" text-white pt-6  text-2xl pl-4">Snapp Finance</p>
      <div className="text-white pt-10 flex  justify-center">
        <Image className="" src={mint} alt="hero" width={100} height={100} />
      </div>{" "}
      <p className="px-4  text-[8px]  text-xs">
        Empowering ZK ecosystem by providing liquidity on starting up projects
      </p>
      <div className="flex  pt-10 justify-center">
        <Image
          className=" "
          src={matter}
          alt="comunity"
          width={120}
          height={120}
        />{" "}
      </div>{" "}
      <p className="  flex justify-center text-[8px]">
        Nothing matters more than community
      </p>
      <div className=" flex justify-center">
        {" "}
        <Image src={zig} alt="comunity" width={120} height={120} />{" "}
      </div>
    </div>
  );
}

0;
