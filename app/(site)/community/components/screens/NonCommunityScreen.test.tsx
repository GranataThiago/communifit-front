import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import { NonCommunityScreen } from "./NonCommunityScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("../../../../../context/UserContext", () => ({
	useUserContext: () => ({
		user: {
			fullname: "John Doe",
			username: "johndoe",
			type: "trainer",
		},
	}),
}));

describe("<NonCommunityScreen />", () => {
	it("renders NonCommunityScreen", async () => {
		const { getByText } = render(<NonCommunityScreen />);

		await waitFor(() => {
			expect(getByText("Create one")).toBeInTheDocument();
		});
	});
});
