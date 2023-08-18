"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import SecondaryHeading from "../layout/SecondaryHeading";
import PrimaryHeading from "../layout/PrimaryHeading";
import { motion } from "framer-motion";
import PrimaryButton from "../buttons/PrimaryButton";

const working = () => {
  return (
    <>
      <div className="bg-workingBg bg-cover bg-no-repeat py-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="max-w-[417px]">
            <SecondaryHeading color="#fff">start with us</SecondaryHeading>
            <PrimaryHeading color="#fff">
              Start working faster today
            </PrimaryHeading>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-[1.4rem] my-5"
            >
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PrimaryButton>Get started</PrimaryButton>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/working/workingImg.svg"
              alt="working"
              width={624}
              height={523}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(working), {
  ssr: false,
});
