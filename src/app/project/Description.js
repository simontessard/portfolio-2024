"use client";
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Index({skills}) {

    return (
        <div className={"relative max-md:overflow-hidden text-white text-sm md:text-3xl uppercase mt-6 mb-20 md:mb-32"} >
            {
                skills.map( (skill, index) => {
                    return <AnimatedText key={index}>{skill}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        // Desktop setup
        mm.add("(min-width: 800px)", () => {
            gsap.fromTo(text.current, {
                    left: "-10rem",
            },
            {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "bottom bottom",
                    end: "+=400px bottom",
                },
                opacity: 1,
                left: "0",
                ease: "power3.Out"
            });
        });

        // Mobile setup
        mm.add("(max-width: 799px)", () => {
            gsap.to(text.current, {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "bottom bottom",
                    end: "+=400px bottom",
                },
                opacity: 1,
                left: "1rem",
                ease: "power3.Out"
            });
        });


    }, [])

    return <p className={"relative opacity-0 flex gap-4 md:gap-6 mb-4 md:mb-8"} ref={text}>
        <span className="text-xs md:text-sm font-mono md:pt-1.5"> ■ </span>
        {children}
    </p>
}