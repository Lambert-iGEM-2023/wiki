import React, { useState } from "react";
import NavButton from "../components/NavButton";
import { motion, useScroll, useMotionValue } from "framer-motion";
import ProgressBar from "../components/ProgressBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <>
      <body className="m-8 mx-10">
        <ProgressBar />

        <div className="flex justify-between">
          <span className="font-serif">Lambert_GA</span>
          <NavButton isOpen={openNavBar} />
        </div>
        {children}
      </body>
    </>
  );
};

export default Layout;
