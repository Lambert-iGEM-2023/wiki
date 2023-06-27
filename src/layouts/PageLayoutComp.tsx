import React, { useState } from "react";
import NavButton from "../components/NavButton";
import { motion, useScroll, useMotionValue } from "framer-motion";
import ProgressBar from "../components/ProgressBar";

interface LayoutProps {
  children: React.ReactNode;
  header: string;
  title: string;
}

const styling = `
prose max-w-3xl
prose-h1:font-serif prose-h1:text-4xl
prose-h2:font-sans prose-h2:text-2xl
prose-h3:font-sans prose-h3:text-lg prose-h3:font-semibold prose-h3:text-yellow-800
prose-p:font-sans prose-p:text-gray-900 
prose-a:font-sans prose-a:text-gray-900 prose-a:underline prose-a:font-normal prose-a:text-yellow-800
prose-quoteless
prose-strong
prose-em
prose-ol
prose-ul
prose-li:text-gray-800
prose-table
prose-th
prose-tr
prose-td
prose-img

`;

const Layout = ({ children, header, title }: LayoutProps) => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <>
      <body className="w-screen">
        {header}
        <div
          className={`bg-cover absolute w-screen left-0 top-0 p-0 m-0 z-10 h-1/3 `}
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 36.46%, #FFFFFF 100%), url(${header})`,
            backgroundSize: "cover",
          }}
        />
        <ProgressBar />
        <div className="flex justify-between m-5">
          <span className="font-serif">Lambert_GA</span>
          <NavButton />
        </div>
        <div className="flex justify-center w-full">
          <div className="">
            <p className="font-serif text-6xl z-30 absolute top-1/3 -translate-y-1/2 lg:-translate-x-20">
              {title}
            </p>

            <div className="absolute top-1/3 translate-y-20 h-32 lg:-translate-x-20 lg:border-l-2 border-gray-900 z-50"></div>

            <div className={styling + "mt-[33vh] break-words"}>{children}</div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Layout;
