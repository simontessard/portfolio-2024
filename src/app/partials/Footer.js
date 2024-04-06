import Logo from '../assets/img/Logo.png';
import Image from 'next/image';
import Link from "next/link";
import bg from "@/app/assets/img/about-bg.png";
export function Footer() {
    return (
        <footer className="bg-black" style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container h-16 md:h-40 flex items-center justify-between max-md:px-6">
                <div className="flex flex-col items-start gap-2 text-sm md:text-3xl">
                    <Link href="" className="text-white text-center">Github <span className="ml-1">↗</span></Link>
                    <Link href="" className="text-white text-center">LinkedIn <span className="ml-1">↗</span></Link>
                </div>
                <Image
                    src={Logo}
                    height={20}
                    width={20}
                    alt="Picture of the author"
                />
                <p className="flex flex-col text-white text-center">
                    <span>developed by simon</span>
                    <span>designed by maxime</span>
                </p>
            </div>
        </footer>
    );
}