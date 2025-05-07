import React from "react";
import Shuriken from "../../../../public/icons/shuriken.svg";

export default function TagScroller() {
  return (
    <section className="relative max-w-8xl w-full mx-auto bg-[#FB6514] rounded-tl-3xl rounded-br-3xl h-[147px] flex items-end overflow-hidden">
      <div className="bg-white absolute bottom-19 -left-1 -rotate-[2.5deg] inline-flex flex-nowrap gap-[12.87px]">
        <div className="flex items-center gap-[12.87px] animate-infinite-scroll">
          <p className="text-5xl text-black text-nowrap">UI/ UX Design</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">App Design</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">Dashboard</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">Wireframe</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">User Research</p>
          <Shuriken />
        </div>
        <div className="flex items-center gap-[12.87px] animate-infinite-scroll" aria-hidden="true">
          <p className="text-5xl text-black text-nowrap">UI/UX Design</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">App Design</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">Dashboard</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">Wireframe</p>
          <Shuriken />
          <p className="text-5xl text-black text-nowrap">User Research</p>
          <Shuriken />
        </div>
      </div>
    </section>
  );
}
