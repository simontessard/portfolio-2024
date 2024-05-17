import {Button} from "@/app/components/Buttons/Button";

export function Overview({techno, github, desc, date}) {
    return (
        <div className={"bg-white w-full px-4 mb-12 md:mb-32"}>
            <div className={"container flex flex-col justify-between text-black py-10 md:py-14"}>
                <p className="md:text-lg mb-4 md:mb-6">{date}</p>
                <h2 className={"font-marbry text-lg md:text-3xl md:max-w-5xl mb-8"}>{desc}</h2>
                <div className={"flex max-md:flex-col justify-end gap-2 md:gap-10 w-full max-md:text-sm mb-8"}>
                    <Button text={"CODE"} href={github}/>
                    <Button text={"LIVE APP"} href={"/"}/>
                </div>
                <ul className={"flex gap-4 md:gap-8 w-full text-white md:text-lg font-marbry"}>
                    {techno.map((tagItem, index) => (
                        <li key={index} className={"bg-black w-fit px-3 md:px-5 pt-2 md:pt-3 pb-2"}>{tagItem}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}