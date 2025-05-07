import React from "react";
import Image from "next/image";
import ArrowRightUp from "../../../public/icons/arrow-right-up.svg";
import Service1 from "../../../public/images/service-1.png";

const services = [{ name: "UI/ UX Design" }, { name: "Web Design" }, { name: "Landing Page" }];

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
          {services?.map((item, index) => (
            <div key={index} className="relative group">
              <div className="masking-service">
                <div className="relative aspect-[416/508] max-w-[416px] bg-[#686868]/20 transition-all group-hover:bg-primary rounded-[38px] overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:border-2 group-hover:before:border-0 before:border-transparent before:[background:radial-gradient(circle_at_bottom,rgba(255,255,255,0),rgba(255,255,255,0.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]">
                  <div className="mx-0.5 px-9.25 pt-11 pb-5.75 border-b-2 border-[#F9FAFB]/30">
                    <p className="font-medium text-[32px] text-white">{item?.name}</p>
                  </div>
                  <div className="aspect-[416/400] flex items-end">
                    <div className="relative transition-transform group-hover:-translate-y-2.25">
                      <div className="aspect-[350/329] h-full absolute left-1/2 bottom-11 -translate-x-1/2 bg-[#757575]/50 rounded-[35px]" />
                      <div className="aspect-[400/329] h-full absolute left-1/2 bottom-5.5 -translate-x-1/2 bg-[#9E9D9D] rounded-[35px]" />
                      <div className="relative z-20 max-w-[416px] aspect-[416/307] rounded-[35px] overflow-hidden">
                        <Image
                          src={Service1}
                          alt="service"
                          width={0}
                          height={0}
                          className="object-cover rounded-[35px] transition-transform group-hover:scale-[108%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary min-[1440px]:w-28.5 min-[1440px]:h-28.5 w-24.5 h-24.5 rounded-full flex items-center justify-center">
                  <ArrowRightUp className="w-18 h-18 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
