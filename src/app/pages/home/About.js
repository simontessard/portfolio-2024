import {BigTitle} from "@/app/components/BigTitle";

export default function About(){
    return (
        <section className="container max-md:px-4">
            <BigTitle title="à propos"/>
            <div className="relative flex items-center justify-between">
                <div className="size-40 md:size-96 bg-white"></div>
                <p className="absolute max-w-2xl p-8 text-white md:text-3xl mix-blend-difference">
                    Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
                    integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                </p>
            </div>
        </section>
    )
}