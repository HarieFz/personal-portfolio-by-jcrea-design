import React from "react";
import Award from "../../../../public/icons/award.svg";
import Sms from "../../../../public/icons/sms.svg";
import Star from "../../../../public/icons/star.svg";
import ShieldTick from "../../../../public/icons/shield-tick.svg";
import { urbanist } from "@/components/fonts";

export default function ContactCTA() {
  return (
    <section className="w-full mx-auto py-24.5">
      <h1 className="font-semibold text-[64px] leading-normal text-center mb-2.5">
        <span className="text-charcoal-blue">
          Have an Awsome Project <br /> Idea?
        </span>{" "}
        <span className="text-primary">Let’s Discuss</span>
      </h1>

      <div className="flex justify-center mb-2.5">
        <div className="w-[832px] border border-[#E4E7EC] rounded-[50px] px-3.5 py-2.75 flex items-center justify-between gap-4.25">
          <div className="w-full  flex items-center gap-4.25">
            <div className="w-fit bg-[#FFEAD5] rounded-[50px] px-4 py-3.25">
              <Sms />
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Email Address"
              className={`${urbanist.className} w-full font-medium text-xl text-black focus:outline-none`}
            />
          </div>

          <div className="w-fit">
            <button
              className={`${urbanist.className} bg-primary rounded-[60px] px-10 py-5 font-medium text-xl text-white`}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="w-[832px] mx-auto flex items-center justify-around">
        <div className="flex items-center">
          <Star />
          <p className="text-black">4.9/5 Average Ratings</p>
        </div>
        <div className="flex items-center">
          <Award />
          <p className="text-black">25+ Winning Awards</p>
        </div>
        <div className="flex items-center">
          <ShieldTick />
          <p className="text-black">Certified Product Designer</p>
        </div>
      </div>
    </section>
  );
}
