import bg from '@/app/assets/img/about-bg.png';
export function HeroHeader() {
  return (
          <div className="relative flex max-md:py-20 text-white h-[calc(100dvh_-_4rem)] md:h-dvh"
              // style={{backgroundImage: `url(${bg.src})`}}
          >
          <div className="container flex max-md:flex-col items-center justify-between mx-auto w-full"
              >
              <div className="flex flex-col justify-center max-md:text-center">
                  <h1 className="flex flex-col font-sans font-bold text-6xl md:text-9xl uppercase mb-4 md:mb-6">
                      <span>Simon</span>
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