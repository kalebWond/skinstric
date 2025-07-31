"use client";

import clsx from "clsx";
import { motion } from "motion/react";
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
          <motion.div
            initial={{ clipPath: 'inset(50%)' }}
            animate={{ clipPath: 'inset(0%)'}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mr-4"
          >
            <Link href="/" className="text-sm font-semibold ">SKINSTRIC</Link>
          </motion.div>
          <motion.div
            initial={{ clipPath: 'inset(50%)' }}
            animate={{ clipPath: 'inset(0%)'}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center gap-1 opacity-60">
            <span className="text-lg font-light leading-none">[</span>
            <span className="text-sm font-semibold mt-0.5">{ pathname.includes("analysis") ? 'ANALYSIS' : 'INTRO'}</span>
            <span className="text-lg font-light leading-none">]</span>
          </motion.div>
        </div>
        <motion.button
          initial={{ clipPath: 'inset(0% 50% 0% 50%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)'}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={clsx("px-4 py-2 text-[10px]/4 bg-foreground text-background", {
          "hidden": pathname === '/testing/camera'
        })}>ENTER CODE</motion.button>
    </nav>
  );
}
