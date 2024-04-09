export function BigTitle({ title, color }) {
    return (
        <h2 className={`font-sans text-${color} text-6xl md:text-9xl tracking-tighter uppercase my-12`}>{title}</h2>
    );
}