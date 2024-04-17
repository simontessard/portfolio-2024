"use client"
import { useParams } from "next/navigation";
import Template from "@/app/utils/PageTransition";
import {useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";
import {Button} from "@/app/components/Button";
import BottomPreviem from "@/app/project/BottomPreview";

export default function ProjectPage() {
    const params = useParams();

    const backgroundImg = useRef(null);
    const title = useRef(null);
    const section = useRef(null);
    const goBackButton = useRef(null);
    const contentSection = useRef(null);

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
            y: 100,
        }, 0);
        tl.to(title.current, {
            opacity: 1,
        }, 0)
        tl.to(goBackButton.current, {
            opacity: 1,
        }, 0.5)

        const tl2 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 60%",
                    scrub: 1,
                },
            }
        );
        tl2.to(contentSection.current, {
            y: -150,
        }, 0);
    }, []);
    return (
        <section className="flex flex-col items-center text-white">
            <Template/>
            <div className={"relative h-screen w-full overflow-hidden"}>
                <Link ref={goBackButton} href={"/"} className={"opacity-0 absolute z-10 top-64 left-20"}>← Retour</Link>
                <img className={"w-full h-full object-cover"} ref={backgroundImg} src="https://picsum.photos/2000/1100"
                     alt="random"/>
                <div className={"absolute z-0 flex flex-col items-center justify-center top-0 h-full w-full "}>
                    <h1 ref={title} className={"opacity-0 p-4 font-bold font-marbry text-4xl md:text-8xl mb-4"}>
                        Project Page </h1>
                </div>
            </div>
            <div ref={section} className={"flex flex-col gap-12 items-center w-full z-10"}>
                <div className={"bg-white w-full mb-32"}>
                    <div className={"container flex items-center justify-between text-black p-8"}>
                        <span className={"font-bold text-black rounded"}>ID : {params.id}</span>
                        <Button text={"SEE LIVE APP"} href={"/"}/>
                    </div>
                </div>
                <div ref={contentSection}>
                    <p className={"font-marbry md:text-3xl p-4 text-center max-w-4xl mb-12"}>Suspendisse potenti. Quisque vel
                        molestie felis,
                        eget viverra velit. Duis
                        eget placerat
                        lectus. In vitae purus nec metus feugiat lacinia.
                        Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis,
                        hendrerit a
                        nunc et, accumsan consequat tortor.
                        Nulla feugiat, erat a mattis maximus, erat libero ultricies elit, nec ultrices risus magna eu
                        mi.</p>
                    <div className={"flex max-md:flex-col gap-6 items-center"}>
                        <div className={"overflow-hidden w-full h-full aspect-square"}>
                            <img
                                className={"aspect-square max-w-lg object-cover md:hover:scale-100 scale-110 transition-transform duration-500 w-full h-full mb-8"}
                                src="https://picsum.photos/1900/1100" alt="random"/>
                        </div>
                        <p className={"font-marbry md:text-4xl p-4 text-center max-w-2xl"}>Suspendisse potenti. Quisque
                            vel
                            molestie felis,
                            eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis.
                        </p>
                    </div>
                    <div className={"flex max-md:flex-col gap-6 items-center"}>
                        <p className={"font-marbry md:text-4xl p-4 text-center max-w-2xl"}>Suspendisse potenti. Quisque
                            vel
                            molestie felis,
                            eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis.
                        </p>
                        <img className={"aspect-square max-w-lg object-cover w-full mb-8"}
                             src="https://picsum.photos/1800/1100" alt="random"/>
                    </div>
                </div>
                <BottomPreviem id={params.id}/>
            </div>
        </section>
    );
}