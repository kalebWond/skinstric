"use client";
import { useState } from "react";
import MainButton from "../ui/MainButton";

export default function Page() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep(1);
    // console.log(e.target.values)
  }

  return (
    <section className="h-full flex justify-center items-center">
      <form onSubmit={onSubmitHandler} className="relative flex flex-col items-center">
        {step === 0 && (
          <>
            <label htmlFor="name" className="uppercase text-sm text-gray-400">
              Click to type
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[460px] text-foreground text-6xl text-center tracking-tighter border-b border-foreground outline-none"
              placeholder="Introduce Yourself"
            />
          </>
        )}
        {step === 1 && (
          <>
            <label htmlFor="location" className="uppercase text-sm text-gray-400">
              Click to type
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-[520px] text-foreground text-6xl text-center tracking-tighter border-b border-foreground outline-none"
              placeholder="Where are you from?"
            />
          </>
        )}
        <div className="absolute -z-1 top-1/2 left-1/2 -translate-1/2 w-[480px] h-[480px] border-2 border-dotted border-bluish rotate-45 an-rotate-fast"></div>
        <div className="absolute -z-1 top-1/2 left-1/2 -translate-1/2 w-[540px] h-[540px] border-2 border-dotted border-bluish opacity-60 rotate-45 animate-spin an-rotate-mid"></div>
        <div className="absolute -z-1 top-1/2 left-1/2 -translate-1/2 w-[600px] h-[600px] border-2 border-dotted border-bluish opacity-30 rotate-45 animate-spin an-rotate-slow"></div>
      </form>
      <div className="fixed bottom-12 left-11">
        <MainButton title="Back" className="" />
      </div>
    </section>
  );
}
