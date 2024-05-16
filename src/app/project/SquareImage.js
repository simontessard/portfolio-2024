export function SquareImage({src}) {
    return (
        <div className={"group overflow-hidden max-md:mx-auto max-md:max-h-72 md:max-w-lg w-full h-full md:aspect-square mb-4 md:mb-8"}>
            <img
                className={"w-full h-full object-cover md:group-hover:scale-100 scale-110 " +
                    "transition-transform delay-75 duration-500"}
                src={src} alt="random"/>
        </div>
    )
}