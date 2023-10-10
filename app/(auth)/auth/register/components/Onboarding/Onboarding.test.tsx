import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Onboarding } from "./Onboarding";

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
	useContext: jest.fn(() => ({
		register: jest.fn(),
	})),
}));

describe("Onboarding component", () => {
	it("renders the component without errors", () => {
		render(<Onboarding />);
	});
});
