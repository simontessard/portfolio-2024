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
  return <p ref={text} className="absolute top-1/3 max-w-2xl md:max-w-5xl text-white
                         tracking-tight mix-blend-difference">
      <span className="block md:text-5xl mb-8">
        Développeur passionné, je crée vos sites web<br></br>
          <span className="text-green-500">personnalisés</span>,
          <span> modernes</span> et
          <span className="text-[#C0C0C0]"> performants</span> .
      </span>
      <span className="md:text-5xl">
          Toujours à l'affût de nouvelles opportunités, je suis disponible pour des projets freelance
          ou des collaborations afin de transformer vos idées en réalité numérique.
      </span>
  </p>
}