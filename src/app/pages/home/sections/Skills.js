"use client";
import {BigTitle} from "@/app/components/BigTitle";
import 'swiper/css';
import ScrollSection from "@/app/pages/home/sections/ScrollSection";

export function Skills() {
  return (
      <section>
          <div className="container max-md:px-4 text-white py-16 md:py-24">
              <BigTitle title="Skills"/>
              <h3 className="text-xl md:text-3xl max-w-4xl">Lorem ipsum dolor sit amet consectetur. Eget at sodales
                  suspendisse
                  integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                  Dolor sit amet consectetur.
              </h3>
          </div>
          <ScrollSection/>
      </section>

  );
}