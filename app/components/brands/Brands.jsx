/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import SecondaryHeading from "../layout/SecondaryHeading";
import PrimaryHeading from "../layout/PrimaryHeading";
import { brandsImg } from "@/app/constant";
import Image from "next/image";
import dynamic from "next/dynamic";

const Brands = () => {
  return (
    <>
      <div className="bg-white py-[185px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto  mb-8">
            <SecondaryHeading color="#00A077">BRANDS</SecondaryHeading>
            <PrimaryHeading color="#3B3E43">
              We work with thousands of the world’s leading brands
            </PrimaryHeading>
          </div>
          <div className="grid grid-cols-5 content-center gap-5 mb-10">
            {brandsImg &&
              brandsImg.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                  >
                    <Image
                      key={index}
                      src={value}
                      alt="brands"
                      width={143}
                      height={100}
                    />
                  </motion.div>
                );
              })}
          </div>
          <div className="text-center max-w-sm mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#424A4D] text-base"
            >
              You're going to be in good company. We work with world's leading
              brands.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Brands), {
  ssr: false,
});
