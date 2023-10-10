import React from "react";
import { render, cleanup } from "@testing-library/react";
import { GoalStep } from "./GoalStep";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<GoalStep />", () => {
	it("renders without errors", () => {
		const { getByText } = render(<GoalStep />);
		expect(getByText(/Excellent, your account has been succesfully created!/n));
	});
});
