import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../app/(auth)/auth/forgot-password/page";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("<Page />", () => {
  it("renders without errors", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Forgot Password"));
  });
});
