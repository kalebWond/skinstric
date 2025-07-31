"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import MainButton from "@/app/ui/MainButton";
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from "react";
import CameraSetup from "@/app/components/CameraSetup";
import PictureInstruction from "@/app/components/PictureInstruction";
import { API_PHASE_TWO, STORAGE_KEY_DEMOGRAPHIC } from "@/app/utils";

export default function Page() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false)

  useEffect(() => {
    let stream: MediaStream;

    async function initCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        });
        setAllowed(true); // This will trigger re-render and mount the video
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }

    initCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (allowed && videoRef.current) {
      const video = videoRef.current;
      const stream = video.srcObject as MediaStream;

      if (!stream) {
        navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        }).then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
          };
        });
      }
    }
  }, [allowed]);


  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData);
  };

    const uploadImage = async () => {
      try {
        setUploading(true);
        const response = await axios.post(API_PHASE_TWO, {
          image: capturedImage,
        });
        console.log("Upload success:", response.data);
        localStorage.setItem(STORAGE_KEY_DEMOGRAPHIC, JSON.stringify(response.data?.data));
        router.push("/analysis")
      } catch (error) {
        console.error("Upload error:", error);
      } finally {
        setUploading(false);
      }
    };

  return (
    <section className="h-screen">
      {!allowed && <CameraSetup />}
      {allowed && (
        <div className="relative h-full w-screen bg-black overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="absolute top-0 left-0 w-full h-full scale-x-[-1] object-cover"
          />
          <motion.button
            initial={{opacity: 0, y: '-40%'}}
            animate={{opacity: 1, y: '-50%'}}
            transition={{ease: "easeInOut", duration: 0.6}}
            onClick={handleCapture}
            className="absolute flex top-1/2 right-8 items-center cursor-pointer hover:scale-105 transition-[scale] focus:scale-105"
          >
            <p className="text-background font-semibold text-sm -tracking-normal uppercase mr-4">TAKE PICTURE</p>
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="31.0009" cy="31" r="27.5556" fill="#FCFCFC"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M27.0729 20.4013C26.598 20.5719 25.2004 21.7484 24.6738 22.4205C24.5209 22.6159 24.2655 22.6593 23.2694 22.6593C20.4047 22.6593 18.8323 23.4755 17.9123 25.4401L17.5215 26.2747V32.2093C17.5215 37.4902 17.5475 38.2079 17.7579 38.7253C18.3356 40.1466 19.4166 41.1454 20.8235 41.5577C21.8482 41.8579 40.1513 41.8579 41.176 41.5577C42.1719 41.2658 43.0658 40.6275 43.6212 39.8118C44.4826 38.5465 44.478 38.5872 44.478 32.1411V26.2747L44.0764 25.4164C43.5904 24.3777 42.5037 23.3395 41.5454 22.9986C41.1228 22.8482 40.2845 22.738 39.2249 22.6934L37.5661 22.6237L36.5549 21.6524C35.9987 21.1182 35.3767 20.589 35.1725 20.4764C34.6338 20.1794 27.8648 20.1165 27.0729 20.4013ZM34.3979 21.845C34.604 21.9223 35.2661 22.4596 35.8689 23.0387L36.965 24.0918L38.7862 24.1701C40.7635 24.2551 41.3361 24.4228 42.0482 25.1255C42.9111 25.9771 42.9006 25.8831 42.858 32.3977L42.8191 38.3254L42.3983 38.9168C42.1668 39.2421 41.7002 39.6617 41.3616 39.8493L40.7456 40.1904H30.9997H21.2539L20.6379 39.8493C20.2992 39.6617 19.8327 39.2421 19.6011 38.9168L19.1803 38.3254L19.1415 32.3977C19.0988 25.8585 19.0845 25.9826 19.9752 25.1232C20.7199 24.4046 21.2282 24.2554 23.2206 24.1701L25.0491 24.0918L26.0545 23.1098C27.537 21.6617 27.3823 21.7061 30.9562 21.7051C32.7299 21.7047 34.181 21.7636 34.3979 21.845ZM29.3554 25.868C25.9995 26.7979 23.9826 30.2039 24.8474 33.4808C25.1502 34.628 25.5468 35.3075 26.4639 36.2499C28.4025 38.2424 31.3864 38.7558 33.8513 37.5211C34.8388 37.0266 36.186 35.7328 36.6514 34.8325C37.7358 32.7348 37.5167 30.0836 36.105 28.2201C35.4172 27.3121 34.2736 26.4497 33.2481 26.0654C32.2063 25.6749 30.3851 25.5825 29.3554 25.868ZM38.2787 26.1831C38.0111 26.4749 37.9786 27.0365 38.2158 27.2706C38.3177 27.3711 38.8162 27.4343 39.5076 27.4343C40.4229 27.4343 40.6764 27.3876 40.8624 27.1848C41.1664 26.8532 41.151 26.5384 40.8147 26.2064C40.4262 25.8231 38.624 25.8066 38.2787 26.1831ZM33.0024 27.6205C33.9663 28.0561 34.9343 29.0178 35.3968 29.9997C35.7023 30.6481 35.763 30.9688 35.763 31.9364C35.763 33.356 35.3689 34.3167 34.3905 35.2822C33.428 36.232 32.4465 36.6191 30.9997 36.6191C29.5529 36.6191 28.5714 36.232 27.609 35.2822C26.6306 34.3167 26.2365 33.356 26.2365 31.9364C26.2365 30.9688 26.2971 30.6481 26.6027 29.9997C27.216 28.6976 28.4895 27.6418 29.8571 27.3013C30.6976 27.0921 32.1616 27.2407 33.0024 27.6205Z" fill="#1A1B1C"/>
              <circle cx="31" cy="31" r="30" stroke="#FCFCFC" strokeWidth="2"/>
            </svg>
          </motion.button>
          <canvas ref={canvasRef} className="hidden" />

          {capturedImage && (
              <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                src={capturedImage}
                alt="Captured"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div onClick={uploadImage} className="fixed bottom-12 right-40">
                <MainButton title="Proceed" className="text-background" right strokeColor="#FCFCFC"/>
              </div>
              <div onClick={() => setCapturedImage(null)} className="fixed bottom-12 left-11">
                <MainButton title="RETAKE" className="text-background" strokeColor="#FCFCFC"/>
              </div>
              </>
          )}
          { !capturedImage && (
            <div onClick={() => router.back()} className="fixed bottom-12 left-11">
                <MainButton title="BACK" className="text-background" strokeColor="#FCFCFC"/>
              </div>
          ) }

          {/* PICTURE FEEDBACK */}
          { capturedImage && (
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-background text-sm uppercase">
              Great shot
            </div>
          ) }

          { uploading && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center ">
              <svg style={{animationDuration: "15s"}} className="an-rotate-fast" width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="67.9996" cy="67.9997" r="57.7857" stroke="#fcfcfc"/>
                <circle cx="68" cy="68" r="51" fill="#1A1B1C"/>
                <path d="M100.668 35.412C92.3149 27.0382 80.7627 21.8569 68.0003 21.8569C65.0469 21.8569 62.1583 22.1344 59.3592 22.6647C64.1338 30.5633 81.5795 58.2549 84.9406 63.1803C85.5932 64.1371 86.753 62.2365 93.7783 48.6929L100.668 35.412Z" fill="#FCFCFC"/>
                <path d="M25.0882 51.004C30.5815 37.1459 42.5936 26.5816 57.3413 23.0942C59.0872 25.713 62.4221 30.8872 66.0668 36.6493L75.3267 51.2908H48.8858C36.1263 51.2908 28.6691 51.2077 25.0882 51.004Z" fill="#FCFCFC"/>
                <path d="M31.8694 96.7032C25.602 88.8246 21.8574 78.8495 21.8574 67.9998C21.8574 62.801 22.7172 57.803 24.3023 53.1402H39.1666C56.552 53.1402 56.9478 53.1674 56.3267 54.3294C55.0953 56.6338 36.8239 88.2621 31.8694 96.7032Z" fill="#FCFCFC"/>
                <path d="M76.9643 113.273C74.0646 113.843 71.0674 114.143 68.0003 114.143C54.1917 114.143 41.7998 108.077 33.3436 98.465C35.1707 94.4055 39.9295 85.9319 48.1717 72.0115C48.9468 70.7014 49.7323 69.781 49.917 69.966C50.1016 70.1503 56.6037 80.5196 64.3671 93.0077L76.9643 113.273Z" fill="#FCFCFC"/>
                <path d="M111.529 83.348C106.372 97.9733 94.0533 109.22 78.7841 112.876C74.5785 106.389 60.6125 83.9565 60.6125 83.6094C60.6125 83.4658 72.6814 83.348 87.4326 83.348H111.529Z" fill="#FCFCFC"/>
                <path d="M101.902 36.6966C109.5 44.922 114.143 55.9187 114.143 67.9998C114.143 72.923 113.372 77.6662 111.944 82.115H96.5965C86.6243 82.115 78.4651 81.9646 78.4651 81.7803C78.4651 81.3997 98.4368 43.0157 101.902 36.6966Z" fill="#FCFCFC"/>
                </svg>
                <p className="text-center mt-2 font-semibold uppercase tracking-wider text-background">Uploading Image ...</p>
            </div>
          ) }

          <PictureInstruction className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background" strokeColor="#FCFCFC" />
        </div>
      )}
    </section>
  );
}
