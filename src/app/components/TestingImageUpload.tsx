"use client";

import { useState } from "react";
import Camera from "./Camera";
import Gallery from "./Gallery";
import EscapeListener from "./EscapeListener";
import { useRouter } from "next/navigation";
import { motion } from 'motion/react';

export default function TestingImageUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()

  function onAllowClickedHandler() {
    setIsModalOpen(false);
    router.push("/testing/camera")
  }

  return (
    <div className="w-full flex justify-around">
      <motion.div
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{ease: 'easeInOut', duration: 0.6}}
      >
        <Camera isModalOpen={isModalOpen} toggleModal={() => setIsModalOpen(!isModalOpen)} onAllowClicked={onAllowClickedHandler} />
      </motion.div>
      <motion.div
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{ease: 'easeInOut', duration: 0.6, delay: 0.05}}
      >
        <Gallery disabled={isModalOpen} />
      </motion.div>
      <EscapeListener onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
