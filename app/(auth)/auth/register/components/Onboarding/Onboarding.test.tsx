import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Onboarding from "./Onboarding";

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

jest.mock("../../../../../../context/UserContext");

describe("Onboarding component", () => {
	it("renders without crashing", () => {
		const { getByText } = render(<Onboarding />);

		expect(getByText("Hi stranger!")).toBeInTheDocument();
		expect(getByText("Continue")).toBeInTheDocument();
	});
});
