import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import ClientScreen from "../../../../../../app/(site)/components/screens/ClientScreen/ClientScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("recharts");
describe("<ClientScreen />", () => {
	it("renders ClientScreen", () => {
		const { getByText } = render(<ClientScreen />);
		expect(getByText("Your work for today"));
	});
});
