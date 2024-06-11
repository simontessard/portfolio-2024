import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function Title({ text }) {
    const title = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (title.current) {
            const splitText = new SplitType(title.current, { types: 'chars' });
            const chars = splitText.chars;

            gsap.fromTo(chars, {
                opacity: 0,
                yPercent: 100,
            }, {
                scrollTrigger: {
                    trigger: title.current,
                    start: "top 40%",
                    end: "bottom 80%",
                    scrub: 1,
                },
                yPercent: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.05,
            });
        }
    }, []);

    return (
        <div className={"absolute z-0 flex flex-col items-center justify-center top-0 h-full w-full"}>
            <div className="overflow-hidden p-4">
                <span ref={title} className={"font-bold font-sans text-5xl md:text-9xl mb-4"}>
                    {text}
                </span>
            </div>
        </div>
    );
}
