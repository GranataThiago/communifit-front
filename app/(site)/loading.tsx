import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="animate-spin bg-transparent w-32 h-32 border-[1rem] border-gray-400 border-t-[1rem] border-t-primary rounded-full"></div>
    </div>
  );
}
