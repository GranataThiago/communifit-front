"use client";

import { BiLogOut } from "react-icons/bi";
import { Button } from "../../../components/ui/button";
import React from "react";
import { useUserContext } from "../../../../context/UserContext";

export const ProfileHeading = () => {
  const { user, logout } = useUserContext();

  const onLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between p-6" data-testid="header">
      <div>
        <p className="font-semibold text-lg">{user?.fullName}</p>
        <p>{user?.username}</p>
      </div>
      <Button
        data-testid="button"
        variant="filled"
        className="bg-red-500 w-12 h-12"
        onClick={onLogout}
      >
        <BiLogOut size={24} className="ml-2" />
      </Button>
    </header>
  );
};
