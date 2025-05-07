import React from "react";
import Service1 from "../../../../public/images/service-1.png";
import ArrowRightUp from "../../../../public/icons/arrow-right-up.svg";
import Image from "next/image";

export default function Service() {
  return (
    <section className="bg-black relative max-w-8xl w-full h-[878px] rounded-[50px] overflow-hidden">
      <div className="w-full h-full absolute bg-[url(/images/abstract-background.jpg)] bg-cover bg-top bg-no-repeat opacity-20 z-0"></div>
      <div className="w-full h-full absolute bg-[url(/images/light-yellow-1.png)] top-[50px] bg-contain bg-bottom bg-no-repeat z-0"></div>

      <div className="relative px-[70.5px] pt-[116px] pb-[51.92px] z-10">
        <div className="flex items-center justify-between mb-24">
          <h1 className="font-medium text-5xl">
            <span className="text-[#FCFCFD]">My</span> <span className="text-[#FD853A]">Services</span>
          </h1>
          <p className="w-[576px] font-medium text-xl text-wrap text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
            bibendum sodales
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[25.5px]">
          <div className="relative group">
            <div className="relative w-[416px] h-[508px] bg-[#686868]/20 transition-all group-hover:bg-primary rounded-[38px] masking-service overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:border-2 group-hover:before:border-0 before:border-transparent before:[background:radial-gradient(circle_at_bottom,rgba(255,255,255,0),rgba(255,255,255,0.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]">
              <div className="mx-0.5 px-9.25 pt-11 pb-5.75 border-b-2 border-[#F9FAFB]/30">
                <p className="font-medium text-[32px] text-white">UI/ UX Design</p>
              </div>
              <div className="relative w-[416px] h-[400px] flex items-end">
                <div className="transition-transform group-hover:-translate-y-2.25">
                  <div className="w-[328px] h-[329px] absolute left-1/2 bottom-5.5 -translate-x-1/2 bg-[#757575] rounded-[35px]" />
                  <div className="w-[374px] h-[329px] absolute left-1/2 bottom-0 -translate-x-1/2 bg-[#9E9D9D] rounded-[35px]" />
                  <div className="relative z-20 w-[416px] h-[307px] rounded-[35px] overflow-hidden">
                    <Image
                      src={Service1}
                      alt="service"
                      width={0}
                      height={0}
                      className="w-[416px] h-[307px] transition-transform group-hover:scale-[108%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary w-28.5 h-28.5 rounded-full flex items-center justify-center">
                <ArrowRightUp className="w-18 h-18 text-white" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="relative w-[416px] h-[508px] bg-[#686868]/20 transition-all group-hover:bg-primary rounded-[38px] masking-service overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:border-2 group-hover:before:border-0 before:border-transparent before:[background:radial-gradient(circle_at_bottom,rgba(255,255,255,0),rgba(255,255,255,0.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]">
              <div className="mx-0.5 px-9.25 pt-11 pb-5.75 border-b-2 border-[#F9FAFB]/30">
                <p className="font-medium text-[32px] text-white">Web Design</p>
              </div>
              <div className="relative w-[416px] h-[400px] flex items-end">
                <div className="transition-transform group-hover:-translate-y-2.25">
                  <div className="w-[328px] h-[329px] absolute left-1/2 bottom-5.5 -translate-x-1/2 bg-[#757575] rounded-[35px]" />
                  <div className="w-[374px] h-[329px] absolute left-1/2 bottom-0 -translate-x-1/2 bg-[#9E9D9D] rounded-[35px]" />
                  <div className="relative z-20 w-[416px] h-[307px] rounded-[35px] overflow-hidden">
                    <Image
                      src={Service1}
                      alt="service"
                      width={0}
                      height={0}
                      className="w-[416px] h-[307px] transition-transform group-hover:scale-[108%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary w-28.5 h-28.5 rounded-full flex items-center justify-center">
                <ArrowRightUp className="w-18 h-18 text-white" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="relative w-[416px] h-[508px] bg-[#686868]/20 transition-all group-hover:bg-primary rounded-[38px] masking-service overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:border-2 group-hover:before:border-0 before:border-transparent before:[background:radial-gradient(circle_at_bottom,rgba(255,255,255,0),rgba(255,255,255,0.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]">
              <div className="mx-0.5 px-9.25 pt-11 pb-5.75 border-b-2 border-[#F9FAFB]/30">
                <p className="font-medium text-[32px] text-white">Landing Page</p>
              </div>
              <div className="relative w-[416px] h-[400px] flex items-end">
                <div className="transition-transform group-hover:-translate-y-2.25">
                  <div className="w-[328px] h-[329px] absolute left-1/2 bottom-5.5 -translate-x-1/2 bg-[#757575] rounded-[35px]" />
                  <div className="w-[374px] h-[329px] absolute left-1/2 bottom-0 -translate-x-1/2 bg-[#9E9D9D] rounded-[35px]" />
                  <div className="relative z-20 w-[416px] h-[307px] rounded-[35px] overflow-hidden">
                    <Image
                      src={Service1}
                      alt="service"
                      width={0}
                      height={0}
                      className="w-[416px] h-[307px] transition-transform group-hover:scale-[108%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary w-28.5 h-28.5 rounded-full flex items-center justify-center">
                <ArrowRightUp className="w-18 h-18 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
