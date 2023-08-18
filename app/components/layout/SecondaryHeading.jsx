"use client";
import { motion } from "framer-motion";
import React from "react";

const SecondaryHeading = ({ children, color }) => {
  return (
    <>
      <motion.h4
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm font-bold uppercase mb-7 opacity-50"
        style={{ color: color }}
      >
        {children}
      </motion.h4>
    </>
  );
};

export default SecondaryHeading;
