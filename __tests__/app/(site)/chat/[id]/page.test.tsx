import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../app/(site)/chat/[id]/page";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<Page />", () => {
  it("renders ChatPage", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Emanuel Antón"));
  });
});
