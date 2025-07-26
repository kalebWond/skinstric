import Link from "next/link";
import DottedRectangle from "../ui/DottedRectangle";
import MainButton from "../ui/MainButton";

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col text-foreground px-8">
      <div className="absolute top-20">
        <h1 className="text-base font-semibold mb-2 uppercase">
          A. I. Analysis
        </h1>
        <p className="text-xs leading-5 uppercase">
          A. I. has estimated the following.
          <br /> Fix estimated information if needed.
        </p>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="relative">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 font-semibold text-sm text-foreground tracking-tighter rotate-45">
            <Link href="/analysis/summary" className="bg-grayish text-center w-28 aspect-square flex justify-center items-center hover:bg-gray-300 hover:scale-105 transition duration-300 cursor-pointer ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Demographics</p>
            </Link>
            <div className="bg-pale text-center w-28 aspect-square flex justify-center items-center hover:bg-grayish hover:scale-105 transition duration-300 cursor-not-allowed ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Cosmetic concerns</p>
            </div>
            <div className="bg-pale text-center w-28 aspect-square flex justify-center items-center hover:bg-grayish hover:scale-105 transition duration-300 cursor-not-allowed ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Skin type details</p>
            </div>
            <div className="bg-pale text-center w-28 aspect-square flex justify-center items-center hover:bg-grayish hover:scale-105 transition duration-300 cursor-not-allowed ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Weather</p>
            </div>
          </div>
          <DottedRectangle width={420} opacity={1} />
          <DottedRectangle width={460} opacity={.6} />
          <DottedRectangle width={500} opacity={.3} />
        </div>
      </div>
      <Link href=".." className="fixed bottom-12 left-11">
        <MainButton title="Back" className="" />
      </Link>
      <Link href="/analysis/summary" className="fixed bottom-12 right-48">
        <MainButton title="Get summary" className="" right/>
      </Link>
    </div>
  );
}
