import React from "react";
import { render, cleanup } from "@testing-library/react";
import Message from "../../../../../../app/(site)/chat/components/Message/Message";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Message />", () => {
	it("should render a message with sender as true", () => {
		const { getByText, getByTestId } = render(
			<Message message='Hello, World!' sender={true} />
		);
		const messageElement = getByText("Hello, World!");
		const div = getByTestId("text");

		expect(messageElement).toBeInTheDocument();
		expect(div).toHaveClass(
			"rounded-lg p-2 bg-primary text-white ml-auto rounded-br-none"
		);
	});

	it("should render a message with sender as false", () => {
		const { getByText, getByTestId } = render(
			<Message message='Hi there!' sender={false} />
		);
		const messageElement = getByText("Hi there!");
		const div = getByTestId("text");

		expect(messageElement).toBeInTheDocument();
		expect(div).toHaveClass(
			"rounded-lg p-2 bg-gray-300 text-black mr-auto rounded-bl-none"
		);
	});
});
