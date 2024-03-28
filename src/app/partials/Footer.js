import Logo from '../assets/img/Logo.svg';
import Image from 'next/image';
export function Footer() {
    return (
        <footer className="flex items-center justify-between px-6 h-20 bg-green-700 mb-8">
            <p className="text-white text-center">Footer</p>
            <Image
                src={Logo}
                width={30}
                height={30}
                alt="Picture of the author"
            />
            <p className="text-white text-center">Github</p>
        </footer>
    );
}