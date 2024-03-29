import Image from "next/image";
import Link from "next/link";
import React from "react";
import { montserrat, poppins } from "../../../../components/fonts";

interface ChatCardProps {
  user: string;
  message: string;
}

export const ChatCard = ({ user, message }: ChatCardProps) => {
  return (
    <Link
      className={`flex justify-between ${montserrat.className}`}
      href={"/chat/pantone"}
      data-testid="link"
    >
      <Image
        className="rounded-full w-16 h-16"
        src="https://i.pravatar.cc/300"
        alt="fortys"
        width={32}
        height={32}
      />

      <div className="my-auto p-1 w-2/3">
        <p className={`${poppins.className} text-lg font-bold text-surface-light`}>{user}</p>
        <p className={`${montserrat.className} text-surface-dark text-md whitespace-nowrap overflow-hidden text-ellipsis`}>
          {message}
        </p>
      </div>

      <div className="my-auto">
        <p className="text-surface-dark">12:39</p>
      </div>
    </Link>
  );
};
