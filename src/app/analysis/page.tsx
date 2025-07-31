'use client'
import Link from "next/link";
import MainButton from "../ui/MainButton";
import { motion } from 'motion/react'
import DottedRectangle from "../ui/DottedRectangle";

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col text-foreground px-8">
      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0%)' }}
        transition={{ ease: 'easeInOut', duration: 0.4, delay: 0.4 }}
        className="absolute top-20">
        <h1 className="text-base font-semibold mb-2 uppercase">
          A. I. Analysis
        </h1>
        <p className="text-xs leading-5 uppercase">
          A. I. has estimated the following.
          <br /> Fix estimated information if needed.
        </p>
      </motion.div>
      <div className="flex-grow flex justify-center items-center">
        <div className="relative">
          <div className="grid grid-cols-2 grid-rows-2 gap-1.5 font-semibold text-sm text-foreground tracking-tighter rotate-45">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', ease: 'easeInOut', duration: 0.6 }}
            >
              <Link href="/analysis/summary" className="bg-grayish text-center w-28 aspect-square flex justify-center items-center hover:bg-gray-300 hover:scale-105 transition duration-300 cursor-pointer ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Demographics</p>
            </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
            className="bg-pale text-center w-28 aspect-square flex justify-center items-center hover:bg-grayish hover:scale-105 transition duration-300 cursor-not-allowed ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Cosmetic concerns</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', ease: 'easeInOut', duration: 0.6, delay: 0.25 }}
            className="bg-pale text-center w-28 aspect-square flex justify-center items-center hover:bg-grayish hover:scale-105 transition duration-300 cursor-not-allowed ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Skin type details</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', ease: 'easeInOut', duration: 0.6, delay: 0.1 }}
            className="bg-pale text-center w-28 aspect-square flex justify-center items-center hover:bg-grayish hover:scale-105 transition duration-300 cursor-not-allowed ease-[cubic-bezier(.08,.5,.44,.96)]">
              <p className="-rotate-45 uppercase">Weather</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.4}}
          >
            <DottedRectangle width={420} opacity={1} />
            <DottedRectangle width={460} opacity={.6} />
            <DottedRectangle width={500} opacity={.3} />
          </motion.div>
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
