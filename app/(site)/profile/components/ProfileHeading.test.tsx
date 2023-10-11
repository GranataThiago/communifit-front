import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { ProfileHeading } from "./ProfileHeading";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("../../../../context/UserContext", () => ({
	useUserContext: () => ({
		user: {
			fullname: "John Doe",
			username: "johndoe",
		},
		logout: jest.fn(),
	}),
}));

const mockLocationAssign = jest.fn();

beforeAll(() => {
	// Mock window.location.assign
	Object.defineProperty(window, "location", {
		value: {
			assign: mockLocationAssign,
		},
	});
});

describe("<ProfileHeading />", () => {
	it("renders ProfileHeading", () => {
		const { getByTestId } = render(<ProfileHeading />);
		expect(getByTestId("header"));
	});
	it("should log out when the logout button is clicked", async () => {
		const { getByTestId } = render(<ProfileHeading />);

		const logoutButton = getByTestId("button");
		fireEvent.click(logoutButton);

		await waitFor(() => {
			expect(mockLocationAssign).toHaveBeenCalledWith("/auth/login");
		});
	});
});
