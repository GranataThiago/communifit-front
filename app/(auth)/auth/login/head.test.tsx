import React from "react";
import { render, cleanup } from "@testing-library/react";
import head from "./head";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<head />", () => {
	it("renders without errors", () => {
		const { getByText } = render(<head />);
		expect(getByText("Login"));
	});
});
