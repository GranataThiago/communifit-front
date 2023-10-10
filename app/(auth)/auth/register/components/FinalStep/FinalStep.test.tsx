import React from "react";
import { render, cleanup } from "@testing-library/react";
import { FinalStep } from "./FinalStep";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<FinalStep />", () => {
	it("renders without errors", () => {
		const { getByText } = render(<FinalStep />);
		expect(getByText(/Excellent, your account has been succesfully created!/n));
	});
});
