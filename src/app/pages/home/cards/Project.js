export function Project({ type, title, tag, description }) {
    const spanClass = type === 'small' ? 'md:col-span-2' : 'md:col-span-3';

    return (
        <a href="#" className={`${spanClass} flex flex-col justify-between p-4 h-72 bg-amber-600`}>
            <span className="font-marbry font-light text-5xl self-end p-4">↗</span>
            <div className="flex flex-col gap-3">
                <h4 className="text-4xl">{title}</h4>
                <span className="w-fit bg-white text-black text-xs pt-2 pb-1.5 px-3 rounded">{tag}</span>
                <p>{description}</p>
            </div>
        </a>
    );
}