import Logo from "@/app/assets/img/Logo.png";
import Image from "next/image";

export function Header() {
    return (
        <header>
            <span className="max-md:hidden absolute right-16 top-14 text-2xl px-2">🇫🇷</span>
            <div className="md:hidden bg-black p-2">
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
            <div className="max-md:hidden fixed z-20 p-4 rounded-full bg-white right-16 bottom-0 top-0 m-auto w-fit h-fit shadow">
                <nav>
                    <ul className="flex flex-col gap-2 text-black text-2xl">
                        <li> • </li>
                        <li> • </li>
                        <li> • </li>
                        <li> • </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}