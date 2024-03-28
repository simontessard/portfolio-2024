import {Skill} from "@/app/pages/home/cards/Skill";
import {BigTitle} from "@/app/components/BigTitle";

export function Skills() {
  return (
      <div className="container max-md:px-4 text-white mb-8 md:mb-20">
          <BigTitle title="Skills"/>
          <div className="flex gap-6 mb-12">
              <Skill/>
          </div>
          <h1 className="text-xl md:text-5xl">Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.</h1>
      </div>
  );
}