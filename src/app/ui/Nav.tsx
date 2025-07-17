import Image from "next/image";

export default function Nav() {
  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-8">
        <div className="flex items-center">
          <span className="text-sm font-semibold mr-4">SKINSTRIC</span>
          <Image src="/intro.png" alt="intro image" width={63} height={19} className="opacity-60" />
        </div>
        <button className="bg-foreground text-background px-4 py-2 text-[10px]/4">ENTER CODE</button>
    </div>
  );
}
