import React from "react";
import Image from "next/image";

interface HomeCardProps {
  color?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  color,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${color} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}>
      {/* The above color(s) is configured in tailwind.config.ts */}

      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img}
          alt={title}
          height={27}
          width={27}
          sizes="100vw"
          style={{ height: "auto", width: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
