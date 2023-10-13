import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../app/(site)/community/create/page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("<Page />", () => {
	it("renders page create", () => {
		const { getByTestId } = render(<Page />);
		expect(getByTestId("div"));
	});
});
