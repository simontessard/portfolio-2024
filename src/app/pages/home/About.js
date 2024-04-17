import {BigTitle} from "@/app/components/BigTitle";
import {Button} from "@/app/components/Button";

export default function About(){
    return (
        <section className="js-section_about bg-white py-8 pb-20 md:pt-20">
            <div className={"container max-md:px-4"}>
                <BigTitle title="à propos" color={"black"}/>
            </div>
            <div className="relative bg-white md:py-20 flex items-center justify-between">
                <div className="size-60 md:size-[30rem] bg-black"></div>
                <p className="absolute max-w-2xl md:ml-12 p-8 text-white md:text-3xl mix-blend-difference">
                    Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
                    integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                </p>
            </div>
        </section>
    )
}