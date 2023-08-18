import React from "react";
import PrimaryHeading from "../layout/PrimaryHeading";
import SecondaryHeading from "../layout/SecondaryHeading";
import WhatYoureGetBox from "./WhatYoureGetBox";

const WhatYoureGet = () => {
  const getItems = [
    {
      ImgLink: "/images/whatGet/icon01.svg",
      title: "Grow your business",
      desc: "The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.",
      iconBg: "#FFE7DB",
    },
    {
      ImgLink: "/images/whatGet/icon02.svg",
      title: "Drive more sales",
      desc: "A potential customer, once lost, is hard to retain back. But keeping some critical factors in mind, we can, for sure, use these loyalty programs as customer retention tools.",
      iconBg: "#E7F2EF",
    },
    {
      ImgLink: "/images/whatGet/icon03.svg",
      title: "Handle by Expert",
      desc: "We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively",
      iconBg: "#FAF3D8",
    },
    {
      ImgLink: "/images/whatGet/icon04.svg",
      title: "UX Research",
      desc: "UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.",
      iconBg: "#C0F2EF",
    },
    {
      ImgLink: "/images/whatGet/icon05.svg",
      title: "Business Audit",
      desc: "An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. ",
      iconBg: "#EDE7F2",
    },
    {
      ImgLink: "/images/whatGet/icon06.svg",
      title: "Data tracking",
      desc: "The hardware and software, which when used together allows you to know where something is at any point in time",
      iconBg: "#D8F0FA",
    },
  ];

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
            {getItems &&
              getItems.map((value, index) => {
                return (
                  <WhatYoureGetBox
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

export default WhatYoureGet;
