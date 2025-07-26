import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {

  return (
    <nav className={clsx("fixed top-0 left-0 w-full h-16 flex justify-between items-center px-8 z-40")}>
        <div className="fixed top-0 left-0 w-1/2 h-10 backdrop-blur-sm -z-1"></div>
        <div className="flex items-center">
          <Link href="/" className="text-sm font-semibold mr-4">SKINSTRIC</Link>
          <Image src="/intro.png" alt="intro image" width={63} height={19} className="opacity-60" />
        </div>
        <button className="bg-foreground text-background px-4 py-2 text-[10px]/4">ENTER CODE</button>
    </nav>
  );
}
