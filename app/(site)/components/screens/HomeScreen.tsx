"use client";
import React from "react";
import { useUserContext } from "../../../../context/UserContext";
import TrainerScreen from "./TrainerScreen/TrainerScreen";
import ClientScreen from "./ClientScreen/ClientScreen";

export const HomeScreen = () => {
  const { user } = useUserContext();

  return user?.type === "trainer" ? <TrainerScreen /> : <ClientScreen />;
};
