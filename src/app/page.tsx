"use client";

import Link from "next/link";
import MainButton from "./ui/MainButton";
import { motion } from 'motion/react'
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [hovered, setHovered] = useState<''| 'left' | 'right'>('');

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        animate={{
          x: hovered === 'right' ? '-110%' : (hovered === 'left' ? '110%' : '0')
        }}
        transition={{ type: 'tween', ease:'easeInOut', duration: 0.5}}
        className="absolute top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 p-1 overflow-hidden">
        <motion.h1
          initial={{y: 150}}
          animate={{y:0}}
          transition={{ ease:'easeInOut', duration: 0.6}}
          className="text-7xl font-normal tracking-[-0.08em] text-center">
          Sophisticated
          <motion.span 
            animate={{x: hovered === 'left' ? "20%" : (hovered === 'right' ? '-20%' : 0)}}
            transition={{ type: 'tween', ease:'easeInOut', duration: 0.5}}
            className="block">skincare</motion.span>
        </motion.h1>
      </motion.div>
      
      <div className="">
        <motion.div
          animate={{opacity: hovered === 'right' ? 0 : 1}}
          transition={{ ease: "easeInOut", duration: 0.2, delay: hovered === '' ? 0.4 : 0.2 }} >
          <Link onMouseEnter={() => setHovered("left")} onMouseLeave={() => setHovered("")} href="/" className="main-btn-link">
            <MainButton id="discover-btn" title="DISCOVER A.I." className="left-8 translate-x-1/5 xl:translate-x-1/12"/>
          </Link>
        </motion.div>
        <motion.div 
          initial={{opacity: 0.5, x: '-100%', y: '100%'}} 
          animate={{opacity: 1, x: hovered === 'right' ? '-100%' : 0, y: hovered === "right" ? '100%' : 0}} 
          transition={{ ease: "easeInOut", duration: 0.6}} 
          className={clsx("rectangle left-[-15%]", {'hovered': hovered === 'left'})} />
      </div>
      <div className="">
        <motion.div 
          animate={{opacity: hovered === 'left' ? 0 : 1}}
          transition={{ ease: "easeInOut", duration: 0.2, delay: hovered === '' ? 0.4 : 0.2 }} 
        >
          <Link onMouseEnter={() => setHovered("right")} onMouseLeave={() => setHovered("")} href="/testing" className="main-btn-link">
            <MainButton id="take-test-btn" title="TAKE TEST" right className="right-8 -translate-x-1/5 xl:-translate-x-1/12" />
          </Link>
        </motion.div>
        <motion.div 
          initial={{opacity: 0.5, x: '100%', y: '-100%'}} 
          animate={{opacity: 1, x: hovered === 'left' ? '100%' : 0, y: hovered === "left" ? '-100%' : 0}} 
          transition={{ ease: "easeInOut", duration: 0.6}} 
          className={clsx("rectangle right-[-15%]", {'hovered': hovered === 'right'})} />
      </div>
      
      <div className="hidden lg:block fixed bottom-5 left-8 font-normal text-sm text-[#1A1B1C] space-y-3 uppercase overflow-hidden">
        <motion.p 
          initial={{y: '100%'}}
          animate={{y: 0}}
          transition={{ ease: 'easeInOut', duration: 0.6}}>
          Skinstric developed an A.I. that creates a<br/>highly-personalized routine tailored to<br/>what your skin needs.
        </motion.p>
      </div>
    </section>
  );
}
