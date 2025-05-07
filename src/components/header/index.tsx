"use client";

import { usePathname } from "next/navigation";
import Logo from "../../../public/images/logo-jc.png";
import Typo from "../../../public/images/logo-typo.png";
import React from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-7xl lg:max-w-6xl mx-auto mt-12.5">
      <div className="bg-black rounded-[50px] p-2.5">
        <nav>
          <ul className="flex flex-wrap items-center justify-between gap-[14.17px] text-white">
            <li
              className={`px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer ${
                pathname === "/" ? "bg-primary" : "bg-black"
              }`}
            >
              Home
            </li>
            <li className="px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer">About</li>
            <li className="px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer">Service</li>
            <li className="w-[307px] lg:w-[126px] rounded-[60px]">
              <span className="flex items-center justify-center gap-2.5">
                <Image src={Logo} alt="logo JC" width={0} height={0} sizes="100vw" className="w-11.5 h-11.5" />
                <Image src={Typo} alt="JCREA" width={0} height={0} className="w-[82.51px] h-[19.22px]" />
              </span>
            </li>
            <li className="px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer">Resume</li>
            <li className="px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer">Project</li>
            <li className="px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
