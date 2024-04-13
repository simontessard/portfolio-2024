"use client";
import {useLayoutEffect} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from '../assets/img/Logo.png';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DesktopNav() {
    useLayoutEffect(() => {
        const nav = document.querySelector(".js-desktop_nav");
        const firstSection = document.querySelector(".js-hero_header");

        gsap.to(nav, {
            x: -50,
            scrollTrigger: {
                trigger: firstSection,
                start: "top middle",
                scrub: 1,
            },
        });

        gsap.to('.js-nav_pointer', {
            x: '-3rem',
            scrollTrigger: {
                trigger: '.js-section_about',
                start: "top 50%",
                end: "+=100px",
                scrub: 1,
            },
        });

    }, []);
    return (
        <nav
            className="js-desktop_nav max-md:hidden fixed z-20 p-4 bg-white right-0 bottom-0 top-0 m-auto w-fit h-fit shadow">
            <ul className="flex flex-col items-center gap-1 text-black text-2xl">
                <li>•</li>
                <li>•</li>
                <Image
                    className={"invert size-10 rounded-full p-2.5 border"}
                    src={Logo}
                    height={30}
                    width={30}
                    alt="Picture of the author"
                />
                <li>•</li>
                <li>•</li>
            </ul>
            <span
                className={"js-nav_pointer absolute top-7 -right-full"}>⬅️</span>
        </nav>
    );
}