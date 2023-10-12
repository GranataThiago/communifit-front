import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import CommunityPage from "./page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("../../../context/UserContext", () => ({
	useUserContext: () => ({
		user: {
			fullname: "John Doe",
			username: "johndoe",
			type: "trainer",
		},
	}),
}));

describe("<Page />", () => {
	it("renders CommunityPage", () => {
		const { getByText } = render(<CommunityPage />);

		expect(getByText("Join with Code")).toBeInTheDocument();
	});
});
