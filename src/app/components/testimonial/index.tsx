import Image from "next/image";
import React from "react";
import Illustration3 from "../../../../public/images/illustration-3.png";
import Illustration4 from "../../../../public/images/illustration-4.png";
import Illustration5 from "../../../../public/images/illustration-5.png";
import Person from "../../../../public/images/person.png";
import Stars from "../../../../public/images/stars.png";
import { urbanist } from "@/components/fonts";

export default function Testimonial() {
  return (
    <section className="relative bg-black max-w-8xl w-full mx-auto h-[863px] rounded-[50px] overflow-hidden">
      <div className="w-full h-full absolute bg-[url(/images/abstract-background.jpg)] bg-cover bg-top bg-no-repeat opacity-20 z-0"></div>

      <div className="pt-[116px] pb-[185.16px]">
        <div className="relative flex flex-col items-center justify-center mb-24 z-10">
          <div className="relative mb-3.5">
            <div className="absolute -top-4 -right-1">
              <Image
                src={Illustration3}
                alt="illustration"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[27.5] h-[28.5px] object-contain"
              />
            </div>
            <h1 className="font-medium text-5xl leading-normal text-center">
              <span className="text-[#FCFCFD]">
                Testimonials That <br /> Speak to
              </span>{" "}
              <span className="text-primary">My Results</span>
            </h1>
          </div>

          <div className="relative">
            <div className="absolute -top-[30px] -right-[40.56px]">
              <Image
                src={Illustration4}
                alt="illustration"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[25.56] h-[25.47px] object-contain"
              />
            </div>
            <div className="absolute -bottom-[22.47px] left-[3px]">
              <Image
                src={Illustration5}
                alt="illustration"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[25.56] h-[25.47px] object-contain"
              />
            </div>
            <p className="w-[742px] text-xl text-center text-[#F9FAFB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>

        <div className="max-w-[784px] w-full mx-auto gap-6">
          <div className="w-[784px] absolute -translate-x-[50.625rem] rounded-3xl p-5.25 group">
            <div className="absolute inset-0 bg-white/[14%] rounded-[inherit] backdrop-blur-sm z-0 border-2 border-transparent transition-colors group-hover:border-2 group-hover:border-[#979797]"></div>
            <div className="relative flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <Image
                  src={Person}
                  alt="person"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-13.75 h-13.75 rounded-full"
                />
                <div>
                  <p className={`${urbanist.className} font-bold text-[23.5px] tracking-normal text-[#FCFCFD]`}>
                    Jayesh Patil
                  </p>
                  <p className={`${urbanist.className} text-[18.25px] tracking-normal text-[#FCFCFD]`}>CEO, Lirante</p>
                </div>
              </div>

              <div className="flex items-center gap-1.25">
                <Image src={Stars} alt="stars" width={0} height={0} sizes="100vw" className="w-[160px] h-8" />
                <p className="font-medium text-[25.69px] text-[#FCFDFD] leading-none">5.0</p>
              </div>

              <div>
                <p className="text-xl text-[#F9FAFB]">
                  consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[784px] absolute translate-x-0 rounded-3xl p-5.25 group">
            <div className="absolute inset-0 bg-white/[14%] rounded-[inherit] backdrop-blur-sm z-0 border-2 border-transparent transition-colors group-hover:border-2 group-hover:border-[#979797]"></div>
            <div className="relative flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <Image
                  src={Person}
                  alt="person"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-13.75 h-13.75 rounded-full"
                />
                <div>
                  <p className={`${urbanist.className} font-bold text-[23.5px] tracking-normal text-[#FCFCFD]`}>
                    Jayesh Patil
                  </p>
                  <p className={`${urbanist.className} text-[18.25px] tracking-normal text-[#FCFCFD]`}>CEO, Lirante</p>
                </div>
              </div>

              <div className="flex items-center gap-1.25">
                <Image src={Stars} alt="stars" width={0} height={0} sizes="100vw" className="w-[160px] h-8" />
                <p className="font-medium text-[25.69px] text-[#FCFDFD] leading-none">5.0</p>
              </div>

              <div>
                <p className="text-xl text-[#F9FAFB]">
                  consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[784px] absolute translate-x-[50.625rem] rounded-3xl p-5.25 group">
            <div className="absolute inset-0 bg-white/[14%] rounded-[inherit] backdrop-blur-sm z-0 border-2 border-transparent transition-colors group-hover:border-2 group-hover:border-[#979797]"></div>
            <div className="relative flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <Image
                  src={Person}
                  alt="person"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-13.75 h-13.75 rounded-full"
                />
                <div>
                  <p className={`${urbanist.className} font-bold text-[23.5px] tracking-normal text-[#FCFCFD]`}>
                    Jayesh Patil
                  </p>
                  <p className={`${urbanist.className} text-[18.25px] tracking-normal text-[#FCFCFD]`}>CEO, Lirante</p>
                </div>
              </div>

              <div className="flex items-center gap-1.25">
                <Image src={Stars} alt="stars" width={0} height={0} sizes="100vw" className="w-[160px] h-8" />
                <p className="font-medium text-[25.69px] text-[#FCFDFD] leading-none">5.0</p>
              </div>

              <div>
                <p className="text-xl text-[#F9FAFB]">
                  consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum
                  egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
