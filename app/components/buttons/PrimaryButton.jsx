import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button
        type="button"
        className="bg-white hover:bg-[#f2f3f2] hover:shadow-md text-[#57B3FE] text-base font-bold rounded-[60px] px-14 py-5 uppercase transition-all"
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
