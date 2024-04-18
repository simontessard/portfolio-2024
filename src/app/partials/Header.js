import Logo from "@/app/assets/img/Logo.png";
import Image from "next/image";
import DesktopNav from "@/app/partials/DesktopNav";

export function Header() {
    return (
        <header>
            <span className="hidden absolute right-16 top-14 text-2xl px-2">🇫🇷</span>
            <div className="hidden bg-black p-2">
                <div className="container bg-black py-4 px-4 md:px-6 h-16 flex justify-between items-center rounded">
                    <Image
                        src={Logo}
                        width={20}
                        height={20}
                        alt="Logo S"
                    />
                    <nav className="md:w-1/3 text-sm text-white uppercase">
                        <ul className="flex flex-wrap justify-between w-full gap-4">
                            <li>Projects</li>
                            <li>Skills</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <DesktopNav />
        </header>
    );
}