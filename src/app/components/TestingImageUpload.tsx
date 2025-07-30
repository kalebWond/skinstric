"use client";

import { useState } from "react";
import Camera from "./Camera";
import Gallery from "./Gallery";
import EscapeListener from "./EscapeListener";
import { useRouter } from "next/navigation";

export default function TestingImageUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()

  function onAllowClickedHandler() {
    setIsModalOpen(false);
    router.push("/testing/camera")
  }

  return (
    <div className="w-full flex justify-around">
      <Camera isModalOpen={isModalOpen} toggleModal={() => setIsModalOpen(!isModalOpen)} onAllowClicked={onAllowClickedHandler} />
      <Gallery disabled={isModalOpen} />
      <EscapeListener onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
