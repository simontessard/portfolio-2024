import Link from "next/link";

export function ContactButton({ text, href,  }) {
    return (
        <Link href={href}
              className={"relative inline-block group text-black uppercase w-fit px-4 md:px-6 pb-2.5 pt-3 border border-black"}>
            <span className={"relative z-10 md:group-hover:text-white transition-colors leading-none md:text-2xl"}>{text}</span>
            <span
                className="relative z-10 md:group-hover:text-white transition-colors ml-2 md:ml-3 leading-none text-xl md:text-3xl font-marbry">↗</span>
            <div
                className={"absolute z-0 left-0 bottom-0 w-full scale-0 md:group-hover:scale-100 md:group-hover:origin-bottom-left " +
                    "ease-out duration-300 h-full origin-bottom-right transition-transform bg-black"}></div>
        </Link>
    )
}