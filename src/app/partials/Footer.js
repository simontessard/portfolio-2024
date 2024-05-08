import Logo from '../assets/img/Logo.png';
import Image from 'next/image';
import Link from "next/link";
import bg from "@/app/assets/img/about-bg.png";
export function Footer() {
    return (
        <footer className="bg-black py-4 md:pb-8 md:pt-12" style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container max-w-none relative flex flex-col gap-8 md:items-center text-white justify-between px-6 md:px-10 mb-12">
                 <Link href="" className="text-center text-lg md:text-6xl uppercase">
                   <span className="mr-2 text-xl md:text-7xl font-marbry">↗</span>
                   simon.tessard@gmail.com
                 </Link>
                <div className="flex justify-center md:justify-around items-center gap-6 md:gap-10 text-sm md:text-2xl text-center uppercase">
                    <Link href="">
                        <span className="mr-2 text-xl md:text-3xl font-marbry">↗</span>
                        Github
                    </Link>
                    <Image
                        className={"max-md:size-6 md:size-8"}
                        src={Logo}
                        height={30}
                        width={30}
                        alt="Picture of the author"
                    />
                    <Link href="">
                        <span className="mr-2 text-xl md:text-3xl font-marbry">↗</span>
                        LinkedIn
                    </Link>
                </div>
            </div>
            <p className={"w-fit mx-auto uppercase text-xs md:text-sm text-white"}>© developed by Simon TESSARD, design by Maxime Le bec</p>
        </footer>
    );
}