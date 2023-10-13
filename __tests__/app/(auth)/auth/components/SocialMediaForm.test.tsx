import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SocialMediaForm } from "../../../../../app/(auth)/auth/components/SocialMediaForm";

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
