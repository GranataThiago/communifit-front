import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../app/(site)/chat/page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders ChatListPage", async () => {
		const { getByTestId, getByText } = render(await Page());
		expect(getByTestId("section"));
		expect(getByText("James Lopez"));
	});
});
