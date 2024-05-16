import Logo from '../assets/img/Logo.png';
import Image from 'next/image';
import Link from "next/link";
import bg from "@/app/assets/img/about-bg.png";
export function Footer() {
    return (
        <footer className="bg-black py-6 md:pt-16" style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container">
                <div
                    className="relative flex flex-col gap-4 md:gap-8 md:items-center text-white justify-between mb-8 md:mb-12">
                    <Link href="" className="text-center text-lg md:text-6xl uppercase">
                        <span className="mr-2 text-xl md:text-7xl font-marbry">↗</span>
                        simon.tessard@gmail.com
                    </Link>
                    <div
                        className="grid grid-cols-2 items-center w-full gap-2 md:gap-14 text-sm md:text-3xl text-center uppercase">
                        <Link className="flex items-end" href="">
                            <span className="mr-2 text-xl md:text-4xl font-marbry">↗</span>
                            Github
                        </Link>
                        <Link className="flex items-end ml-auto" href="">
                            <span className="mr-2 text-xl md:text-4xl font-marbry">↗</span>
                            LinkedIn
                        </Link>
                    </div>
                </div>
                <div className={"grid max-md:gap-2 md:grid-cols-3 uppercase max-md:text-center text-xs text-white"}>
                    <p>© developed by Simon TESSARD</p>
                    <p className="md:mx-auto">© Made in 2024</p>
                    <p className="md:ml-auto">© design by Maxime Le bec</p>
                </div>
            </div>
        </footer>
    );
}