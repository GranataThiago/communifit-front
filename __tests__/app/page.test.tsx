import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../app/page-copy";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders without errors", () => {
		const { getByText } = render(<Page />);
		expect(getByText("Communifit"));
	});
});
