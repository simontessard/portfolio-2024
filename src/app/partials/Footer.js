import Logo from '../assets/img/Logo.svg';
import Image from 'next/image';
export function Footer() {
    return (
        <footer className="bg-green-700">
            <div className="container h-16 flex items-center justify-between max-md:px-6">
                <p className="text-white text-center">Footer</p>
                <Image
                    src={Logo}
                    alt="Picture of the author"
                />
                <p className="text-white text-center">Github</p>
            </div>
        </footer>
    );
}