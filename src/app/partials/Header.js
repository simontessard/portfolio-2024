import Logo from "@/app/assets/img/Logo.svg";
import Image from "next/image";

export function Header() {
    return (
        <header className=" flex items-center px-6 h-20 bg-red-700">
            <div className="container">
                <Image
                    src={Logo}
                    width={30}
                    height={30}
                    alt="Logo S"
                />
            </div>
        </header>
    );
}