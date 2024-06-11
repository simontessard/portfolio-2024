"use client";
import Link from "next/link";
export function Footer() {
    return (
            <footer className="bg-black py-8 md:py-16">
                <div className="container flex flex-col text-white text-xl md:text-3xl uppercase">
                    <h3 className="font-marbry font-semibold text-3xl md:text-9xl text-center mb-8 md:mb-16">Get in
                        touch</h3>
                    <div className="bg-white w-full h-0.5 mb-8 md:mb-16"></div>
                    <div className="flex max-md:flex-col md:justify-between gap-4 md:gap-4">
                        <Link href="">
                            <span className="mr-2 text-xl md:text-4xl font-marbry">↗</span>
                            Github
                        </Link>
                        <Link href="">
                            <span className="mr-2 text-xl md:text-4xl font-marbry">↗</span>
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </footer>
    );
}