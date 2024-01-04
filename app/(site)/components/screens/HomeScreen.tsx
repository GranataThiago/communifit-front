import React from "react";
import TrainerScreen from "./TrainerScreen/TrainerScreen";
import ClientScreen from "./ClientScreen/ClientScreen";

export const HomeScreen = ({user}: any) => {

  return user?.type === "trainer" ? <TrainerScreen /> : <ClientScreen />;
};
