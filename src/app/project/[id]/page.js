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
    }, []);
    return (
        <section className="flex flex-col items-center max-md:px-4 text-white">
            <Template/>
            <div className={"relative"}>
                <img ref={backgroundImg} src="https://picsum.photos/2000/1100" alt="random"/>
                <div className={"absolute flex flex-col items-center justify-center top-0 h-full w-full "}>
                    <h1 ref={title} className={"p-4 font-bold font-marbry text-4xl md:text-7xl mb-4"}>Project
                        Page</h1>
                    <span className={"mb-4 p-2 font-bold text-black rounded"}>ID : {params.id}</span>
                </div>
            </div>
            <p className={"p-4 max-w-2xl"}>Suspendisse potenti. Quisque vel molestie felis, eget viverra velit. Duis eget placerat
                lectus. In vitae purus nec metus feugiat lacinia.
                Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis, hendrerit a
                nunc et, accumsan consequat tortor.
                Nulla feugiat, erat a mattis maximus, erat libero ultricies elit, nec ultrices risus magna eu mi.</p>
            <img className={"w-[600px]"} src="https://picsum.photos/1900/1100" alt="random"/>
        </section>
    );
}