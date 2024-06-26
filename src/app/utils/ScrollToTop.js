"use client";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useLayoutEffect} from "react";
export function ScrollToTop() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.to(".scrollToTop", {
                opacity: 1,
                duration: 0.01,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".js-hero_header",
                    start: "bottom center",
                    scrub: 1,
                },
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <div className="scrollToTop fixed opacity-0 z-20 bottom-3 md:bottom-6 right-3 md:right-6 p-2 bg-black border border-white text-white">
            <button className="size-7 md:size-8 font-marbry text-lg md:text-xl" onClick={handleClick}>↑</button>
        </div>
    );
}