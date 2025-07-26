import { Roobert } from "@/app/ui/fonts/font";

export default function ProgressFill({
  radius,
  stroke,
  progress,
}: {
  radius: number;
  stroke: number;
  progress: number;
}) {
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="relative">
      {/* Background track */}
      <circle
        stroke="#C1C2C3"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Foreground progress */}
      <circle
        stroke="#1A1B1C"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
          transition: "stroke-dashoffset 0.5s cubic-bezier(.08,.5,.44,.96)",
        }}
      />

      {/* Percentage text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={40}
        fill="#1A1B1C"
        fontWeight="normal"
        fontFamily={Roobert.style.fontFamily}
      >
        {Math.round(progress)}
      </text>
      {/* Superscript % */}
      <text
        x="63%" // slightly right of the number
        y="52%" // slightly above the number
        fontSize={28}
        fill="#1A1B1C"
        fontWeight="normal"
        fontFamily={Roobert.style.fontFamily}

      >
        %
      </text>
    </svg>
  );
}
