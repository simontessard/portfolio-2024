"use client";
import {BigTitle} from "@/app/components/BigTitle";
import GithubButton from "@/app/components/Buttons/GithubButton";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

export default function About(){
    const text = useRef(null);
    const square = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to([text.current], {
            scrollTrigger: {
                trigger: text.current,
                start: "bottom bottom",
                end: "top 35%",
                scrub: 1,
            },
            y: -100,
        });
        gsap.to([square.current], {
            scrollTrigger: {
                trigger: text.current,
                start: "top bottom",
                end: "top 35%",
                scrub: 1,
            },
            y: -50,
        });
    });
    return (
        <section className="js-section_about bg-white py-8 pb-20 md:pt-20">
            <div className={"container flex flex-col max-md:px-4"}>
                <BigTitle title="à propos" color={"black"}/>
                <div className={"self-end mb-8"}>
                    <GithubButton/>
                </div>
            </div>
            <div className="relative bg-white md:py-20 flex items-center justify-between">
                <div ref={square} className="size-72 md:size-[34rem] bg-black"></div>
                <p ref={text} className="absolute max-w-2xl md:ml-12 p-8 text-white md:text-3xl mix-blend-difference">
                    Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
                    integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                </p>
            </div>
        </section>
    )
}