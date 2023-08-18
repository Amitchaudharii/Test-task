"use client";
import { motion } from "framer-motion";
import React from "react";

const PrimaryHeading = ({ children, color }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-medium"
        style={{ color: color }}
      >
        {children}
      </motion.h2>
    </>
  );
};

export default PrimaryHeading;
