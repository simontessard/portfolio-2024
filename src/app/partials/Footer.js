import Logo from '../assets/img/Logo.png';
import Image from 'next/image';
import Link from "next/link";
import bg from "@/app/assets/img/about-bg.png";
export function Footer() {
    return (
        <footer className="bg-black pb-4" style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container relative md:h-40 flex max-md:flex-col md:items-center text-white justify-between max-md:px-6 max-md:mb-6">
                <div className="flex flex-col items-start gap-2 md:gap-3 text-sm md:text-4xl max-md:mb-2">
                    <Link href="" className="text-center uppercase">
                        <span className="mr-2 text-xl md:text-4xl font-marbry">↗</span>
                        simon.tessard@gmail.com
                    </Link>
                    <Link href="" className="text-center">
                    <span className="mr-2 text-xl md:text-4xl font-marbry">↗</span>
                        06 72 34 78 98
                    </Link>
                </div>
                <Image
                    className={"absolute top-0 right-0 left-0 bottom-0 m-auto max-md:size-6"}
                    src={Logo}
                    height={30}
                    width={30}
                    alt="Picture of the author"
                />
                <div className="flex flex-col items-start gap-2 md:gap-3 text-sm md:text-4xl text-center uppercase">
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
            <p className={"w-fit mx-auto uppercase text-xs text-white"}>© developed by Simon TESSARD, design by Maxime Le bec</p>
        </footer>
    );
}