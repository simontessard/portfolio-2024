import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import {Shapes} from "@/app/pages/home/components/Shapes";

export function HeroHeader() {
  return (
          <div className="js-hero_header relative bg-black flex py-32 md:py-12 text-white h-screen md:h-dvh">
            <div className="container z-10">
                <div className="flex max-lg:flex-col justify-between items-center h-full">
                    <div className="flex flex-col justify-center max-md:text-center">
                        <div className="relative flex flex-col font-sans font-bold text-6xl md:text-9xl uppercase mb-4">
                            <div
                                className="absolute bottom-0 md:-top-6 max-md:right-0 max-md:mx-auto left-0 md:-left-6 -z-10 size-28 md:size-36 bg-blue-700 blur-2xl md:blur-3xl rounded-full "></div>
                            <span className={"italic md:text-[16vh]"}>Simon</span>
                            <div className="flex items-end">
                                <span className={"md:text-[16vh]"}>
                                    TESSARD
                                </span>
                                <span className="max-md:hidden block ml-4 text-6xl pb-5">👨🏼‍💻</span>
                            </div>
                        </div>
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