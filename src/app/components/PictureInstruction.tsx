'use client'
import { motion } from 'motion/react';

export default function PictureInstruction({className, strokeColor}: {className: string, strokeColor: string}) {
  return (<motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{ease: "easeInOut", duration: 0.6, type: 'spring'}}
           className={`flex flex-col items-center text-sm ` + className}>
            <p className="uppercase">To get better results make sure to have</p>
            <div className="flex mt-4 gap-8 px-3 uppercase">
              <p className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.707107" y="6" width="7" height="7" transform="rotate(-45 0.707107 6)" stroke={strokeColor}/>
                </svg>
                <span className="">Neutral expression</span>
              </p>
              <p className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.707107" y="6" width="7" height="7" transform="rotate(-45 0.707107 6)" stroke={strokeColor}/>
                </svg>
                <span className="">Frontal Pose</span>
              </p>
              <p className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.707107" y="6" width="7" height="7" transform="rotate(-45 0.707107 6)" stroke={strokeColor}/>
                </svg>
                <span className="">Adequate Lighting</span>
              </p>
            </div>
          </motion.div>
          )
}