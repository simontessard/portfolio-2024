"use client";
import {useLayoutEffect, useRef} from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

export function BigTitle({title, color, multipleWords = false}) {
    const splitText = useRef(null);

    useLayoutEffect(() => {
        if (splitText.current) {
            const text = SplitType.create(splitText.current, {types: 'chars'})
            const chars = splitText.current.querySelectorAll('.char');

            gsap.fromTo(chars , {
                opacity: 0,
                yPercent: 100,
            }, {
                scrollTrigger: {
                trigger: splitText.current,
                start: "top 85%",
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
        <h2 className={`font-sans text-${color} text-5xl md:text-9xl tracking-tight uppercase w-fit mb-12 md:mb-16`}>
           <div className="overflow-hidden italic pr-6">
              <span ref={splitText} className="block">{title}</span>
           </div>
        </h2>
    );
}