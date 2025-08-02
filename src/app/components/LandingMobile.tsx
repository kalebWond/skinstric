"use client"
import { motion } from 'motion/react'
import Link from "next/link";

export default function LandingMobile() {
  return (
    <div className="absolute top-3/4 left-0 w-full flex items-center justify-around lg:hidden">
      <motion.div 
        initial={{opacity: 0, y: 20}} 
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 0.8, delay: 0.4}}
        >
        <Link href="/">
          <span className="relative inline-flex justify-center items-center rotate-45 p-3 main-button__icon group-hover:before:scale-200 group-hover:after:scale-150 group-focus:before:scale-200 group-focus:after:scale-150">
              <svg className="-rotate-45" width="11" height="12" viewBox="0 0 11 12" fill="#1A1B1C" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714355 5.99998L10.1429 11.4436V0.556396L0.714355 5.99998Z" fill="#1A1B1C" />
              </svg>
          </span>
          <span className="uppercase text-base mx-4 leading-4 group-hover:translate-x-8 group-focus:translate-x-8 transition-all duration-500 ease-[cubic-bezier(.08,.5,.44,.96)]">DISCOVER A.I</span>
        </Link>
      </motion.div>

      <motion.div 
        initial={{opacity: 0, y: 20}} 
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 0.8, delay: 0.65}}
        >
        <Link href="/testing">
          <span className="uppercase text-base mx-4 leading-4 group-hover:translate-x-8 group-focus:translate-x-8 transition-all duration-500 ease-[cubic-bezier(.08,.5,.44,.96)]">TAKE TEST</span>
          <span className="relative inline-flex justify-center items-center rotate-45 p-3 main-button__icon group-hover:before:scale-200 group-hover:after:scale-150 group-focus:before:scale-200 group-focus:after:scale-150">
              <svg className="rotate-135" width="11" height="12" viewBox="0 0 11 12" fill="#1A1B1C" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714355 5.99998L10.1429 11.4436V0.556396L0.714355 5.99998Z" fill="#1A1B1C" />
              </svg>
          </span>
        </Link>
      </motion.div>
    </div>
  )
}