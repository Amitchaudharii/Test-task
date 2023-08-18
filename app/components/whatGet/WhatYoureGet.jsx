import React from "react";
import PrimaryHeading from "../layout/PrimaryHeading";
import SecondaryHeading from "../layout/SecondaryHeading";
import VisualBox from "../box/VisualBox";
import { whatGetBoxItems } from "@/app/constant";
import dynamic from "next/dynamic";

const WhatYoureGet = () => {
  return (
    <>
      <div className="bg-whatGetBg bg-no-repeat bg-cover mb-[185px]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <SecondaryHeading color="#00a07889">features</SecondaryHeading>
            <PrimaryHeading color="#3B3E43">
              We are here to help <br /> you with
            </PrimaryHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {whatGetBoxItems &&
              whatGetBoxItems.map((value, index) => {
                return (
                  <VisualBox
                    key={index}
                    ImgLink={value.ImgLink}
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

export default dynamic(() => Promise.resolve(WhatYoureGet), {
  ssr: false,
});
