"use client";

import Image from "next/image";
import React, { useState } from "react";
import Illustration1 from "../../../../public/images/illustration-1.png";
import Illustration2 from "../../../../public/images/illustration-2.png";
import IllustrationJenny from "../../../../public/images/illustration-jenny-1.png";
import Jenny from "../../../../public/images/jenny-1.png";
import Ellipse from "../../../../public/images/ellipse.png";
import Stars from "../../../../public/images/stars.png";
import QuoteUp from "../../../../public/images/quote-up.png";
import ArrowRightUp from "../../../../public/icons/arrow-right-up.svg";
import { AnimatePresence, motion } from "motion/react";
import { urbanist } from "../../../components/fonts";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnDefault, setIsBtnDefault] = useState(true);

  return (
    <section className="relative max-w-7xl lg:max-w-6xl w-full h-[787px] mx-auto mt-14">
      <motion.div
        animate={{ y: isHovered ? 200 : 0, scale: isHovered ? 0.5 : 1, opacity: isHovered ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex flex-col items-center"
      >
        <button className="relative w-fit border border-black rounded-[38.24px] px-[25.49px] py-[9.5px] mb-2.5">
          <p>Hello</p>
          <span className="absolute -top-5 -right-6">
            <Image src={Illustration1} alt="illustration" width={0} height={0} className="w-7 h-7.25" />
          </span>
        </button>

        <div className="relative z-0">
          <p className={`font-semibold text-[95.57px] leading-none text-center text-black ${urbanist.className}`}>
            I’m <span className="text-primary">Jenny</span>,
            <br />
            Product Designer
          </p>
          <span className="absolute -bottom-13 -left-15">
            <Image src={Illustration2} alt="illustration" width={0} height={0} className="w-18 h-18.75" />
          </span>
        </div>
      </motion.div>

      <div className="w-[952px] h-[636px] absolute top-38 left-1/2 -translate-x-1/2">
        <div className="max-w-[367px] w-full max-h-[82px] h-full absolute left-1/2 bottom-11.5 -translate-x-1/2 z-40">
          <div
            className="p-2.5 flex items-center gap-2.5 bg-white/10 rounded-[50px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border-2 before:border-transparent before:[background:linear-gradient(to_right_top,rgba(255,255,255,1),rgba(201,201,201,0))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs
          "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              className={`flex items-center rounded-[60px] py-2.5 text-[25.69px] text-nowrap text-white transition-all ${
                isBtnDefault
                  ? "bg-primary outline-[0.5px] outline-[#D0D5DD] px-8 font-medium"
                  : "px-[17.5px] font-light"
              }`}
            >
              Portfolio <ArrowRightUp className={`w-10.5 h-10.5 ${isBtnDefault ? "flex" : "hidden"}`} />
            </button>
            <button
              className={`flex items-center rounded-[60px] py-2.5 text-[25.69px] text-nowrap text-white transition-all ${
                !isBtnDefault
                  ? "bg-primary outline-[0.5px] outline-[#D0D5DD] px-8 font-medium"
                  : "px-[17.5px] font-light"
              }`}
              onMouseEnter={() => setIsBtnDefault(false)}
              onMouseLeave={() => setIsBtnDefault(true)}
            >
              Hire Me <ArrowRightUp className={`w-10.5 h-10.5 ${!isBtnDefault ? "flex" : "hidden"}`} />
            </button>
          </div>
        </div>

        <div
          className="w-[811.78px] h-[405.89] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full z-30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>

        <div className="w-[952px] h-[636px] absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <Image
            src={Jenny}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[952px] h-[636px] object-contain object-center"
          />
        </div>
        <div className="w-[811.78px] h-[405.89px] absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
          <Image
            src={Ellipse}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[811.78px] h-[405.89px] object-contain object-center"
          />
        </div>
        <motion.div
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-[1017.91px] h-[688.48px] absolute -top-10 left-1/2 -translate-x-1/2 z-10"
        >
          <Image
            src={IllustrationJenny}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-[1017.91px] h-[688.48px] object-contain object-center"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          animate={{ top: isHovered ? 80 : 310 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`w-full absolute -z-10`}
        >
          <div className="flex justify-between">
            <div>
              <Image src={QuoteUp} alt="" width={0} height={0} sizes="100vw" className="w-9 h-9" />
              <p className="font-medium text-xl mt-6">
                Jenny’s Exceptional product design
                <br />
                ensure our website’s success.
                <br />
                Highly Recommended
              </p>
            </div>

            <div className="flex flex-col items-end">
              <Image src={Stars} alt="Stars" width={0} height={0} sizes="100vw" className="w-[160px] h-[32px]" />
              <p className="font-bold text-[47px] leading-none mt-5.25 mb-1.25">
                10 Years <br />
              </p>
              <p className="text-xl">Experince</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
