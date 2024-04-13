export function Button({ children, color, href }) {
    return (
        <a href={href} className={`bg-${color}-500 relative text-black uppercase rounded bg-red-200 overflow-hidden group`}>
            <span className={"py-2"}>{children}</span>
            <div className={"absolute -left-full group-hover:translate-x-full transition-transform -bottom-2 h-1 w-full bg-blue-400"}></div>
        </a>
    )
}