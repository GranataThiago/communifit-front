import React from "react";
import { render, cleanup } from "@testing-library/react";
import { NonCommunityTrainerScreen } from "./NonCommunityTrainerScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<NonCommunityTrainerScreen />", () => {
	it("renders NonCommunityTrainerScreen create", () => {
		const { getByTestId } = render(<NonCommunityTrainerScreen />);
		expect(getByTestId("section"));
	});
});
