export default function DottedRectangle({
  width,
  height,
  opacity,
  className,
}: {
  width: number;
  height?: number;
  opacity: string;
  className?: string;
}) {
  return (
    <svg
      style={{
        width: `${width}px`,
        height: `${height ?? width}px`,
      }}
      className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-${opacity} ${className}`}
      viewBox="0 0 604 604"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M302 1L603 302L302 603L1 302L302 1Z"
        stroke="#A0A4AB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.5 8" 
      />
    </svg>
  );
}
