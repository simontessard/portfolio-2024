import github from "@/app/assets/svg/github.svg";
import Image from "next/image";

export default function GithubButton() {
    return (
        <a href=""
           className={"group overflow-hidden relative md:hover:bg-black md:hover:text-white  transition-colors flex items-center h-10 w-fit border border-black"}>
            <Image className={"md:group-hover:-translate-x-full duration-500 delay-150 transition-transform size-10"}
                   src={github} alt={""}/>
            <span
                className={"px-4 pt-1 md:group-hover:-translate-x-10 transition-transform delay-75 duration-500 uppercase"}> Mon Github</span>
            <span
                className={"absolute flex items-center justify-center pt-1 size-10 z-10 -bottom-32 right-0 md:group-hover:-translate-y-32 duration-500 transition-transform bg-white h-full"}>
                    </span>
            <span
                className={"opacity-0 scale-50 absolute flex items-center justify-center pt-1 size-10 z-10 top-0 right-0 md:group-hover:opacity-100 md:group-hover:scale-100 duration-500 transition-all text-2xl font-thin font-marbry bg-none text-black h-full"}>
                    ↗ </span>
        </a>
    );
}