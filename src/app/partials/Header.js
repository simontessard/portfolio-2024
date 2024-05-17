"use client";
import Logo from "@/app/assets/img/Logo.png";
import Image from "next/image";
import DesktopNav from "@/app/partials/DesktopNav";
import {useLayoutEffect, useState, useRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const tl = useRef(null);

    const nav = useRef(null);
    const header = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isOpen]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(gsap, ScrollTrigger);
            gsap.set(nav.current, {zIndex: 30, yPercent: -150});

            // Hamburger icon animation
            tl.current = gsap
                .timeline({paused: true})
                // Hamburger icon animation
                .to('.hamburgerLines', {
                    xPercent: 100,
                    stagger: 0.05,
                    duration: 0.4,
                })
                // Cross icon animation
                .set('.crossButton', {display: 'block'}, 0.5)
                .to('.cross:nth-child(1)', {
                    x: '1.5rem',
                    y: '1rem',
                    duration: 0.3
                }, 0.5)
                .to('.cross:nth-child(2)', {
                    x: '-1.5rem',
                    y: '1rem',
                    duration: 0.3,
                }, 0.6)
                // Nav animation
                .to(nav.current, {
                    yPercent: 0,
                    duration: 0.6,
                    ease: "power1.inOut",
                }, 0.4)
                .from('.navElement', {
                    yPercent: 100,
                    stagger: 0.2,
                    duration: 0.4,
                }, 0.9);

            // Show header on scroll
            const showAnim = gsap.from(header.current, {
                yPercent: -100,
                paused: true,
                duration: 0.4
            }).progress(1);

            ScrollTrigger.create({
                start: "top top",
                end: "max",
                onUpdate: (self) => {
                   self.direction === -1 ? showAnim.play() : showAnim.reverse();
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <header className="fixed z-40 w-full top-0 md:hidden">
            <div ref={header} className="container relative z-40 bg-black py-4 px-6 h-16 flex justify-between items-center">
                <Image
                    src={Logo}
                    width={20}
                    height={20}
                    alt="Logo S"
                />
                    <button onClick={handleClick} className="relative w-6 h-5 overflow-hidden">
                        <div className="hamburgerLines absolute top-0 text-white h-0.5 bg-white w-6"></div>
                        <div className="hamburgerLines absolute top-2 text-white h-0.5 bg-white w-6"></div>
                        <div className="hamburgerLines absolute top-4 text-white h-0.5 bg-white w-6"></div>
                    </button>
                    <button onClick={handleClick} className="crossButton hidden relative w-6 h-6 overflow-hidden">
                        <div className="cross absolute -top-2 -left-full text-white h-0.5 bg-white w-6 rotate-45"></div>
                        <div className="cross absolute -top-2 -right-full text-white h-0.5 bg-white w-6 rotate-[135deg]"></div>
                    </button>
            </div>
            <div ref={nav} className="bg-black">
                <ul
                    className="container flex flex-col gap-14 items-center justify-center h-dvh pb-16 bg-black text-white text-5xl">
                    <Link href={"/"} onClick={handleClick} className="overflow-hidden"><p
                        className="navElement">Accueil</p></Link>
                    <Link href={"/projects"} onClick={handleClick} className="overflow-hidden"><p
                        className="navElement">Projets</p></Link>
                </ul>
            </div>
            <DesktopNav/>
        </header>
    );
}