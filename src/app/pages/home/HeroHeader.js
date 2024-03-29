export function HeroHeader() {
  return (
      <div className="relative flex max-md:py-20 bg-gradient-to-br from-black to-gray-800 text-white h-[calc(100dvh_-_4rem)]">
          <div className="container flex max-md:flex-col items-center justify-between mx-auto w-full">
              <div className="flex flex-col justify-center max-md:text-center">
                  <h1 className="flex flex-col font-sans font-bold text-6xl md:text-9xl uppercase mb-4 md:mb-6">
                      <span>Simon</span>
                      <span>TESSARD</span>
                  </h1>
                  <h2 className="font-sans text-4xl md:text-8xl uppercase max-md:mb-4">
                      <span className="font-marbry">→</span> Front <br></br>
                      Developer
                  </h2>
              </div>
              <div className="flex flex-col text-center">
                  Scroll down
                  <span className="font-marbry text-lg">↓</span>
              </div>

          </div>
      </div>
  );
}