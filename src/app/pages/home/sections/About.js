"use client";
import {BigTitle} from "@/app/components/BigTitle";
import GithubButton from "@/app/components/Buttons/GithubButton";
import {useRef} from "react";
import DownloadButton from "@/app/components/Buttons/DownloadButton";
import Paragraph from "@/app/pages/home/components/about/Paragraph";

export default function About(){
    const square = useRef(null);

    return (
        <section className="js-section_about bg-white py-16 md:py-24">
            <div className={"container flex max-md:flex-col md:items-center justify-between"}>
                <BigTitle title="à propos" color={"black"} multipleWords={true}/>
                <div className={"mb-12"}>
                    <GithubButton/>
                </div>
            </div>
            <div className="relative container bg-white md:py-20 flex items-center justify-between max-md:mb-10">
                <div ref={square} className="absolute -left-20 md:-left-52 top-4 md:top-20 size-60 md:size-[36rem] bg-black"></div>
                <div ref={square} className="size-60 md:size-[36rem] bg-white"></div>
                <Paragraph/>
            </div>
            <div className={"container flex flex-col"}>
                <div className={"self-center md:self-end mb-12"}>
                    <DownloadButton/>
                </div>
            </div>
        </section>
    )
}