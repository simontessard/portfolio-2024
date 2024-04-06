"use client";
import {Skill} from "@/app/pages/home/cards/Skill";
import {BigTitle} from "@/app/components/BigTitle";
import {Test} from "@/app/pages/home/Test";
import Swiper from 'swiper';
import 'swiper/css';

export function Skills() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3
    });
  return (
      <div className="container max-md:px-4 text-white mb-8 md:mb-20">
          <BigTitle title="Skills"/>
          <div className="swiper bg-red-700 mb-8">
              <div className="swiper-wrapper">
                  <Skill/>
              </div>
          </div>
          { /* <Test/> */}
          <h3 className="text-xl md:text-5xl">Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
              integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.</h3>
      </div>
  );
}