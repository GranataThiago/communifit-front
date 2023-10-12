import React from "react";
import { render, cleanup } from "@testing-library/react";
import CommunityPage from "./page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("next/headers", () => {
	return {
		get: jest.fn(),
	};
});

describe("<Page />", () => {
	it("should render CommunityScreen component when community data is available", async () => {
		const mockGetCommunity = jest.fn().mockResolvedValue({
			name: "Test Community",
			description: "Test Description",
			posts: [],
		});

		const { getByText } = render(await CommunityPage({}));

		expect(getByText("Test Community")).toBeInTheDocument();
		expect(getByText("Test Description")).toBeInTheDocument();

		expect(mockGetCommunity).toHaveBeenCalled();
	});
});
