"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-jc.png";
import Typo from "../../public/images/logo-typo.png";
import { motion, Variants } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="min-[1440px]:max-w-7xl max-w-6xl mx-auto mt-12.5">
      <div className="max-[30rem]:hidden bg-black rounded-[50px] p-2.5">
        <nav>
          <ul className="flex flex-wrap items-center justify-between gap-[14.17px] text-white">
            <li className="px-10 py-5 rounded-[60px] transition-colors hover:bg-primary cursor-pointer bg-primary">
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

      <div className="relative px-6">
        <div className="absolute z-50 hidden max-[30rem]:flex flex-1 justify-start items-stretch w-[calc(100%-48px)] h-100 rounded-2xl overflow-hidden">
          <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="w-full">
            <motion.div className="bg-black absolute top-0 left-0 bottom-0 w-full" variants={sidebarVariants} />
            <Navigation />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </motion.nav>
        </div>
      </div>
    </header>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul style={list} variants={navVariants}>
    {[0, 1, 2, 3, 4].map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }: { i: number }) => {
  const border = `2px solid ${colors[i]}`;
  return (
    <motion.li style={listItem} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div style={{ ...iconPlaceholder, border }} />
      <div style={{ ...textPlaceholder, border }} />
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 30px 30px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path fill="none" strokeWidth="3" stroke="#FFFFFF" strokeLinecap="round" {...props} />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 21,
  left: 19,
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
  width: 230,
};

const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};

const iconPlaceholder: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20,
};

const textPlaceholder: React.CSSProperties = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1,
};
