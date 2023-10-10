import React from "react";
import { render, cleanup } from "@testing-library/react";
import { FinalStep } from "./FinalStep";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<FinalStep />", () => {
	it("renders without errors", () => {
		const { getByTestId } = render(<FinalStep />);
		expect(getByTestId("text"));
	});
});
