"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "@/app/assets/img/Logo.png";
import Image from "next/image";

export function Loader() {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef(null);
    const loader = useRef(null);
    const flash = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline();

                tl.add(
                    gsap.to(loader.current,
                        {
                        delay: 0.8,
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

            return () => ctx.revert();
        }, []);
    });

    return (
        <div ref={container} className="fixed top-0 left-0 w-screen h-dvh bg-black z-50 flex justify-center items-center">
            <div className="overflow-hidden">
                    <Image
                        ref={loader}
                        className={"relative size-8 md:size-16 z-10"}
                        src={Logo}
                        alt="Picture of the author"
                    />
            </div>
            <div ref={flash} className="absolute -left-full bg-white w-full h-full"></div>
        </div>
    );

}