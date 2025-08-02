'use client';
import { motion } from 'motion/react'
import DemographicSummary from "@/app/components/DemographicSummary";

export default function Page() {
  return (
    <section className="mt-[86px] px-8">
      {/* Header */}
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0%)' }}
        transition={{ ease: 'easeInOut', duration: .8, delay: 0.2 }}
        className="text-foreground">
        <h2 className="text-base font-semibold uppercase">
          A. I. Analysis
        </h2>
        <h1 className="text-4xl lg:text-6xl my-2 leading-12 tracking-tighter uppercase">
          Demographics
        </h1>
        <p className="text-sm leading-5 uppercase">
          Predicted Race & Age
        </p>
      </motion.div>
      {/* main content */}
      <DemographicSummary />
      
    </section>
  );
}
