"use client";
import { useState } from "react";
import DottedRectangle from "../ui/DottedRectangle";
import axios from "axios";
import { API_PHASE_TWO, STORAGE_KEY_DEMOGRAPHIC } from "../utils";
import Modal from "./modal";
import { useRouter } from 'next/navigation';
import clsx from "clsx";

export default function Gallery({disabled}: {disabled: boolean}) {
    const router = useRouter();
    const [uploading, setUploading] = useState<boolean>(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      await uploadImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async (base64: string) => {
    try {
      setUploading(true);
      const response = await axios.post(API_PHASE_TWO, {
        image: base64,
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
    <>
    <div className={clsx("relative p-5 group transition-opacity duration-300", {
      "opacity-40 pointer-events-none": disabled
    })}>
      <label aria-disabled htmlFor="file-gallery" className="flex justify-center">
        <svg
          className="group-hover:scale-80 transition duration-500 cursor-pointer"
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="67.9996" cy="67.9997" r="57.7857" stroke="#1A1B1C" />
          <circle
            cx="68"
            cy="68"
            r="50"
            fill="#FCFCFC"
            stroke="#1A1B1C"
            strokeWidth="2"
          />
          <path
            d="M78.3214 68C85.3631 68 91.0714 62.2916 91.0714 55.25C91.0714 48.2084 85.3631 42.5 78.3214 42.5C71.2798 42.5 65.5714 48.2084 65.5714 55.25C65.5714 62.2916 71.2798 68 78.3214 68Z"
            fill="#1A1B1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 68C17 71.9604 17.4514 75.8154 18.3056 79.5163C23.5265 102.136 43.7939 119 68 119C94.8673 119 116.882 98.2244 118.856 71.862C118.951 70.5872 119 69.2993 119 68C119 39.8335 96.1665 17 68 17C39.8335 17 17 39.8335 17 68ZM35.3365 67.7257L19.3825 78.7708C18.6175 75.3024 18.2143 71.6983 18.2143 68C18.2143 40.5041 40.5041 18.2143 68 18.2143C95.4959 18.2143 117.786 40.5041 117.786 68C117.786 69.5412 117.716 71.0661 117.579 72.5716L82.9447 91.8127C80.4324 93.2084 77.3343 92.9968 75.0351 91.2724L43.855 67.8874C41.3462 66.0058 37.9149 65.9406 35.3365 67.7257Z"
            fill="#1A1B1C"
          />
        </svg>
      </label>
      <input
        id="file-gallery"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden opacity-0"
        disabled={disabled}
      />

      <div className="absolute bottom-0 right-[78%] group-hover:translate-x-[30%] group-hover:scale-90 transition duration-500 z-0">
        <svg
          width="67"
          height="60"
          viewBox="0 0 67 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.66917 56.874C1.66917 56.0456 2.34074 55.374 3.16917 55.374C3.9976 55.374 4.66917 56.0456 4.66917 56.874C4.66917 57.7025 3.9976 58.374 3.16917 58.374C2.34074 58.374 1.66917 57.7025 1.66917 56.874ZM0.669174 56.874C0.669174 55.4933 1.78846 54.374 3.16917 54.374C3.68565 54.374 4.16555 54.5306 4.56396 54.799L66.3374 -1.52588e-05L67.001 0.748062L5.26634 55.5127C5.52114 55.9044 5.66917 56.3719 5.66917 56.874C5.66917 58.2547 4.54988 59.374 3.16917 59.374C1.78846 59.374 0.669174 58.2547 0.669174 56.874Z"
            fill="#1A1B1C"
          />
        </svg>

        <p className="absolute -bottom-1/2 right-[110%] w-40 text-sm text-right uppercase">
          Allow A.I. <br />
          to Scan Your Face
        </p>
      </div>
      {/* Rectangles */}
      <DottedRectangle width={300} opacity={1} className="rotate-30 an-rotate-slow" />
      <DottedRectangle width={360} opacity={.6} className="rotate-30 an-rotate-mid" />
      <DottedRectangle width={420} opacity={.3} className="rotate-30 an-rotate-fast" />
      
    </div>
    {/* MODAL */}
      { uploading && (
        <Modal>
          <p className="text-base text-foreground font-semibold uppercase animate-pulses">
              Preparing your analysis...
          </p>
          <DottedRectangle width={400} opacity={1} className="an-rotate-fast" />
          <DottedRectangle width={480} opacity={.6} className="rotate-10 an-rotate-mid" />
          <DottedRectangle width={560} opacity={.3} className="rotate-20 an-rotate-slow" />
        </Modal>
      ) }
    </>
  );
}
