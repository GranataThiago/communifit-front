import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CreateCommunityForm from "./CreateCommunityForm";

const mockRouterPush = jest.fn();
const mockUseCookies = jest.fn();

jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: mockRouterPush,
	}),
}));

jest.mock("react-cookie", () => ({
	useCookies: () => {
		return [{ token: "tuToken" }, jest.fn(), jest.fn()];
	},
}));

jest.mock("axios");

jest.mock("../../../../api", () => ({
	default: {
		post: jest.fn(() => {
			return Promise.resolve({
				data: {},
				status: 200,
			});
		}),
	},
}));

jest.mock("../../../../../context/UserContext", () => ({
	useUserContext: () => ({
		user: {
			fullname: "John Doe",
			username: "johndoe",
		},
		logout: jest.fn(),
	}),
}));

describe("CreateCommunityForm", () => {
	it("should render the form", () => {
		const { getByText } = render(<CreateCommunityForm />);

		expect(getByText("Community Name")).toBeInTheDocument();
	});
});
