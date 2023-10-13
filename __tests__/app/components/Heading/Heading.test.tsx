import React from "react";
import { render, cleanup } from "@testing-library/react";
import Heading from "../../../../app/components/Heading/Heading";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<Heading />", () => {
  it("should render a Heading element with title, subtitle and center", () => {
    const title = "Hello I'm Developer";
    const subtitle = "Bye";
    const { getByText, container } = render(
      <Heading center={true} subtitle={subtitle} title={title} />,
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-center");
  });

  it("should render a Heading element with title, subtitle and withouth center", () => {
    const title = "Hello I'm Developer";
    const subtitle = "Bye";
    const { getByText, container } = render(
      <Heading center={false} subtitle={subtitle} title={title} />,
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-start");
  });
});
