"use client";
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function Index() {

    return (
        <div className={"relative max-md:overflow-hidden text-white md:text-3xl uppercase mt-6 mb-20 md:mb-32"} >
            {
                phrases.map( (phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
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
            gsap.to(text.current, {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "bottom bottom",
                    end: "+=400px bottom",
                },
                opacity: 1,
                left: "200px",
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
                left: "50px",
                ease: "power3.Out"
            });
        });


    }, [])

    return <p className={"relative opacity-0"} ref={text}>{children}</p>
}