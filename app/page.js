import Image from "next/image";
import Hero from "./component/hero";
import Heros from "./component/heros";
import Herose from "./component/herose";
export default function Home() {
  return (
    <main className="bg-black text-white">
      <div className="md:hidden">
        <Hero />
      </div>
      <div className="hidden  md:block lg:hidden">
        <Herose />
      </div>
      <div className="hidden lg:block">
        <Heros />
      </div>
    </main>
  );
}
