"use client";
import React from "react";
import { motion } from "framer-motion";
import Icon from "../icon/Icon";

const VisualBox = (VisualBoxProps) => {
  const { ImgLink, title, desc, iconBg } = VisualBoxProps;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-[#3B3E43] rounded-2xl cursor-pointer px-10 py-[50px]"
      >
        <Icon iconBg={iconBg} link={ImgLink} />
        <h4 className="text-[1.4rem] font-bold my-5">{title}</h4>
        <p className="text-base font-medium text-[#595E64]">{desc}</p>
      </motion.div>
    </>
  );
};

export default VisualBox;
