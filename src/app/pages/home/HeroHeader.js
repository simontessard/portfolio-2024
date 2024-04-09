export function HeroHeader() {
  return (
          <div className="js-hero_header relative flex max-md:py-20 text-white h-screen md:h-dvh">
          <div className="container flex max-md:flex-col items-center justify-between mx-auto w-full">
              <div className="flex flex-col justify-center max-md:text-center">
                  <h1 className="flex flex-col font-sans font-bold text-6xl md:text-9xl uppercase mb-4 md:mb-6">
                      <span className={"italic"}>Simon</span>
                      <span>TESSARD</span>
                  </h1>
                  <span className="text-4xl md:hidden mt-2 mb-4">👨🏼‍💻</span>
                  <h2 className="font-sans text-4xl md:text-8xl uppercase max-md:mb-4">
                      <span className="font-marbry">→</span> Front <br></br>
                      Developer
                  </h2>
              </div>
              <div className="flex flex-col text-center uppercase animate-bounce md:mr-40">
                  <span className="text-sm">Scroll</span>
                  <span className="font-marbry text-xl">↓</span>
              </div>
          </div>
      </div>
  );
}