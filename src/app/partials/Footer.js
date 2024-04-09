import Logo from '../assets/img/Logo.png';
import Image from 'next/image';
import Link from "next/link";
import bg from "@/app/assets/img/about-bg.png";
export function Footer() {
    return (
        <footer className="bg-black pb-4" style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container h-16 md:h-40 flex items-center justify-between max-md:px-6 max-md:mb-6">
                <div className="flex flex-col items-start gap-2 text-sm md:text-3xl">
                    <Link href="" className="text-white text-center">Email <span className="ml-1 text-xl md:text-4xl font-marbry">↗</span></Link>
                    <Link href="" className="text-white text-center">Phone <span className="ml-1 text-xl md:text-4xl font-marbry">↗</span></Link>
                </div>
                <Image
                    src={Logo}
                    height={30}
                    width={30}
                    alt="Picture of the author"
                />
                <div className="flex flex-col items-start gap-2 text-sm md:text-3xl">
                    <Link href="" className="text-white text-center">Github <span className="ml-1 text-xl md:text-4xl font-marbry">↗</span></Link>
                    <Link href="" className="text-white text-center">LinkedIn <span className="ml-1 text-xl md:text-4xl font-marbry">↗</span></Link>
                </div>
            </div>
            <p className={"w-fit mx-auto text-xs text-white"}>© developed by Simon TESSARD, design by Maxime Le bec</p>
        </footer>
    );
}