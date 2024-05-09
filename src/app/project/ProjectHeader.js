import Link from "next/link";
import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import {useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import image1 from "@/app/assets/img/placeholder.jpg"
import Image from "next/image";

export default function ProjectHeader(){
    const backgroundImg = useRef(null);
    const title = useRef(null);
    const goBackButton = useRef(null);
    const scrollButton = useRef(null);

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
            y : 100,
            clipPath: "inset(0%)",
        }, 0);
        tl.to(title.current, {
            y: 100,
        }, 0);
        tl.to(title.current, {
            opacity: 1,
        }, 0)
        tl.to(scrollButton.current, {
            opacity: 0,
        }, 0)
        tl.to(goBackButton.current, {
            opacity: 1,
        }, 0.5)
    })
    return (
        <div className={"relative h-screen w-full"}>
            <Link ref={goBackButton} href={"/"}
                  className={"opacity-0 bg-black pt-2 pb-1.5 px-3 absolute z-10 top-64 left-20"}>
                ← Retour
            </Link>
            <div ref={backgroundImg} className="relative w-full h-full overflow-hidden">
                <Image className={"w-full h-full object-cover"} src={image1} alt={"random"}/>
                <div className={"absolute top-0 left-0 w-full h-full bg-black/40"}></div>
            </div>
            <div className={"absolute z-0 flex flex-col items-center justify-center top-0 h-full w-full "}>
                <h1 ref={title} className={"opacity-0 p-4 font-bold font-marbry text-4xl md:text-8xl mb-4"}>
                    Project Page
                </h1>
            </div>
            <div ref={scrollButton} className={"absolute bottom-20 flex w-full justify-center"}>
                <ScrollDownButton/>
            </div>
        </div>
    )
}