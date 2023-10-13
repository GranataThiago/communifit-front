import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { PlanScreen } from "../../../../../../app/(site)/components";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<PlanScreen />", () => {
  it("renders PlanScreen", () => {
    const { getByTestId } = render(<PlanScreen />);
    expect(getByTestId("main"));
  });
});
