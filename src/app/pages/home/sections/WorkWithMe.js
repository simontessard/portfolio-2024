"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {ContactButton} from "@/app/components/Buttons/ContactButton";

export function WorkWithMe() {
    const section = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            gsap.to(section.current, {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 50%",
                    scrub: 1,
                },
                y: -75,
            });
        });
    }, []);
  return (
    <section ref={section} className={"bg-white py-16 md:py-28 max-md:mb-8"}>
        <div className="container mx-auto text-black">
                <h2 className="text-3xl md:text-8xl font-bold mb-8 md:mb-20 font-marbry">Travaillons ensemble</h2>
                <p className={"text-sm md:text-xl mb-4 md:mb-6"}>Vous avez un projet sur lequel vous aimeriez que je travaille ? Vous avez besoin de
                    mes compétences pour un projet ?</p>
                <p className={"text-sm md:text-xl mb-4 md:mb-6"}>Je suis disponible pour des missions freelance ou en CDI.</p>
                <p className={"text-sm md:text-xl mb-8 md:mb-12"}>N'hésitez pas à me contacter pour en discuter.</p>
                <div className={"max-md:mx-auto md:ml-auto w-fit"}>
                    <ContactButton href={"#"} text={"Contactez moi"}/>
                </div>
        </div>
    </section>
  );
}