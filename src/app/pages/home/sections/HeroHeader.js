import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";

export function HeroHeader() {
  return (
          <div className="js-hero_header relative bg-black flex py-32 md:py-12 text-white h-screen md:h-dvh">
            <div className="container z-10 flex max-lg:flex-col items-center justify-between mx-auto w-full">
              <div className="flex flex-col justify-center max-md:text-center">
                  <h1 className="flex flex-col font-sans font-bold text-6xl md:text-9xl uppercase mb-4 md:mb-16">
                      <span className={"italic md:text-[20vh]"}>Simon</span>
                      <span className={"md:text-[20vh]"}>TESSARD</span>
                  </h1>
                  <span className="text-4xl md:hidden mt-2 mb-4">👨🏼‍💻</span>
                  <h2 className="flex font-sans text-4xl md:text-[13vh] uppercase max-md:mb-4">
                      <span className="font-marbry mr-3">→</span> Developer <br></br>
                  </h2>
              </div>
              <ScrollDownButton/>
          </div>
      </div>
  );
}