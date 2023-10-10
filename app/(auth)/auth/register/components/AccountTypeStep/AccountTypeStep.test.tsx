import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AccountTypeStep } from "./AccountTypeStep";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../Onboarding/Onboarding";

const mockRegister = jest.fn();
// eslint-disable-next-line
const mockControl = useForm<RegisterForm>().control;

describe("<AccountTypeStep />", () => {
	it("renders without errors", () => {
		render(<AccountTypeStep register={mockRegister} control={mockControl} />);

		expect(screen.getByText("Hi stranger!")).toBeInTheDocument();
		expect(screen.getByText("Join as trainer or member?")).toBeInTheDocument();

		expect(
			screen.getByText("I'm a member, looking for a community.")
		).toBeInTheDocument();
		expect(
			screen.getByText("I'm a trainer, looking for members.")
		).toBeInTheDocument();
	});

	it("renders radio buttons for account types", () => {
		render(<AccountTypeStep register={mockRegister} control={mockControl} />);

		expect(screen.getByTestId("member-radio")).toBeInTheDocument();
		expect(screen.getByTestId("trainer-radio")).toBeInTheDocument();
	});

	it("selects an account type when clicked", () => {
		render(<AccountTypeStep register={mockRegister} control={mockControl} />);

		const memberRadio = screen.getByTestId("member-radio");
		const trainerRadio = screen.getByTestId("trainer-radio");

		fireEvent.click(memberRadio);

		expect(memberRadio).toBeChecked();
		expect(trainerRadio).not.toBeChecked();

		fireEvent.click(trainerRadio);

		expect(memberRadio).not.toBeChecked();
		expect(trainerRadio).toBeChecked();
	});
});
