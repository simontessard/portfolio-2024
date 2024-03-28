export function HeroHeader() {
  return (
      <div className="flex justify-between items-center bg-gray-700 text-white mx-auto w-full h-[calc(100dvh_-_4rem)]">
          <div className="flex flex-col justify-center ">
              <h1 className="flex flex-col text-9xl uppercase mb-4">
                  <span>Simon</span>
                  <span>TESSARD</span>
              </h1>
              <h2 className="flex flex-col gap-2 text-7xl uppercase mb-4">
                  <span> Front </span>
                  <span> Developer </span>
              </h2>
          </div>
          <div>Scroll down</div>
      </div>
  );
}