import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

export function SquareImage({src}) {
    const imgRef = useRef(null);

    useGSAP(
        () => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                    const container = imgRef.current;
                    const img = container.querySelector('img');

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            scrub: true,
                            pin: false,
                        }
                    });

                    tl.fromTo(img, {
                        yPercent: -20,
                        ease: 'none'
                    }, {
                        yPercent: 20,
                        ease: 'none'
                    });
            });
        }
    )

    return (
        <div ref={imgRef} className={"img-container relative group overflow-hidden max-md:mx-auto max-md:max-h-72 md:max-w-lg w-full h-full md:aspect-square mb-6 md:mb-8"}>
            <img
                className={"md:absolute md:top-0 md:left-1/2 w-auto h-full object-cover scale-150 md:-translate-x-1/2 origin-center"}
                src={src} alt="random"/>
        </div>
    )
}