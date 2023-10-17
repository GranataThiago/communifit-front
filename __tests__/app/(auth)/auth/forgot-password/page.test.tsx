import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../app/(auth)/auth/forgot-password/forgot-password";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<Page />", () => {
  it("renders without errors", () => {
    const { getByText } = render(<Page />);
    expect(getByText("page"));
  });
});
