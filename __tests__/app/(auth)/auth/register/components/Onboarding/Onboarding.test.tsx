import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { Onboarding } from "../../../../../../../app/(auth)/auth/register/components/Onboarding/Onboarding";
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      replace: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.mock("../../../../../../../context/UserContext");

describe("Onboarding component", () => {
  describe("Onboarding component", () => {
    it("should display the initial step correctly", () => {
      const { getByText } = render(<Onboarding />);
      expect(getByText("Hi stranger!")).toBeInTheDocument();
    });

    it("should display the next step when 'Continue' is clicked", () => {
      const { getByText } = render(<Onboarding />);
      const continueButton = getByText("Continue");
      fireEvent.click(continueButton);

      expect(getByText("Gender")).toBeInTheDocument();
      expect(getByText("Birthday")).toBeInTheDocument();
    });

    it("should submit the form and call registerUser", async () => {
      const { getByText, getByTestId } = render(
        <Onboarding currentStepMock={2} />,
      );
      expect(getByText("Full name")).toBeInTheDocument();
      expect(getByText("Username")).toBeInTheDocument();
      expect(getByText("Email")).toBeInTheDocument();
      expect(getByText("Password")).toBeInTheDocument();
      fireEvent.click(getByText("Continue"));

      await waitFor(() => {
        expect(getByTestId("text")).toBeInTheDocument();
      });
    });
  });
});
