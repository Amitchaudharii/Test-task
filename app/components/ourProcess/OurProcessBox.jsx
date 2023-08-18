import React from "react";
import VisualBox from "../box/VisualBox";

const OurProcessBox = (OurProcessBoxProps) => {
  const { SvgLink, title, desc, iconBg } = OurProcessBoxProps;

  return (
    <>
      <div className="bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <div>
          <VisualBox
            ImgLink={SvgLink}
            title={title}
            desc={desc}
            iconBg={iconBg}
          />
        </div>
      </div>
    </>
  );
};

export default OurProcessBox;
