"use client";

import { BiLogOut } from "react-icons/bi";
import { Button } from "../../../components/ui/button";
import React from "react";
import { useUserContext } from "../../../../context/UserContext";
import { poppins } from "../../../components";

export const ProfileHeading = () => {
  const { user, logout } = useUserContext();

  const onLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between" data-testid="header">
      <div>
        <p className={`${poppins.className} text-surface-light text-3xl font-bold`}>{user?.username}</p>
      </div>
      <Button
        data-testid="button"
        variant="filled"
        className="bg-red-500 w-12 h-12 grid place-content-center"
        onClick={onLogout}
      >
        <BiLogOut size={24} />
      </Button>
    </header>
  );
};
