"use client";

import { useState } from "react";
import axios from "axios";
import { z } from 'zod';
import { API_PHASE_ONE, STORAGE_KEY } from "../utils";
import MainButton from "../ui/MainButton";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const nameSchema = z.string().min(1, 'Name is required').regex(/^[A-Za-z\s]+$/, "Name must only contain letters");
const locationSchema = z.string().min(1, 'Location is required').regex(/^[A-Za-z\s]+$/, "Name must only contain letters");

export default function TestingForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function onProceedHandler() {
    router.replace(window.location.pathname);
  }

  const handleNext = async () => {
    setError('');
    if (step === 1) {
      const result = nameSchema.safeParse(name);
      if (!result.success) {
        setError(result.error.issues[0].message);
        return;
      }
      setStep(2);
    } else if (step === 2) {
      const result = locationSchema.safeParse(location);
      if (!result.success) {
        setError(result.error.issues[0].message);
        return;
      }

      // Call API
      try {
        setLoading(true);
        setStep(3);
        await axios.post(API_PHASE_ONE, { name, location });
        setSuccess(true);
        Cookies.set(STORAGE_KEY, JSON.stringify({name, location}), {expires: 7});
        // Optionally reset or navigate
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Something went wrong.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {step === 1 && (
        <>
          <label htmlFor="name" className="uppercase text-sm text-gray-400">
            Click to type
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
            }
            className="w-[460px] text-foreground text-6xl text-center tracking-tighter border-b border-foreground outline-none"
            placeholder="Introduce Yourself"
            autoFocus
          />
        </>
      )}
      {step === 2 && (
        <>
          <label htmlFor="location" className="uppercase text-sm text-gray-400">
            Click to type
          </label>
          <input
            id="location"
            type="text"
            name="location"
            value={location}
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              setLocation(
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
              )
            }
            className="w-[520px] text-foreground text-6xl text-center tracking-tighter border-b border-foreground outline-none"
            placeholder="Where are you from?"
            autoFocus
          />
        </>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {loading && (
        <p className="text-lg text-gray-600 flex gap-1">
          Processing <span className="an-bounce"> &#8226;</span>
          <span className="an-bounce an-delay-small"> &#8226;</span>
          <span className="an-bounce an-delay-mid"> &#8226;</span>
        </p>
      )}
      {success && (
        <div className="flex flex-col items-center gap-4 z-10">
          <p className="text-2xl font-normal text-foreground tracking-wide">
            Thank you!
          </p>
          <p className="text-lg text-gray-600">Proceed for the next step</p>
        </div>
      )}
      <svg
        className="absolute -z-1 top-2/3 left-1/2 -translate-1/2 w-[600px] h-[600px] rotate-45 an-rotate-fast"
        viewBox="0 0 604 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M302 1L603 302L302 603L1 302L302 1Z"
          stroke="#A0A4AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 8"
        />
      </svg>
      <svg
        className="absolute -z-1 top-2/3 left-1/2 -translate-1/2 w-[680px] h-[680px] rotate-45 opacity-60 an-rotate-mid"
        viewBox="0 0 604 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M302 1L603 302L302 603L1 302L302 1Z"
          stroke="#A0A4AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 8"
        />
      </svg>
      <svg
        className="absolute -z-1 top-2/3 left-1/2 -translate-1/2 w-[760px] h-[760px] rotate-45 opacity-30 an-rotate-slow"
        viewBox="0 0 604 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M302 1L603 302L302 603L1 302L302 1Z"
          stroke="#A0A4AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 8"
        />
      </svg>

      {success && (
        <div onClick={onProceedHandler} className="fixed bottom-12 right-40">
          <MainButton title="Proceed" className="" right/>
        </div>
      )}
    </div>
  );
}
