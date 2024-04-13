"use client";
import {Skill} from "@/app/pages/home/cards/Skill";
import {BigTitle} from "@/app/components/BigTitle";
import { useLayoutEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css';


export function Skills() {
    useLayoutEffect(() => {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
        });
    }, []);
  return (
      <div className="container max-md:px-4 text-white py-8 md:py-20">
          <BigTitle title="Skills"/>
          <div className="swiper mb-16 md:!hidden">
              <div className="swiper-wrapper horizontal">
                  <Skill title={"Front-end"} description={"Lorem ipsum"}/>
                  <Skill title={"Back-end"} description={"Lorem ipsum"}/>
                  <Skill title={"UI/UX"} description={"Lorem ipsum is dotor"}/>
                  <Skill title={"Web devlopment"}/>
              </div>
          </div>
          <h3 className="text-xl md:text-3xl max-w-4xl">Lorem ipsum dolor sit amet consectetur. Eget at sodales
              suspendisse
              integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
              Dolor sit amet consectetur.
          </h3>
      </div>
  );
}