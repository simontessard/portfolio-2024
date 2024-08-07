"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "@/app/assets/img/Logo.png";
import Image from "next/image";
import {useGSAP} from "@gsap/react";

export function Loader() {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef(null);
    const loader = useRef(null);
    const flash = useRef(null);
    const bar = useRef(null);

    useGSAP(() => {

            const tl = gsap.timeline();

                tl.add(
                    gsap.to(loader.current,
                        {
                        delay: 1,
                        duration: 0.4,
                        yPercent: 100,
                    }))

                tl.add(
                    gsap.to(flash.current,
                    {
                        duration: 0.6,
                        xPercent: 200,
                    }), 1.4);

                tl.add(
                    gsap.to(container.current, {
                        duration: 0.6,
                        zIndex: -1,
                        opacity: 0,
                    }), 2);

                tl.add(
                    gsap.to(bar.current, {
                        duration: 1.2,
                        xPercent: 100,
                        onComplete: () => {
                            gsap.set(bar.current, {opacity: 0});
                        }
                    }), 0);
    });

    return (
        <div ref={container} className="fixed top-0 left-0 w-screen h-dvh bg-black z-50 flex justify-center items-center">
            <div className="overflow-hidden">
                    <Image
                        ref={loader}
                        className={"relative size-8 md:size-14 z-10"}
                        src={Logo}
                        alt="Picture of the author"
                    />
            </div>
            <div ref={flash} className="absolute -left-full bg-white w-full h-full"></div>
            <div ref={bar} className="absolute -left-full bottom-0 bg-white h-2.5 w-full"></div>
        </div>
    );

}