export function Skill({title, description, color}) {
  return (
    <a href="#" className="panel swiper-slide !h-52 !flex flex-col justify-between p-4 w-full !rounded bg-purple-500">
        <div className="self-end">
            <svg className={"size-16 md:size-20"} viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" fill="#1C1C1C"
                      d="M3.01609e-06 1.90813e-06L5.20275e-06 34.5L69 69L1.50804e-06 103.5L0 138L69 103.5V138L138 103.5V69V34.5L69 0V34.5L3.01609e-06 1.90813e-06ZM69 34.5V69V103.5L138 69L69 34.5Z"
                />
            </svg>
        </div>
        <div>
            <h3 className="text-4xl mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    </a>
  );
}