import DemographicSummary from "@/app/components/DemographicSummary";

export default function Page() {
  return (
    <section className="mt-[86px] px-8">
      {/* Header */}
      <div className="text-foreground">
        <h2 className="text-base font-semibold uppercase">
          A. I. Analysis
        </h2>
        <h1 className="text-6xl my-2 leading-12 -ml-1.5 tracking-tighter uppercase">
          Demographics
        </h1>
        <p className="text-sm leading-5 uppercase">
          Predicted Race & Age
        </p>
      </div>
      {/* main content */}
      <DemographicSummary />
      
    </section>
  );
}
