import {BigTitle} from "@/app/components/BigTitle";

export default function About(){
    return (
        <section className="js-section_about bg-white py-20 max-md:px-4">
            <div className={"container"}>
                <BigTitle title="à propos" color={"black"}/>
            </div>
            <div className="relative bg-white py-20 flex items-center justify-between">
                <div className="size-40 md:size-[30rem] bg-black"></div>
                <p className="absolute max-w-2xl ml-12 p-8 text-white md:text-3xl mix-blend-difference">
                    Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
                    integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                </p>
            </div>
        </section>
    )
}