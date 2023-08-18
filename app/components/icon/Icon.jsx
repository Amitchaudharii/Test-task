import Image from "next/image";
import React from "react";

const Icon = (iconProps) => {
  const { iconBg, link } = iconProps;

  return (
    <>
      <span
        className="flex items-center justify-center w-[50px] h-[50px] rounded-2xl"
        style={{ backgroundColor: iconBg }}
      >
        <Image src={link} alt="icon" width={23} height={23} />
      </span>
    </>
  );
};

export default Icon;
