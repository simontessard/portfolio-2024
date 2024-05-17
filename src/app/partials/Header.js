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

    const handleClick = () => {setIsOpen(!isOpen)}

    useEffect(() => {
        if (isOpen) {
            tl.current.play();
        } else {
            tl.current.progress(1).reverse();
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
                .to(['.hamburgerLines', '.hamburgerDesktop'], {
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
                    stagger: 0.1,
                    duration: 0.3,
                }, 1);

            // Show header on scroll
            const showAnim = gsap.from(header.current, {
                yPercent: -100,
                paused: true,
                duration: 0.4
            }).progress(1);

            if (!isOpen) {
                ScrollTrigger.create({
                    start: "top top",
                    end: "max",
                    onUpdate: (self) => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse();
                    }
                });
            }
        });
        return () => ctx.revert();
    }, [isOpen]);

    return (
        <header className="fixed z-40 w-full top-0 h-16 md:h-28">
            <div ref={header} className="relative z-40 bg-black md:py-4">
                <div className="max-md:container bg-black py-4 px-6 md:px-12 flex justify-between items-center">
                    <Image src={Logo} width={20} height={20} alt="Logo S"/>
                    <button onClick={handleClick} className="relative w-6 h-6 overflow-hidden md:hidden">
                        <div className="hamburgerLines absolute top-0.5 text-white h-0.5 bg-white w-6"></div>
                        <div className="hamburgerLines absolute top-2.5 text-white h-0.5 bg-white w-6"></div>
                        <div className="hamburgerLines absolute top-[1.125rem] text-white h-0.5 bg-white w-6"></div>
                    </button>
                    <button onClick={handleClick} className="overflow-hidden max-md:hidden h-6 text-white text-lg uppercase">
                        <div className="hamburgerDesktop">Menu</div>
                    </button>
                    <button onClick={handleClick} className="crossButton hidden relative w-6 h-6 overflow-hidden">
                        <div className="cross absolute -top-2 -left-full text-white h-0.5 bg-white w-6 rotate-45"></div>
                        <div
                            className="cross absolute -top-2 -right-full text-white h-0.5 bg-white w-6 rotate-[135deg]"></div>
                    </button>
                </div>
            </div>
            <div ref={nav} className="bg-black">
                <div className="container h-screen">
                    <ul
                        className="flex flex-col gap-14 items-center justify-center h-full pb-16 md:pb-28 bg-black text-5xl">
                        <Link href={"/"} onClick={handleClick}
                              className="flex gap-6 overflow-hidden text-gray-400 md:hover:text-white transition-colors">
                            <span className="text-base">01</span>
                            <p className="navElement">Accueil</p>
                        </Link>
                        <Link href={"/projects"} onClick={handleClick}
                              className="flex gap-6 overflow-hidden text-gray-400 md:hover:text-white transition-colors">
                            <span className="text-base">02</span>
                            <p className="navElement">Projets</p>
                        </Link>
                        <Link href={"mailto:simon.tessard@gmail.com"}
                              className="flex gap-6 overflow-hidden text-gray-400 md:hover:text-white transition-colors">
                            <span className="text-base">03</span>
                            <p className="navElement">Contact</p>
                        </Link>
                    </ul>
                </div>
            </div>
            <DesktopNav/>
        </header>
    );
}