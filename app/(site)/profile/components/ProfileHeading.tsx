"use client";

import { BiLogOut } from "react-icons/bi";
import { Button } from "../../../components/ui/button";
import React from "react";
import { useUserContext } from "../../../../context/UserContext";
import { ImageWithFallback, poppins } from "../../../components";

export const ProfileHeading = () => {
  const { user } = useUserContext();


  return (
    <header className="flex justify-between" data-testid="header">
      <div>
        <p className={`${poppins.className} text-surface-light text-3xl font-bold`}>{user?.username || "Testing"}</p>
      </div>
      <div className="">
        <ImageWithFallback
          className="object-contain rounded-full w-24"
          src={user?.image ?? ""}
          alt="fortys"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </header>
  );
};
