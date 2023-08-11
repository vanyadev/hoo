import Image from "next/image";
import Link from "next/link";
import React from "react";

const Actions = () => {
  return (
    <div className="mt-24 mb-8 text-center">
      <button className="rounded-[0.625rem] p-2 bg-hoobe-primary flex items-center gap-2 text-white text-sm font-medium hover:bg-hoobe-dark transition-colors duration-200">
        <Image
          src="/assets/images/hoobe-button.svg"
          alt="hoobe"
          loading="lazy"
          width={24}
          height={24}
        />
        <span>create your hoo.be</span>
      </button>
      <Link
        href="https://devapp.hoo.be/login"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block py-1 px-3 text-sm text-[#848484] font-semibold hover:text-hoobe-primary hover:underline transition-colors duration-200"
      >
        login
      </Link>
    </div>
  );
};

export default Actions;
