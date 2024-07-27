import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

export function SquareImage({src}) {
    const imgRef = useRef(null);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                    const container = imgRef.current;
                    const img = container.querySelector('img');

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            scrub: true,
                        }
                    });

                    tl.to(img, {
                        y: '+=100',
                    });
            });
        }
    )

    return (
        <div ref={imgRef} className={"img-container relative group overflow-hidden max-md:mx-auto max-md:max-h-64 md:max-w-lg w-full h-full md:aspect-square mb-6 md:mb-8"}>
            <img className={"md:absolute md:top-0 md:left-1/2 w-auto h-full aspect-square object-cover md:-translate-x-1/2 origin-center"}
                src={src} alt="random"/>
        </div>
    )
}