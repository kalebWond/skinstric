import Link from "next/link";
import MainButton from "./ui/MainButton";
import Rectangle from "./ui/Reactangle";

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* -translate-x-[110%], -translate-x-24, translate-x-[10%] */}
      <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-7xl font-normal tracking-[-0.1em] text-center transition-all duration-300">
        Sophisticated
        <span className="block transition-transform">skincare</span>
      </h1>
      <div className="">
        <Link href="/" className="main-btn-link"><MainButton id="discover-btn" title="DISCOVER A.I." className="left-8 translate-x-1/5 xl:translate-x-1/12 [@media(width>=1920px)]:translate-x-1/20"/></Link>
        <Rectangle className="left-[-15%] rectangle" />
      </div>
      <div className="">
        <Link href="/testing" className="main-btn-link"><MainButton id="take-test-btn" title="TAKE TEST" right className="right-8 -translate-x-1/5 xl:-translate-x-1/12 [@media(width>=1920px)]:-translate-x-1/20" /></Link>
        <Rectangle className="right-[-15%] rectangle" />
      </div>
      
      <div className="hidden lg:block fixed bottom-5 left-8 font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
        <p>Skinstric developed an A.I. that creates a<br/>highly-personalized routine tailored to<br/>what your skin needs.</p>
      </div>
    </section>
  );
}
