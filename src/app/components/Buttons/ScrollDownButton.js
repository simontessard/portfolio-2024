"use client"
import {useLayoutEffect} from "react";
import {useRef} from "react";
import {gsap} from "gsap";

export default function ScrollDownButton() {
    const arrow = useRef(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        // From up to text
        tl.to(arrow.current, {
            y: '100%',
            duration: .3,
        });
        // Go down out of the text
        tl.to(arrow.current, {
            y: '+=120%',
            delay: .7,
            duration: .3,
            onComplete: () => {
                gsap.delayedCall(1, () => {
                    tl.restart();
                });
            }
        }, .3);
    }, []);
    return (
        <button className={"relative overflow-hidden h-5 md:text-lg uppercase pr-6"}>
            Scroll to discover
            <span ref={arrow} className="absolute -top-full right-0 h-4 font-marbry text-xl md:text-2xl">↓</span>
        </button>
    );
}