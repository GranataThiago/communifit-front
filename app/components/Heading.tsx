"use client";
import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = (props: HeadingProps) => {
  const { center, title, subtitle } = props;
  return (
    <header className={center ? "text-center" : "text-start"}>
      <h2 className="text-surface-light text-2xl font-bold">{title}</h2>

      <p className="font-light text-surface-dark mt-2">{subtitle}</p>
    </header>
  );
};

export default Heading;
