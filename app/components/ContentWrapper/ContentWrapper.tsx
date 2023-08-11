import React from "react";
import Socials from "../Socials/Socials";
import Cards from "../Cards/Cards";
import Image from "next/image";

const ContentWrapper = () => {
  return (
    <section className="px-4 py-4 md:px-18 px md:pb-18 md:pt-[18px] md:rounded-[40px] md:mt-12 bg-white md:shadow-wrapper text-center w-full max-w-[33.75rem] md:max-w-[41.5rem] flex flex-col items-center justify-center">
      <Image
        src="/assets/images/hoobe-icon.png"
        alt="logo"
        width={104}
        height={104}
        className="my-4"
        loading="lazy"
      />
      <h3 className="text-[22px] font-semibold mb-6">hoo.be coding exercise</h3>
      <Socials />
      <Cards />
    </section>
  );
};

export default ContentWrapper;
