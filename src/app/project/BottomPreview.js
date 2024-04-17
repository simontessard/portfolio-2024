import Link from "next/link";
import image1 from "@/app/assets/img/placeholder.jpg"
import image2 from "@/app/assets/img/placeholder-2.png";
import Image from "next/image";

export default function BottomPreviem({id}) {
    return (
        <div className={"flex w-full"}>
            <Link href={`/project/${id + 1}`}
                  className={"group relative overflow-hidden flex flex-col items-center justify-center w-1/2 aspect-square"}>
                <div className={"relative z-20 overflow-hidden text-center"}>
                    <div
                        className={"md:group-hover:-translate-y-full transition-transform duration-500 leading-10 text-xl mb-2"}>
                        PREV
                    </div>
                    <p className={"md:group-hover:-translate-y-2 transition-transform duration-500 text-4xl md:text-7xl"}>Woota</p>
                    <div
                        className={"absolute bottom-0 -left-full md:group-hover:translate-x-full transition-transform duration-500 w-full h-[1px] bg-white"}></div>
                </div>
                <div
                    className={"absolute md:group-hover:opacity-0 transition-opacity duration-500 z-10 top-0 w-full h-full bg-red-700"}></div>
                <Image className={"absolute md:group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"}
                     src={image2} alt={"random"}/>
            </Link>
            <Link href={`/project/${id + 1}`}
                  className={"group relative overflow-hidden flex flex-col items-center justify-center w-1/2 aspect-square"}>
                <div className={"relative z-20 overflow-hidden text-center"}>
                    <div
                        className={"md:group-hover:-translate-y-full transition-transform duration-500 leading-10 text-xl mb-2"}>
                        NEXT
                    </div>
                    <p className={"md:group-hover:-translate-y-2 transition-transform duration-500 text-4xl md:text-7xl"}>Title</p>
                    <div
                        className={"absolute bottom-0 -left-full md:group-hover:translate-x-full transition-transform duration-500 w-full h-[1px] bg-white"}></div>
                </div>
                <div
                    className={"absolute md:group-hover:opacity-0 transition-opacity duration-500 z-10 top-0 w-full h-full bg-blue-700"}></div>
                <Image className={"absolute md:group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"}
                     src={image1} alt={"random"}/>
            </Link>
        </div>
    )
}