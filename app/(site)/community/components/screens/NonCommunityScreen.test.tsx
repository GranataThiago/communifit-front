import React from "react";
import { cleanup, render } from "@testing-library/react";
import { NonCommunityScreen } from "./NonCommunityScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<NonCommunityScreen />", () => {
	it("renders NonCommunityScreen", async () => {
		const { getByText } = render(await NonCommunityScreen());
		expect(getByText("Recommended for you"));
	});
});
