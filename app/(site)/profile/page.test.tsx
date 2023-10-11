import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "./page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders page", () => {
		const { getByTestId } = render(<Page />);
		expect(getByTestId("content"));
	});
});
