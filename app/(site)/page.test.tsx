import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "./page";
import { HomeScreen } from "./components/screens/HomeScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("recharts");

describe("<Page />", () => {
	it("renders trainer role", () => {
		render(<Page />);
		expect(render(<HomeScreen />));
	});
});
