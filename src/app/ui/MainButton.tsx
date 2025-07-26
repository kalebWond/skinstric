
export default function MainButton({ right, title, id, className }: { right?: boolean, title: string, id?: string, className: string }) {
  return (
    <div
      id={id}
      className={`main-button group inline-flex ${right ? 'flex-row-reverse' : 'flex-row'} items-center justify-center gap-4 whitespace-nowrap rounded-md font-semibold text-[#1A1B1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 -translate-y-1/2 px-3 py-1 ` + className}
    >
        <span className="relative inline-flex justify-center items-center rotate-45 p-3 main-button__icon group-hover:before:scale-200 group-hover:after:scale-150 group-focus:before:scale-200 group-focus:after:scale-150">
            <svg className={right ? 'rotate-135' : '-rotate-45'} width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.714355 5.99998L10.1429 11.4436V0.556396L0.714355 5.99998Z" fill="#1A1B1C"/>
            </svg>
        </span>
      <span className={`uppercase text-[12px] leading-4 ${right ? 'group-hover:-translate-x-8 group-focus:-translate-x-8' : 'group-hover:translate-x-8 group-focus:translate-x-8'} transition-all duration-500 ease-[cubic-bezier(.08,.5,.44,.96)]`}>{title}</span>
    </div>
  );
}
