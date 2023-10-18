import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AccountTypeStep } from "../../../../../../../app/(auth)/auth/register/components/AccountTypeStep";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../../../../../../app/(auth)/auth/register/components/Onboarding";

const mockRegister = jest.fn();

describe("<AccountTypeStep />", () => {
  const TestComponent = () => {
    const mockControl = useForm<RegisterForm>().control;

    return <AccountTypeStep register={mockRegister} control={mockControl} />;
  };
  it("renders without errors", () => {
    render(<TestComponent />);

    expect(screen.getByText("Hi stranger!")).toBeInTheDocument();
    expect(screen.getByTestId("join")).toBeInTheDocument();
  });

  it("renders radio buttons for account types", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("member-radio")).toBeInTheDocument();
  });
});
