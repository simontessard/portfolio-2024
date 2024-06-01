import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

export function SquareImage({src}) {
    const imgContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to(imgContainer.current, {
                scrollTrigger: {
                    trigger: imgContainer.current,
                    start: "top 90%",
                    scrub: 1,
                },
                y: -80,
            });
        });
    });

    return (
        <div ref={imgContainer} className={"group overflow-hidden max-md:mx-auto max-md:max-h-72 md:max-w-lg w-full h-full md:aspect-square mb-6 md:mb-8"}>
            <img
                className={"w-full h-full object-cover md:group-hover:scale-100 scale-110 " +
                    "transition-transform delay-75 duration-500"}
                src={src} alt="random"/>
        </div>
    )
}