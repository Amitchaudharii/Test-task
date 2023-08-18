import Brands from "./components/brands/Brands";
import Hero from "./components/hero/Hero";
import OurProcess from "./components/ourProcess/OurProcess";
import WhatYoureGet from "./components/whatGet/WhatYoureGet";
import Working from "./components/woking/working";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatYoureGet />
      <OurProcess />
      <Brands />
      <Working />
    </>
  );
}
