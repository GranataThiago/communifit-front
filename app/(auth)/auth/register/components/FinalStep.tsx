import React from "react";

export const FinalStep = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <p className="mx-auto font-bold text-3xl text-center" data-testid="text">
        Excellent, your account has been{" "}
        <span className="text-primary">succesfully</span> created!{" "}
      </p>
      <p className="mx-auto text-md text-center text-gray-500">
        You will be redirected in 3 seconds. If not, please click the "Continue"
        button below.
      </p>
    </div>
  );
};
