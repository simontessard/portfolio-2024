import {Skill} from "@/app/pages/home/cards/Skill";

export function Skills() {
  return (
      <div className="text-white mb-20">
          <h1 className="text-9xl mb-12">Skills</h1>
          <div className="flex gap-6 mb-12">
              <Skill/>
          </div>
          <h1 className="text-5xl">Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.</h1>
      </div>
  );
}