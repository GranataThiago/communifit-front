import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SocialMediaForm } from "./SocialMediaForm";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<SocialMediaForm />", () => {
	it("renders without errors", () => {
		const { getByText } = render(<SocialMediaForm />);
		expect(getByText("Or Sign In with"));
	});
});
