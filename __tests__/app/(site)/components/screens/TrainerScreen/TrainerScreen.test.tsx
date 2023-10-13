import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import TrainerScreen from "../../../../../../app/(site)/components/screens/TrainerScreen/TrainerScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("recharts");
describe("<TrainerScreen />", () => {
	it("renders TrainerScreen", () => {
		const { getByText } = render(<TrainerScreen />);
		expect(getByText("Your Clients"));
	});
});
