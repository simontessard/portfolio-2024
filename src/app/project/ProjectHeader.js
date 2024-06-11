import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import GoBackButton from "@/app/components/Buttons/GoBackButton";
import Title from "@/app/project/Title";

export default function ProjectHeader({ text, img }) {
    const backgroundImg = useRef(null);
    const goBackButton = useRef(null);
    const scrollButton = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top",
                end: "+=100px",
                scrub: 1,
            },
        });

        tl.fromTo(backgroundImg.current, {
            clipPath: "inset(30%)",
        }, {
            y: 100,
            clipPath: "inset(0%)",
        }, 0);

        tl.to(scrollButton.current, {
            opacity: 0,
        }, 0);

        tl.to(goBackButton.current, {
            opacity: 1,
        }, 0.5);
    }, []);

    return (
        <div className={"relative h-screen w-full"}>
            <div className="max-md:hidden opacity-0 absolute z-10 top-64 left-4 md:left-20" ref={goBackButton}>
                <GoBackButton />
            </div>
            <div ref={backgroundImg} className="relative w-full h-full overflow-hidden">
                <Image className={"w-full h-full object-cover"} width={'2000'} height={'2000'} src={img} alt={"random"} />
                <div className={"absolute top-0 left-0 w-full h-full bg-black/40"}></div>
            </div>
                <Title text={text} />
            <div ref={scrollButton} className={"absolute bottom-32 md:bottom-20 flex w-full justify-center"}>
                <ScrollDownButton />
            </div>
        </div>
    );
}