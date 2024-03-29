import Logo from "@/app/assets/img/Logo.svg";
import Image from "next/image";

export function Header() {
    return (
        <header className="bg-gray-700">
            <div className="container px-4 md:px-2 h-16 flex justify-between items-center">
                <Image
                    src={Logo}
                    alt="Logo S"
                />
                <nav className="md:w-1/3 text-white font-marbry">
                    <ul className="flex justify-between w-full gap-4">
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}