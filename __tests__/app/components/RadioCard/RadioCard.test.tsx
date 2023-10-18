import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RadioCard } from "../../../../app/components/RadioCard";

describe("RadioCard", () => {
  it("renders RadioCard component", () => {
    const { getByText, container } = render(
      <RadioCard
        label="Option 1"
        id="option1"
        value="option1"
        icon={<span>Icon</span>}
      />,
    );

    const labelElement = getByText("Option 1");
    expect(labelElement).toBeInTheDocument();
    const iconElement = container.querySelector("span");

    expect(iconElement).toBeInTheDocument();
  });

  it("renders RadioCard withouth icon", () => {
    const { container } = render(
      <RadioCard label="Option 1" id="option1" value="option1" icon={null} />,
    );

    const iconElement = container.querySelector("span");

    expect(iconElement).not.toBeInTheDocument();
  });
});
