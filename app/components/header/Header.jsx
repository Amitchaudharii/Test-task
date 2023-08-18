"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import { headerItems } from "@/app/constant";
import dynamic from "next/dynamic";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-between fixed top-0 left-0 right-0 px-12 py-[24px] z-50 transition-all ${
          scrollPosition > 10
            ? "bg-white/30 backdrop-blur-lg backdrop-filter border-b border-gray-200 shadow"
            : "bg-transparent"
        }`}
      >
        <div>
          <Image
            src="/images/header/logo.png"
            alt="Logo"
            width={250}
            height={300}
          />
        </div>
        <div>
          <HeaderLinks headerItems={headerItems} />
        </div>
        <PrimaryButton>Get started</PrimaryButton>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), {
  ssr: false,
});
