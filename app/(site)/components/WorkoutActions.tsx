"use client";

import { BsPencil } from "react-icons/bs";
import { Button } from "../../components/ui/button";
import React from "react";
import apiInstance from "../../api";
import { usePlanContext } from "../../../context/CreatePlanContext/PlanContext";

export const WorkoutActions = () => {
  const { workout } = usePlanContext();

  /* TODO: Create action so it updates the plan */
  const onWorkoutUpdated = () => {
    const newWorkoutPlan = {
      exercises: workout,
      userId: "",
    };
    console.log(newWorkoutPlan);
    // apiInstance.post('/plans', {
    //     newWorkoutPlan
    // });
  };

  return (
    <div data-testid="div">
      <Button variant="filled" onClick={onWorkoutUpdated}>
        <span className="flex items-center justify-center gap-3">
          <BsPencil />
          Update
        </span>
      </Button>
    </div>
  );
};
