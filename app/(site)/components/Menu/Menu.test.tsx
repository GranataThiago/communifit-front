import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Menu } from "./Menu";

jest.mock("next/navigation", () => ({
	usePathname: jest.fn(),
}));

jest.mock("../../../../context/UserContext", () => ({
	useUserContext: () => ({
		user: {
			fullname: "John Doe",
			username: "johndoe",
		},
		logout: jest.fn(),
	}),
}));

describe("Menu component", () => {
	it("renders component", () => {
		const { getByTestId } = render(<Menu />);

		expect(getByTestId("nav")).toBeInTheDocument();
		expect(getByTestId("ul")).toBeInTheDocument();
	});

	it("should render the menu with the correct active item", () => {
		jest.spyOn(require("next/navigation"), "usePathname").mockReturnValue("/");

		const { getByTestId } = render(<Menu />);

		expect(getByTestId("nav")).toBeInTheDocument();
		expect(getByTestId("ul")).toBeInTheDocument();
	});

	it('should set the class to text-primary when pathname is "community"', () => {
		jest
			.spyOn(require("next/navigation"), "usePathname")
			.mockReturnValue("/community");
		jest
			.spyOn(require("../../../../context/UserContext"), "useUserContext")
			.mockReturnValue({});

		const { container } = render(<Menu />);

		const communityMenuItem = container.querySelector("li");

		expect(communityMenuItem).toHaveClass(
			"hover:text-gray-700 hover:cursor-pointer text-black"
		);
	});

	it('should set the class to text-primary when pathname is "chat"', () => {
		jest
			.spyOn(require("next/navigation"), "usePathname")
			.mockReturnValue("/chat");

		const { container } = render(<Menu />);

		const communityMenuItem = container.querySelector("li");

		expect(communityMenuItem).toHaveClass(
			"hover:text-gray-700 hover:cursor-pointer text-black"
		);
	});

	it('should set the class to text-primary when pathname is "profile"', () => {
		jest
			.spyOn(require("next/navigation"), "usePathname")
			.mockReturnValue("/profile");

		const { container } = render(<Menu />);

		const communityMenuItem = container.querySelector("li");

		expect(communityMenuItem).toHaveClass(
			"hover:text-gray-700 hover:cursor-pointer text-black"
		);
	});
});
