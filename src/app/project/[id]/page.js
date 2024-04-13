"use client"
import { useParams } from "next/navigation";
import Template from "@/app/utils/PageTransition";
import {useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function ProjectPage() {
    const params = useParams();

    const backgroundImg = useRef(null);
    const title = useRef(null);
    const section = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top",
                    end: "+=100px",
                    scrub: 1,
                },
            }
        );
        tl.fromTo(backgroundImg.current, {
            clipPath: "inset(25%)",
        }, {
            y : 150,
            clipPath: "inset(0%)",
        }, 0);
        tl.to(title.current, {
            y: -100,
        }, 0);

        const tl2 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 60%",
                    end: "+=300px",
                    scrub: 1,
                },
            }
        );
        tl2.to(section.current, {
            y: -100,
        }, 0);
    }, []);
    return (
        <section className="flex flex-col items-center text-white">
            <Template/>
            <div className={"relative h-screen w-full overflow-hidden"}>
                <img className={"w-full h-full object-cover"} ref={backgroundImg} src="https://picsum.photos/2000/1100" alt="random"/>
                <div className={"absolute flex flex-col items-center justify-center top-0 h-full w-full "}>
                    <h1 ref={title} className={"p-4 font-bold font-marbry text-4xl md:text-7xl mb-4"}>Project
                        Page</h1>
                </div>
            </div>
            <div ref={section} className={"flex flex-col gap-12 items-center w-full z-10"}>
                <div className={"flex items-center justify-between bg-white text-black p-8 w-full"}>
                    <span className={"font-bold text-black rounded"}>ID : {params.id}</span>
                    <p>VOIR LE SITE EN LIVE</p>
                </div>
                <p className={"font-marbry md:text-3xl p-4 text-center max-w-4xl"}>Suspendisse potenti. Quisque vel
                    molestie felis,
                    eget viverra velit. Duis
                    eget placerat
                    lectus. In vitae purus nec metus feugiat lacinia.
                    Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis,
                    hendrerit a
                    nunc et, accumsan consequat tortor.
                    Nulla feugiat, erat a mattis maximus, erat libero ultricies elit, nec ultrices risus magna eu
                    mi.</p>
                <div className={"flex max-md:flex-col gap-12 w-full justify-between mb-12"}>
                    <img className={"w-[600px]"} src="https://picsum.photos/1800/1100" alt="random"/>
                    <img className={"w-[600px]"} src="https://picsum.photos/1700/1100" alt="random"/>
                </div>
                <img className={"w-[600px] mb-8"} src="https://picsum.photos/1900/1100" alt="random"/>
                <p className={"font-marbry md:text-5xl p-4 text-center max-w-4xl"}>Suspendisse potenti. Quisque vel
                    molestie felis,
                    eget viverra velit
                    Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis,
                    hendrerit a
                    nunc et, accumsan consequat tortor.
                    Nulla feugiat, erat a mattis maximus, erat libero ultricies elit, nec ultrices risus magna eu
                    mi.</p>
                <bouton>BOUTON DE CONTACT</bouton>
            </div>
        </section>
    );
}