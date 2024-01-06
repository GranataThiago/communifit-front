import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Workout } from "../../../../../app/(site)/components";
jest.mock("../../../../../context/UserContext", () => ({
  useUserContext: () => ({
    user: {
      fullname: "John Doe",
      username: "johndoe",
    },
    logout: jest.fn(),
  }),
}));
describe("<Workout />", () => {
  it("renders Workout component", () => {
    const { getByText } = render(<Workout />);
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("Tuesday")).toBeInTheDocument();
  });
  it("switches the active day on click", () => {
    const { getByText } = render(<Workout />);
    const tuesdayButton = getByText("Tuesday");

    fireEvent.click(tuesdayButton);
    expect(tuesdayButton).toHaveClass("text-surface-light");

    const activeDay = getByText("Monday");
    expect(activeDay).toHaveClass("text-gray-300");
  });
});
