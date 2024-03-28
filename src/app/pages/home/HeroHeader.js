export function HeroHeader() {
  return (
      <div className="flex max-md:py-20 bg-gradient-to-br from-black to-gray-800 text-white h-[calc(100dvh_-_4rem)]">
          <div className="container flex max-md:flex-col items-center justify-between mx-auto w-full">
              <div className="flex flex-col justify-center max-md:text-center">
                  <h1 className="flex flex-col text-6xl md:text-9xl uppercase mb-4">
                      <span>Simon</span>
                      <span>TESSARD</span>
                  </h1>
                  <h2 className="flex flex-col gap-2 text-4xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 uppercase mb-4">
                      <span> Front </span>
                      <span> Developer </span>
                  </h2>
              </div>
              <div>Scroll down</div>
          </div>
      </div>
  );
}