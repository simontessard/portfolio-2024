import Link from "next/link";

export function Button({ text, href, color = "black" }) {
    return (
        <Link href={href} className={`relative inline-block group text-${color} uppercase w-fit rounded`}>
            <span className="mr-2 text-xl font-marbry">↗</span>
            <span>{text}</span>
            <div className={`absolute left-0 -bottom-0.5 w-full scale-0 md:group-hover:scale-100 md:group-hover:origin-bottom-left " +
                "ease-out duration-300 h-[1px] origin-bottom-right transition-transform bg-${color}`}></div>
        </Link>
    )
}