import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import {Shapes} from "@/app/pages/home/components/Shapes";

export function HeroHeader() {
  return (
          <div className="js-hero_header relative bg-black flex py-32 md:py-12 text-white h-screen md:h-dvh">
            <div className="container z-10">
                <div className="flex max-lg:flex-col justify-between items-center h-full">
                    <div className="flex flex-col justify-center max-md:text-center">
                        <h1 className="flex flex-col font-sans font-bold text-6xl md:text-9xl uppercase mb-4">
                            <span className={"italic md:text-[16vh]"}>Simon</span>
                            <span className={"md:text-[16vh]"}>
                            TESSARD
                            <span className="max-md:hidden ml-3 text-6xl">👨🏼‍💻</span>
                        </span>
                        </h1>
                        <span className="text-4xl md:hidden mt-2 mb-4">👨🏼‍💻</span>
                    </div>
                    <Shapes/>
                </div>
                <div className="block md:-mt-8 mx-auto w-fit">
                    <ScrollDownButton text="Scrollez pour découvrir"/>
                </div>
            </div>
          </div>
  );
}