"use client";
import {BigTitle} from "@/app/components/BigTitle";
import GithubButton from "@/app/components/Buttons/GithubButton";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";
import DownloadButton from "@/app/components/Buttons/DownloadButton";

export default function About(){
    const text = useRef(null);
    const square = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();

        // Desktop setup
        mm.add("(min-width: 800px)", () => {
            gsap.to([text.current], {
                scrollTrigger: {
                    trigger: text.current,
                    start: "bottom bottom",
                    scrub: 1,
                },
                y: -50,
            });
        });

        // Mobile setup
        mm.add("(max-width: 799px)", () => {
            gsap.to([text.current], {
                scrollTrigger: {
                    trigger: text.current,
                    start: "bottom bottom",
                    scrub: 1,
                },
                y: -25,
            });
        });

    });
    return (
        <section className="js-section_about bg-white pb-16 md:pb-24">
            <p className="container font-bold text-[12vw] -mt-6 md:-mt-24 mb-12">DEVELOPPEUR</p>
            <div className={"container flex max-md:flex-col md:items-center justify-between"}>
                <BigTitle title="à propos" color={"black"} multipleWords={true}/>
                <div className={"mb-12"}>
                    <GithubButton/>
                </div>
            </div>
            <div className="relative bg-white md:py-20 flex items-center justify-between max-md:mb-10">
                <div ref={square} className="size-60 md:size-[34rem] bg-black"></div>
                <p ref={text}
                   className="absolute max-w-2xl md:max-w-5xl md:ml-16 p-4 md:p-8 text-white md:text-5xl mix-blend-difference">
                    Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
                    integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                </p>
            </div>
            <div className={"container flex flex-col"}>
                <div className={"self-center md:self-end mb-12"}>
                    <DownloadButton/>
                </div>
            </div>
        </section>
    )
}