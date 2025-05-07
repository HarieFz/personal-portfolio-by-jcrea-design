import React from "react";
import Blog1 from "../../../../public/images/blog-1.png";
import Blog2 from "../../../../public/images/blog-2.png";
import Blog3 from "../../../../public/images/blog-3.png";
import ArrowRightUp from "../../../../public/icons/arrow-right-up.svg";
import Image from "next/image";
import { inter } from "@/components/fonts";

export default function Blog() {
  return (
    <section className="min-[1440px]:max-w-7xl max-w-6xl w-full mx-auto py-24.25">
      <div className="flex items-center justify-between mb-12">
        <h1 className="font-bold text-5xl leading-normal text-charcoal-blue">
          From my <br /> blog post
        </h1>

        <button className="bg-primary rounded-[60px] px-10 py-5 font-bold text-xl text-white cursor-pointer">
          See all
        </button>
      </div>

      <div className="grid grid-cols-3 gap-[25.5px]">
        <div className="flex flex-col gap-8.75">
          <div className="relative group">
            <div className="masking-blog">
              <div className="max-w-[416px] aspect-[416/432] rounded-[38px]">
                <Image
                  src={Blog1}
                  alt="blog-1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-[inherit] object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary min-[1440px]:w-28.5 min-[1440px]:h-28.5 w-24.5 h-24.5 rounded-full flex items-center justify-center">
                <ArrowRightUp className="w-18 h-18 text-white" />
              </div>
            </div>
          </div>

          <div className={`${inter.className} bg-[#F2F4F7] w-fit rounded-3xl px-8 py-3.75 text-xl text-black`}>
            UI/ UX Design
          </div>

          <div className="flex items-center gap-8.75">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary w-2.25 h-2.25 rounded-full" />
              <p className={`${inter.className} text-xl tracking-normal text-charcoal-blue`}>Jayesh Patil</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-primary w-2.25 h-2.25 rounded-full" />
              <p className={`${inter.className} text-xl tracking-normal text-charcoal-blue`}>10 Nov, 2023</p>
            </div>
          </div>

          <div>
            <p className="text-[32px] tracking-normal text-wrap text-charcoal-blue">
              Design Unraveled: Behind the Scenes UI/UX Magic
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8.75">
          <div className="relative group">
            <div className="masking-blog">
              <div className="max-w-[416px] aspect-[416/432] rounded-[38px]">
                <Image
                  src={Blog2}
                  alt="blog-2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-[inherit] object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary min-[1440px]:w-28.5 min-[1440px]:h-28.5 w-24.5 h-24.5 rounded-full flex items-center justify-center">
                <ArrowRightUp className="w-18 h-18 text-white" />
              </div>
            </div>
          </div>

          <div className={`${inter.className} bg-[#F2F4F7] w-fit rounded-3xl px-8 py-3.75 text-xl text-black`}>
            App Design
          </div>

          <div className="flex items-center gap-8.75">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary w-2.25 h-2.25 rounded-full" />
              <p className={`${inter.className} text-xl tracking-normal text-charcoal-blue`}>Jayesh Patil</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-primary w-2.25 h-2.25 rounded-full" />
              <p className={`${inter.className} text-xl tracking-normal text-charcoal-blue`}>09 Oct, 2023</p>
            </div>
          </div>

          <div>
            <p className="text-[32px] tracking-normal text-wrap text-charcoal-blue">
              Sugee: Loan Management System for Rural Sector.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8.75">
          <div className="relative group">
            <div className="masking-blog">
              <div className="max-w-[416px] aspect-[416/432] rounded-[38px]">
                <Image
                  src={Blog3}
                  alt="blog-3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-[inherit] object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-dark-bluish-gray transition-colors group-hover:bg-primary min-[1440px]:w-28.5 min-[1440px]:h-28.5 w-24.5 h-24.5 rounded-full flex items-center justify-center">
                <ArrowRightUp className="w-18 h-18 text-white" />
              </div>
            </div>
          </div>

          <div className={`${inter.className} bg-[#F2F4F7] w-fit rounded-3xl px-8 py-3.75 text-xl text-black`}>
            App Design
          </div>

          <div className="flex items-center gap-8.75">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary w-2.25 h-2.25 rounded-full" />
              <p className={`${inter.className} text-xl tracking-normal text-charcoal-blue`}>Jayesh Patil</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-primary w-2.25 h-2.25 rounded-full" />
              <p className={`${inter.className} text-xl tracking-normal text-charcoal-blue`}>13 Aug, 2023</p>
            </div>
          </div>

          <div>
            <p className="text-[32px] tracking-normal text-wrap text-charcoal-blue">
              Cinetrade: Innovative way to invest in Digital Media
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
