import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SocialMediaForm } from "../../../../../app/(auth)/auth/components/SocialMediaForm";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			push: jest.fn(),
			replace: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));

jest.mock("@react-oauth/google");

describe("<SocialMediaForm />", () => {
	it("renders without errors", () => {
		const { getByText } = render(<SocialMediaForm />);
		expect(getByText("Or Login with"));
	});
});
