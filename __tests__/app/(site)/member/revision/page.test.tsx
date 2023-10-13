import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../app/(site)/page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders trainer role", () => {
		const { getByText } = render(<Page />);
		expect(getByText("Upload your progress for week 3"));
	});
});
