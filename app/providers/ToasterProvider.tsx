"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export const renderToast = (title: string, icon: React.ReactNode) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-popIn" : "animate-popOut"
      } max-w-md w-3/4 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5"></div>
          <div className="pt-0.5">{icon}</div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

export default ToasterProvider;
