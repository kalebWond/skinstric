"use client";

import clsx from "clsx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  const className = clsx("fixed top-0 left-0 w-full h-16 flex justify-between items-center px-8 z-40", {
    "backdrop-blur-sm": pathname === '/analysis/summary',
    "text-background": pathname === '/testing/camera'
  })

  return (
    <nav className={className}>
        <div className="flex items-center">
          <Link href="/" className="text-sm font-semibold mr-4">SKINSTRIC</Link>
          <div className="relative flex items-center gap-1 opacity-60">
            <span className="text-lg font-light leading-none">[</span>
            <span className="text-sm font-semibold mt-0.5">{ pathname.includes("analysis") ? 'ANALYSIS' : 'INTRO'}</span>
            <span className="text-lg font-light leading-none">]</span>
          </div>
        </div>
        <button className={clsx("px-4 py-2 text-[10px]/4 bg-foreground text-background", {
          "hidden": pathname === '/testing/camera'
        })}>ENTER CODE</button>
    </nav>
  );
}
