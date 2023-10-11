import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "./page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("recharts");

describe("<Page />", () => {
	it("renders trainer role", () => {
		const { getByTestId } = render(<Page roleMock='trainer' />);
		expect(getByTestId("clients"));
	});

	it("renders member role", () => {
		const { getByTestId } = render(<Page roleMock='member' />);
		expect(getByTestId("work"));
	});
});
