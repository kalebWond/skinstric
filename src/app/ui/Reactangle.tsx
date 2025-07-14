export default function Rectangle({ className }: { className: string }) {
  return (
    <div
      className={`absolute w-96 h-96 top-1/5 rotate-45 border-2 border-bluish border-dotted -z-1 ${className}`}
    ></div>
  );
}
