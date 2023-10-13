import React from "react";
import { PlanScreen } from "../../../components/screens";
import PlanProvider from "../../../../../context/CreatePlanContext/PlanProvider";

export default function CreatePlanPage() {
  return (
    <PlanProvider>
      <PlanScreen />
    </PlanProvider>
  );
}
