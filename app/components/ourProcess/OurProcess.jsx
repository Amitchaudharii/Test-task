"use client";
import React from "react";
import { motion } from "framer-motion";
import SecondaryHeading from "../layout/SecondaryHeading";
import PrimaryHeading from "../layout/PrimaryHeading";
import { OurProcessBoxItems } from "@/app/constant";
import OurProcessBox from "./OurProcessBox";
import dynamic from "next/dynamic";

const OurProcess = () => {
  return (
    <>
      <div className="bg-ourProcess bg-no-repeat bg-cover py-[185px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto  mb-8">
            <SecondaryHeading color="#fff">how it works</SecondaryHeading>
            <PrimaryHeading color="#fff">Our Process</PrimaryHeading>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-[1.4rem] mt-5"
            >
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </motion.p>
          </div>
          <div className="flex flex-col gap-10">
            {OurProcessBoxItems &&
              OurProcessBoxItems.map((value, index) => {
                return (
                  <OurProcessBox
                    key={index}
                    SvgLink={value.ImgLink}
                    title={value.title}
                    desc={value.desc}
                    iconBg={value.iconBg}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(OurProcess), {
  ssr: false,
});
