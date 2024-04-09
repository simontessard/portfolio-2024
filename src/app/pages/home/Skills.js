"use client";
import {Skill} from "@/app/pages/home/cards/Skill";
import {BigTitle} from "@/app/components/BigTitle";
import Swiper from 'swiper';
import 'swiper/css';
import {useEffect} from "react";

export function Skills() {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            breakpoints: {
                768: { slidesPerView: 2,
                       spaceBetween: 10,
                },
                1028: { slidesPerView: 3,
                       spaceBetween: 30,
                }
            }
        });
    }, []);
  return (
      <div className="container max-md:px-4 text-white py-20">
          <BigTitle title="Skills"/>
          <div className="swiper mb-16">
              <div className="swiper-wrapper">
                  <Skill title={"Front-end"} description={"Lorem ipsum"}/>
                  <Skill title={"Back-end"} description={"Lorem ipsum"}/>
                  <Skill title={"UI/UX"} description={"Lorem ipsum is dotor"}/>
                  <Skill title={"Web devlopment"}/>
              </div>
          </div>
          { /* <Test/> */}
          <h3 className="text-xl md:text-3xl max-w-4xl">Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
              integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
              Dolor sit amet consectetur.</h3>
      </div>
  );
}