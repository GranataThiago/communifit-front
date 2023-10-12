import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "./page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders CommunityPage", async () => {
		const { getByText } = render(await Page());
		expect(getByText(" Hello, Trainer"));
	});
});
