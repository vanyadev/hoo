import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ISocialItem {
  id: string;
  imgUrl: string;
  link: string;
}

const SocialItem: React.FC<ISocialItem> = ({ imgUrl, link }) => {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-black flex items-center justify-center w-10 h-10 hover:scale-105 transition-transform duration-200"
      >
        <Image
          src={`/assets/images/${imgUrl}`}
          alt="social"
          className="w-6 h-6"
          loading="lazy"
          width={24}
          height={24}
        />
      </Link>
    </li>
  );
};

export default SocialItem;
