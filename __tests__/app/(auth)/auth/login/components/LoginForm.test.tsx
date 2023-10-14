import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";

import { LoginForm } from "../../../../../../app/(auth)/auth/login/components/LoginForm";
import React from "react";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
	fetchMock.dontMock();
});

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			push: jest.fn(),
			replace: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));

jest.mock("../../../../../context/UserContext/UserContext", () => ({
	useUserContext: () => ({
		login: async (email: string, password: string) => {
			return email === "test@example.com" && password === "password";
		},
	}),
}));

afterEach(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<LoginForm />", () => {
	it("renders without errors", () => {
		render(<LoginForm />);
		const emailInput = screen.getByLabelText("Email address");
		const passwordInput = screen.getByLabelText("Password");
		const loginButton = screen.getByText("Login");

		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(loginButton).toBeInTheDocument();
	});

	it("submits the form with valid input", async () => {
		render(<LoginForm />);
		const emailInput = screen.getByLabelText("Email address");
		const passwordInput = screen.getByLabelText("Password");
		const loginButton = screen.getByText("Login");

		fireEvent.change(emailInput, { target: { value: "test@example.com" } });
		fireEvent.change(passwordInput, { target: { value: "password" } });

		await act(async () => {
			fireEvent.click(loginButton);
		});

		expect(screen.getByText("Login")).toBeInTheDocument();
	});
});
