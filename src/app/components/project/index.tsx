import React from "react";
import ArrowRight from "../../../../public/icons/arrow-right.svg";
import ArrowRightUp from "../../../../public/icons/arrow-right-up.svg";
import { inter } from "@/components/fonts";

export default function Project() {
  return (
    <section className="max-w-8xl w-full mx-auto px-17.75 py-24.25">
      <div className="flex items-center justify-between mb-12">
        <h1 className="font-semibold text-[64px]">
          <span className="text-charcoal-blue">
            Lets have a look at <br /> my
          </span>
          <span className="text-primary"> Portfolio</span>
        </h1>

        <div>
          <button className="bg-primary rounded-[60px] px-10 py-5 font-bold text-xl text-white hover:cursor-pointer">
            See all
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-12">
        <div className="w-full shrink-0 grid grid-cols-2 gap-6 h-[371px]">
          <div className="relative w-full h-full flex items-end rounded-[20px] p-2.5 bg-white bg-[url(/images/project-1.png)] bg-cover bg-center bg-no-repeat group">
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none bg-linear-[197deg] z-0 from-[44%] from-black/0 via-[83%] via-black/[72%] to-100% to-black opacity-50"></div>
            <div className="absolute top-2.5 right-2.5">
              <button className="border border-primary transition-colors group-hover:bg-primary p-3.75 rounded-full">
                <ArrowRight className="w-8.5 h-8.5 text-primary transition-colors group-hover:text-white" />
              </button>
            </div>

            <div className="relative z-10">
              <div className="transition-all group-hover:relative group-hover:bg-black/30 group-hover:rounded-3xl group-hover:px-6 group-hover:py-5">
                <div className="transition-all group-hover:absolute group-hover:rounded-[inherit] group-hover:inset-0 group-hover:backdrop-blur-sm group-hover:-z-10"></div>
                <p className="transition-all font-bold text-[70px] leading-none text-[#FFFAF5] p-2.5 group-hover:p-0 group-hover:mb-6.25">
                  Lirante
                </p>
                <p className="transition-all hidden group-hover:flex group-hover:text-[#FFEAD5]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full flex items-end rounded-[20px] p-2.5 bg-white bg-[url(/images/project-1.png)] bg-cover bg-center bg-no-repeat group">
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none bg-linear-[197deg] z-0 from-[44%] from-black/0 via-[83%] via-black/[72%] to-100% to-black opacity-50"></div>
            <div className="absolute top-2.5 right-2.5">
              <button className="border border-primary transition-colors group-hover:bg-primary p-3.75 rounded-full">
                <ArrowRight className="w-8.5 h-8.5 text-primary transition-colors group-hover:text-white" />
              </button>
            </div>

            <div className="relative z-10">
              <div className="transition-all group-hover:relative group-hover:bg-black/30 group-hover:rounded-3xl group-hover:px-6 group-hover:py-5">
                <div className="transition-all group-hover:absolute group-hover:rounded-[inherit] group-hover:inset-0 group-hover:backdrop-blur-sm group-hover:-z-10"></div>
                <p className="transition-all font-bold text-[70px] leading-none text-[#FFFAF5] p-2.5 group-hover:p-0 group-hover:mb-6.25">
                  Lirante
                </p>
                <p className="transition-all hidden group-hover:flex group-hover:text-[#FFEAD5]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[11.31px]">
          <div className="bg-primary w-[60.32px] h-[15.08px] rounded-[20.74px]" />
          <div className="bg-[#E4E7EC] w-[15.08px] h-[15.08px] rounded-[20.74px]" />
          <div className="bg-[#E4E7EC] w-[15.08px] h-[15.08px] rounded-[20.74px]" />
          <div className="bg-[#E4E7EC] w-[15.08px] h-[15.08px] rounded-[20.74px]" />
        </div>

        <div className={`${inter.className} flex items-center gap-3.5`}>
          <div className="bg-[#F2F4F7] rounded-3xl px-8 py-3.75 text-xl tracking-normal text-black">Landing Page</div>
          <div className="bg-[#F2F4F7] rounded-3xl px-8 py-3.75 text-xl tracking-normal text-black">Product Design</div>
          <div className="bg-[#F2F4F7] rounded-3xl px-8 py-3.75 text-xl tracking-normal text-black">Animation</div>
          <div className="bg-[#F2F4F7] rounded-3xl px-8 py-3.75 text-xl tracking-normal text-black">Glassmorphism</div>
          <div className="bg-[#F2F4F7] rounded-3xl px-8 py-3.75 text-xl tracking-normal text-black">Cards</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4.5 mb-6">
            <p className="font-bold text-5xl text-charcoal-blue">Lirante - Food Dilvery Solution</p>
            <div className="bg-primary w-fit h-fit rounded-full p-3">
              <ArrowRightUp className="w-8.5 h-8.5 text-[#FCFCFD]" />
            </div>
          </div>
          <p className="w-[742px] text-xl text-center text-charcoal-blue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
      </div>
    </section>
  );
}
