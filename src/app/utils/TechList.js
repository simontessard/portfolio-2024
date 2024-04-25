"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Inspired : https://creative-portfolio-tutorial.vercel.app/about */
const TechList = () => {
    const component = useRef(null);

    const slice = {
        items: [
            { tech_color: "#61DBFB", tech_name: "React" },
            { tech_color: "#42b883", tech_name: "Vue" },
            { tech_color: "#C62828", tech_name: "Angular" },
        ],
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400); },
                    ease: "power1.inOut",
                },
            );
        }, component);
        return () => ctx.revert(); // cleanup!
    }, []);

    return (
        <section className="wrapper overflow-hidden" ref={component}>
            {slice.items.map(({ tech_color, tech_name }, index) => (
                <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 md:gap-6 font-marbry text-slate-700"
                    aria-label={tech_name || ""}>
                    {Array.from({ length: 15 }, (_, index) => (
                        <React.Fragment key={index}>
                            <span className={"tech-item text-3xl md:text-8xl font-extrabold uppercase tracking-tighter"}
                                  style={{ color: index % 2 === 0 ? tech_color : "inherit",}}>
                                {tech_name}
                            </span>
                            <span className="text-xs md:text-xl font-mono"> ■ </span>
                        </React.Fragment>))}
                </div>
            ))}
        </section>
    );
};

export default TechList;