import Link from "next/link";
export function Project({ type, title, tag, description, id, color }) {
    const spanClass = type === 'small' ? 'md:col-span-2' : 'md:col-span-3';

    return (
        <Link href={`/project/${id}`} className={`${spanClass} flex flex-col justify-between p-6 h-72 ${color}`}>
            <span className="font-marbry font-light text-5xl self-end">↗</span>
            <div className="flex flex-col gap-3">
                <h4 className="text-4xl">{title}</h4>
                <div className="flex gap-4">
                    {tag.map((tagItem, index) => (
                        <span key={index} className="w-fit bg-white text-black text-xs pt-2 pb-1.5 px-3 rounded">{tagItem}</span>
                    ))}
                </div>
                <p className="line-clamp-3 text-sm">{description}</p>
            </div>
        </Link>
    );
}