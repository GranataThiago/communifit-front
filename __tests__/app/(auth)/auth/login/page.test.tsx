import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../app/(auth)/auth/login/page";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
	fetchMock.dontMock();
});

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

describe("<Page />", () => {
	it("renders without errors", () => {
		const { getByText, getAllByTestId } = render(<Page />);
		expect(getAllByTestId("text-footer")[0]);
		expect(getByText("Sign Up"));
	});
});
