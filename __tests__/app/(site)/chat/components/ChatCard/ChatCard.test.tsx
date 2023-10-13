import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ChatCard } from "../../../../../../app/(site)/chat/components/ChatCard/ChatCard";

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
