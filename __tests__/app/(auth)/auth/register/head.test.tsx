import React from "react";
import { render, cleanup } from "@testing-library/react";
import Head from "../../../../../app/(auth)/auth/register/head";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<head />", () => {
  it("renders without errors", () => {
    const { getByText } = render(<Head />);
    expect(getByText("Register"));
  });
});
