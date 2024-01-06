import React from "react";
import Image from "next/image";
import { BsPeople } from "react-icons/bs";

interface CommunityCardProps {
  name: string;
  stars: number;
  members: number;
}

const getStars = (amount: number) => {
  const MAX_STARS = 5;

  return "★".repeat(amount) + "☆".repeat(MAX_STARS - amount);
};

export const CommunityCard = ({ name, stars, members }: CommunityCardProps) => {
  return (
    <div
      className="min-w-64 flex bg-secondary-light gap-4 hover:cursor-pointer transition-colors p-4 rounded-xl"
      data-testid="container"
    >
      <Image
        className="rounded-full w-20 h-20"
        src="https://i.pravatar.cc/300"
        alt="fortys"
        width={32}
        height={32}
      />

      <div className="my-auto">
        <p className="text-2xl font-bold text-surface-light">{name}</p>
        <div className="flex gap-2 items-center">
          {/* {getStars(stars)}{" "} */}
          <p className="flex gap-2 items-center text-surface-dark">
            <BsPeople></BsPeople> {members} members
          </p>
        </div>
      </div>
    </div>
  );
};
