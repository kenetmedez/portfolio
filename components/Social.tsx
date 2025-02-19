import React from "react";
import Image from "next/image";

interface SocialProps {
  id?: string;
}
const Social = ({ id }: SocialProps) => {
  return (
    <div
      id={id}
      className=" flex flex-row items-center justify-center lg:pr-24 gap-5 lg:pb-10 pb-0 lg:pt-6 pt-4 z-30"
    >
      <a
        href="https://www.linkedin.com/in/kenetmedez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/linkedin.png"
          alt="linkedIn"
          width={25}
          height={10}
          className="cursor-pointer hover:animate-pulse hover:scale-105"
        />
      </a>

      <a
        href="mailto:“kenetmedez@gmail.com”"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/email.png"
          alt="gmail"
          width={30}
          height={30}
          className="cursor-pointer hover:animate-pulse hover:scale-105"
        />
      </a>
      <a
        href="https://github.com/kenetmedez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github.png"
          alt="github"
          width={25}
          height={10}
          className="cursor-pointer hover:animate-pulse hover:scale-105"
        />
      </a>

      <a
        href="https://www.discordapp.com/users/758201438567530507"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Image
          src="/discord.png"
          alt="discord"
          width={40}
          height={40}
          className="cursor-pointer hover:animate-pulse hover:scale-105"
        />
      </a>
    </div>
  );
};

export default Social;
