import DottedRectangle from "./DottedRectangle";

export default function Camera() {
    return (
        <div className="relative group p-5">
            <svg className="group-hover:scale-80 group-hover:rotate-30 transition duration-500 cursor-pointer" width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="67.9996" cy="67.9997" r="57.7857" stroke="#1A1B1C"/>
                <circle cx="68" cy="68" r="51" fill="#1A1B1C"/>
                <path d="M100.668 35.412C92.3149 27.0382 80.7627 21.8569 68.0003 21.8569C65.0469 21.8569 62.1583 22.1344 59.3592 22.6647C64.1338 30.5633 81.5795 58.2549 84.9406 63.1803C85.5932 64.1371 86.753 62.2365 93.7783 48.6929L100.668 35.412Z" fill="#FCFCFC"/>
                <path d="M25.0882 51.004C30.5815 37.1459 42.5936 26.5816 57.3413 23.0942C59.0872 25.713 62.4221 30.8872 66.0668 36.6493L75.3267 51.2908H48.8858C36.1263 51.2908 28.6691 51.2077 25.0882 51.004Z" fill="#FCFCFC"/>
                <path d="M31.8694 96.7032C25.602 88.8246 21.8574 78.8495 21.8574 67.9998C21.8574 62.801 22.7172 57.803 24.3023 53.1402H39.1666C56.552 53.1402 56.9478 53.1674 56.3267 54.3294C55.0953 56.6338 36.8239 88.2621 31.8694 96.7032Z" fill="#FCFCFC"/>
                <path d="M76.9643 113.273C74.0646 113.843 71.0674 114.143 68.0003 114.143C54.1917 114.143 41.7998 108.077 33.3436 98.465C35.1707 94.4055 39.9295 85.9319 48.1717 72.0115C48.9468 70.7014 49.7323 69.781 49.917 69.966C50.1016 70.1503 56.6037 80.5196 64.3671 93.0077L76.9643 113.273Z" fill="#FCFCFC"/>
                <path d="M111.529 83.348C106.372 97.9733 94.0533 109.22 78.7841 112.876C74.5785 106.389 60.6125 83.9565 60.6125 83.6094C60.6125 83.4658 72.6814 83.348 87.4326 83.348H111.529Z" fill="#FCFCFC"/>
                <path d="M101.902 36.6966C109.5 44.922 114.143 55.9187 114.143 67.9998C114.143 72.923 113.372 77.6662 111.944 82.115H96.5965C86.6243 82.115 78.4651 81.9646 78.4651 81.7803C78.4651 81.3997 98.4368 43.0157 101.902 36.6966Z" fill="#FCFCFC"/>
            </svg>

            <div className="absolute top-0 left-[78%] group-hover:translate-x-[-30%] group-hover:scale-90 transition duration-500 -z-1">
                <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 59L63 4" stroke="#1A1B1C"/>
                    <circle cx="64.5" cy="2.5" r="2" stroke="#1A1B1C"/>
                </svg>
                <p className="absolute -top-1/2 left-[110%] w-40 text-sm uppercase">
                    Allow A.I. <br />to Scan Your Face 
                </p>
            </div>

            {/* Rectangles */}
            <DottedRectangle width={300} opacity="100" className="rotate-30 an-rotate-slow" />
            <DottedRectangle width={350} opacity="60" className="rotate-30 an-rotate-mid" />
            <DottedRectangle width={400} opacity="30" className="rotate-30 an-rotate-fast" />
        </div>
    )
}