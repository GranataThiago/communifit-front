import React from "react";
import {
	render,
	screen,
	cleanup,
	fireEvent,
	waitFor,
	act,
} from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { LoginForm } from "../../../../../../app/(auth)/auth/login/components/LoginForm";


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

jest.mock("../../../../../../context/UserContext", () => ({
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

		expect(screen.getByTestId("login")).toBeInTheDocument();
		expect(screen.getByTestId("text-footer")).toBeInTheDocument();
	});
});
