import React from "react";
import { render, cleanup } from "@testing-library/react";
import { HomeScreen } from "../../../app/(site)/components/screens/HomeScreen";
import Page from "../../../app/(site)/page";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

jest.mock("recharts");

describe("<Page />", () => {
  it("renders trainer role", () => {
    render(<Page />);
    expect(render(<HomeScreen />));
  });
});
