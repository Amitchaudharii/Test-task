"use client";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center bg-heroBg bg-no-repeat bg-cover h-[110vh] mb-96">
        <div className="relative max-w-6xl mx-auto text-white text-center mt-[190px]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=" text-[4.2rem] font-medium mb-3"
          >
            A Digital Product Design Agency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl mb-12"
          >
            We are Creative and Professional Digital Agency
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PrimaryButton>Get started</PrimaryButton>
          </motion.div>
          <div className="absolute top-72 -left-32 -right-32">
            <Image
              src="/images/hero/dashImg.svg"
              alt="Dashboard Image"
              width={1400}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
