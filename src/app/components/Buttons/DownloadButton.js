
export default function DownloadButton() {
    return (
        <a href="" className={"group relative flex items-center gap-2.5 overflow-hidden"}>
            <span className="inline-block absolute -top-5 scale-50 text-xs md:text-lg leading-none font-mono
                            md:group-hover:translate-y-5 md:group-hover:scale-100 transition-transform
                            duration-300 delay-75 pb-0.5"> ■ </span>
            <span className="inline-block md:group-hover:translate-y-full md:group-hover:scale-50
            transition-transform duration-300 delay-75 text-xs leading-none md:text-lg font-mono pb-0.5"> ■ </span>
            <span className={"text-xs md:text-base pt-1 uppercase"}>Download my CV</span>
            <span className={"inline-block absolute bottom-0 bg-black w-full h-[2px]"}></span>
            <span className={"inline-block md:group-hover:translate-x-52 duration-500 delay-75 transition-transform absolute -left-3 bottom-0 bg-white w-3 h-[2px]"}></span>
        </a>
    );
}