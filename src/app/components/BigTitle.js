export function BigTitle({ title, color }) {
    return (
        <h2 className={`font-sans text-${color} text-6xl md:text-9xl tracking-tighter uppercase w-fit my-12 pb-6`}>
            {title}
        </h2>
    );
}