import {Button} from "@/app/components/Buttons/Button";

export function Overview({techno, github, desc, date}) {
    return (
        <div className={"bg-white w-full px-4 mb-12 md:mb-32"}>
            <div className={"container flex flex-col justify-between text-black py-10 md:py-14"}>
                <p className="max-md:text-sm md:text-lg mb-4 md:mb-6">{date}</p>
                <h2 className={"font-marbry text-base md:text-2xl md:max-w-5xl mb-8"}>{desc}</h2>
                <ul className={"flex gap-4 md:gap-8 w-full text-white md:text-lg font-marbry mb-8 md:mb-12"}>
                    {techno.map((tagItem, index) => (
                        <li key={index} className={"bg-black w-fit px-3 md:px-5 pt-2 md:pt-3 pb-2"}>{tagItem}</li>
                    ))}
                </ul>
                <div className={"flex justify-between gap-4 w-full max-md:text-sm"}>
                    <Button text={"CODE"} href={github}/>
                    <Button text={"LIVE APP"} href={"/"}/>
                </div>
            </div>
        </div>
    )
}