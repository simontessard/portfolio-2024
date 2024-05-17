import {Button} from "@/app/components/Buttons/Button";

export function Overview({techno}) {
    return (
        <div className={"bg-white w-full px-4 mb-12 md:mb-32"}>
            <div className={"container flex flex-col items-center justify-between text-black p-8"}>
                <div className={"flex justify-between w-full max-md:text-sm mb-8"}>
                    <Button text={"CODE"} href={"/"}/>
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