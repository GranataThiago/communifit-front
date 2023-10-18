import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Button } from "../../../../app/components/ui/button";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<Button />", () => {
  it("should render a button element with children and variant props", () => {
    const variant = "filled";
    const children = "Click me";
    const { container } = render(<Button variant={variant}>{children}</Button>);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      "bg-primary text-white rounded-full w-full py-3 font-[500] disabled:bg-gray-500",
    );
    expect(container.firstChild).toHaveTextContent(children);
  });

  it("should render a button element with additional className prop", () => {
    const className = "custom-class";
    const variant = "filled";
    const { container } = render(
      <Button variant={variant} className={className}>
        Click me
      </Button>,
    );

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(className);
  });
});
