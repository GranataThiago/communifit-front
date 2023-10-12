import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ChatCard } from "./ChatCard";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<ChatCard />", () => {
	it("renders ChatCard", () => {
		const { getByTestId } = render(
			<ChatCard user='userTest' message='testing' />
		);
		expect(getByTestId("link"));
	});
});
