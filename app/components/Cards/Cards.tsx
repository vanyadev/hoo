import React from "react";
import Card from "./Card";
import Link from "next/link";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Card>
        <Link
          href="https://hoo.be/trending?utm_source=hoobe&utm_medium=social"
          target="_blank"
          rel="noreferrer"
          className="h-full flex flex-col "
        >
          <Image
            src="/assets/images/content.jpg"
            alt="content"
            className="absolute left-0 top-0 w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            width={500}
            height={300}
            priority={true}
          />
          <div className="flex justify-between pb-6 px-6 mt-auto text-white absolute bottom-0 w-full z-10">
            <p className="font-medium">explore hoo.be</p>
            <Image
              src="/assets/images/hoobe.svg"
              alt="hoobe"
              loading="lazy"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </Card>
      <Card>
        <iframe
          width="520"
          height="294"
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/SCdJDYPbBoQ?list=UUvd_AUR6ErsRblEWHrCxlDQ"
          title="It&#39;s more than just a link."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Card>
    </div>
  );
};

export default Cards;
