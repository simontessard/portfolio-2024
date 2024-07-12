import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

export default function Paragraph({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();

        // Desktop setup
        mm.add("(min-width: 800px)", () => {
            gsap.to([text.current], {
                scrollTrigger: {
                    trigger: text.current,
                    start: "bottom bottom",
                    scrub: 1,
                },
                y: -50,
            });
        });

        // Mobile setup
        mm.add("(max-width: 799px)", () => {
            gsap.to([text.current], {
                scrollTrigger: {
                    trigger: text.current,
                    start: "bottom bottom",
                    scrub: 1,
                },
                y: -25,
            });
        });

    });
  return <div ref={text} className="absolute top-1/3 max-w-xs md:max-w-5xl text-white
                         tracking-tight mix-blend-difference">
      <div className="block md:text-5xl mb-8">
          <span className="relative z-10">Développeur passionné, je crée vos sites web</span><br></br>
          <div className="relative inline-block w-fit">
              <span className="absolute top-0 md:-top-1 -rotate-2 block bg-green-700 w-full h-6 md:h-14"></span>
              <span className="relative z-10">personnalisés</span>
          </div>,
          <span> modernes</span> et
          <span className="text-gray-400"> performants</span> .
      </div>
      <span className="md:text-5xl">
          Toujours à l'affût de nouvelles opportunités, je suis disponible pour des projets freelance
          ou des collaborations afin de transformer vos idées en réalité numérique.
      </span>
  </div>
}