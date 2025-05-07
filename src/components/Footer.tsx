import React from "react";
import Image from "next/image";
import ArrowRightUp from "../../public/icons/arrow-right-up.svg";
import Logo from "../../public/images/logo-jc.png";
import Typo from "../../public/images/logo-typo.png";
import Facebook from "../../public/icons/facebook.svg";
import Youtube from "../../public/icons/youtube.svg";
import Whatsapp from "../../public/icons/whatsapp.svg";
import Instagram from "../../public/icons/instagram.svg";
import Twitter from "../../public/icons/twitter.svg";
import Send from "../../public/icons/send.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#272727] rounded-t-3xl px-17.75 py-6.25 flex flex-col gap-13.75">
      <div className="flex justify-between py-11">
        <h1 className="font-semibold text-[64px] text-[#FCFCFD]">Lets Connect there</h1>
        <button className="bg-primary rounded-[60px] px-[33.5px] py-2.5 font-medium text-[25.69px] text-white group flex items-center cursor-pointer">
          Hire me <ArrowRightUp className="w-10.5 h-10.5 text-white transition-transform group-hover:rotate-45" />
        </button>
      </div>

      <div className="bg-[#475467] w-full h-0.5" />

      <div className="flex justify-between gap-[18.33px]">
        <div className="flex flex-col gap-8.5">
          <div className="py-5 flex items-center gap-2.5">
            <Image src={Logo} alt="Logo" width={0} height={0} className="w-11.5 h-11.5" />
            <Image src={Typo} alt="JCREA" width={0} height={0} className="w-[82.51px] h-[19.22px]" />
          </div>

          <p className="text-xl text-[#FCFCFD]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>

          <div className="flex items-center gap-1.25">
            <Facebook />
            <Youtube />
            <Whatsapp />
            <Instagram />
            <Twitter />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-primary mb-7">Navigation</h2>

          <ul className="flex flex-col gap-5 [&>li]:text-[#FCFCFD]">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Resume</li>
            <li>Project</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-primary mb-7">Contact</h2>

          <ul className="flex flex-col gap-5 [&>li]:text-[#FCFCFD]">
            <li>+91 7738443636</li>
            <li>Jaycrea36@gmail.com</li>
            <li>Portfolio-jcrea.com</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-primary mb-7">Get the latest information</h2>

          <div className="inline-flex h-[51px]">
            <div className="bg-white px-3.5 rounded-s-[14px] flex items-center">
              <input type="text" name="" id="" placeholder="Email Address" className="focus:outline-none" />
            </div>
            <button className="bg-primary rounded-e-[14px] flex items-center px-2.75 cursor-pointer">
              <Send />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#475467] w-full h-0.5" />

      <div className="flex justify-between">
        <p className="text-xl text-white">Copyright© 2023 Jayesh. All Rights Reserved.</p>
        <p className="text-xl text-white">User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}
