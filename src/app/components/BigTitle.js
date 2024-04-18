export function BigTitle({ title, color }) {
    const firstThreeLetters = title.substring(0, 3);
    const restOfTitle = title.substring(3);

    return (
        <h2 className={`font-sans text-${color} text-5xl md:text-9xl tracking-tighter uppercase w-fit my-12 pb-6`}>
            <span className="italic mr-4">{firstThreeLetters}</span>
            {restOfTitle}
        </h2>
    );
}