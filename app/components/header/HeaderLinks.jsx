import Link from "next/link";
import React from "react";

const HeaderLinks = ({ headerItems }) => {
  return (
    <>
      <ul className="flex items-center gap-7">
        {headerItems &&
          headerItems.map((value, index) => {
            return (
              <li key={index}>
                <Link href="/" className="text-white text-base font-medium">
                  {value}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default HeaderLinks;
