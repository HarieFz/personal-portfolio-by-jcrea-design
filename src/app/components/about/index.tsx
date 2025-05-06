import React from "react";
import Jenny from "../../../../public/images/jenny-2.png";
import Illustration from "../../../../public/images/illustration-jenny-2.png";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F2F4F7] flex items-center px-[70.5px] py-[103px] rounded-[50px]">
      <div className="relative w-[603] h-[600] group">
        <div className="w-[624] h-[624] absolute -left-5.25 bottom-9 z-0 opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100">
          <Image
            src={Illustration}
            alt="Jenny"
            width={0}
            height={0}
            className="w-[624] h-[624] object-contain object-center"
          />
        </div>
        <div className="relative z-10 translate-y-5 transition-all group-hover:translate-y-8">
          <Image
            src={Jenny}
            alt="Jenny"
            width={0}
            height={0}
            className="w-[603] h-[603] object-contain object-center"
          />
        </div>
      </div>
      <div className="flex flex-col gap-11.75">
        <h1 className="font-semibold text-[64px]">
          <span className="text-charcoal-blue">Why</span> <span className="text-primary">Hire me</span>{" "}
          <span className="text-charcoal-blue">?</span>
        </h1>
        <p className="text-xl text-[#98A2B3]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Duis lacus nunc, posuere in justo <br />{" "}
          vulputate, bibendum sodales
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p className="font-medium text-4xl text-dark-bluish-gray">450+</p>
            <p className="text-xl text-[#667085]">Project Completed</p>
          </div>
          <div>
            <p className="font-medium text-4xl text-dark-bluish-gray">450+</p>
            <p className="text-xl text-[#667085]">Project Completed</p>
          </div>
        </div>

        <div>
          <button className="border border-[#151515] px-12.25 py-8.25 rounded-4xl font-semibold text-[32px] text-[#151515] transition-colors hover:bg-[#151515] hover:text-white">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
}
