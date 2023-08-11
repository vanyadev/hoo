import React from "react";
import SocialItem from "./SocialItem";
import pageData from '../../../pageData.json'

interface IUserSocialPlatform {
  id: string;
  link: string;
  socialPlatform: number;
}

const Socials = () => {
  const userSocialPlatforms: IUserSocialPlatform[] =
    pageData.userSocialPlatform;

  const getSocialIconUrl = (socialPlatform: number): string => {
    const iconMappings: Record<number, string> = {
      0: "instagram.svg",
      59: "threads.svg",
      6: "tiktok.svg",
      7: "twitter.svg",
    };

    return iconMappings[socialPlatform] || "";
  };

  return (
    <ul className="flex justify-center items-center gap-2 mb-5">
      {userSocialPlatforms.map((social) => (
        <SocialItem
          key={social.id}
          imgUrl={getSocialIconUrl(social.socialPlatform)}
          {...social}
        />
      ))}
    </ul>
  );
};

export default Socials;
