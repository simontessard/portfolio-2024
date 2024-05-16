export function BigTitle({ title, color, multipleWords = false }) {
    const [firstWord, ...restOfWords] = title.split(' ');
    const restOfTitle = restOfWords.join(' ');

    return (
        <h2 className={`font-sans text-${color} text-5xl md:text-9xl tracking-tight uppercase w-fit mb-12 md:mb-16`}>
            {multipleWords ? (
                <>
                    <span className={"mr-3 md:mr-8"}>{firstWord}</span>
                    <span className="italic">{restOfTitle}</span>
                </>
            ) : (
                <span className="italic">{title}</span>
            )}
        </h2>
    );
}