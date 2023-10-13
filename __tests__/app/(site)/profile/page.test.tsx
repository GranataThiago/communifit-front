import React from "react";
import { render, cleanup } from "@testing-library/react";
import ProfilePage from "../../../../app/(site)/profile/page";
afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders page", () => {
		const { getByTestId } = render(<ProfilePage />);
		expect(getByTestId("content"));
	});
});
