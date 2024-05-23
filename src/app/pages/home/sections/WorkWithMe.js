"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {ContactButton} from "@/app/components/Buttons/ContactButton";
import {BigTitle} from "@/app/components/BigTitle";

export function WorkWithMe() {
    const section = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            gsap.fromTo(section.current, {
                y: 100,
            }, {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 50%",
                    scrub: 1,
                },
                y: 0,
            });
            gsap.to('.baseCube', {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 42%",
                    end: "400",
                    scrub: 1,
                },
                yPercent : -205
            });
            gsap.to('.blackSquare', {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 39%",
                    end: "350",
                    scrub: 1,
                },
                yPercent : 205
            });

        });
    }, []);
  return (
      <section ref={section} className={"relative bg-white py-16 md:py-28 overflow-hidden"}>
          <div className="container text-black">
               <BigTitle title="Connectons !" color={"black"} multipleWords={true}/>
              <div className="text-sm md:text-lg">
                  <p className={"mb-4 md:mb-6"}>Vous avez un projet sur lequel vous aimeriez que je
                      travaille ? Vous avez besoin de mes compétences pour un projet ?</p>
                  <p className={"mb-4 md:mb-6"}>Je suis disponible pour des missions freelance ou en
                      CDI.</p>
                  <p className={"mb-8 md:mb-12"}>N'hésitez pas à me contacter pour en discuter.</p>
              </div>
              <div className={"max-md:mx-auto w-fit"}>
                  <ContactButton href={"#"} text={"Contactez moi"}/>
              </div>
          </div>
          <div className={"baseCube max-md:hidden absolute -bottom-40 right-32 flex items-center justify-center border-2 border-black size-40"}>
              <svg className="size-10" viewBox="0 0 24 24" strokeWidth="1.5" width="24" height="24" color="#000000">
                  <defs>
                  </defs>
                  <circle className="cls-6374f8d9b67f094e4896c670-1" cx="12" cy="7.25" r="5.73"></circle>
                  <path className="cls-6374f8d9b67f094e4896c670-1"
                        d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"></path>
              </svg>
          </div>
          <div
              className={"blackSquare max-md:hidden absolute -top-40 right-32 flex items-center justify-center size-40 border-2 border-black bg-black"}>
              <svg className="fill-white size-10" viewBox="0 0 24 24" strokeWidth="1.5" width="24" height="24">
                  <defs>
                  </defs>
                  <circle className="cls-6374f8d9b67f094e4896c670-1" cx="12" cy="7.25" r="5.73"></circle>
                  <path className="cls-6374f8d9b67f094e4896c670-1"
                        d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"></path>
              </svg>
          </div>
      </section>
  );
}