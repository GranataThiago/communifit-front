import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { WorkoutActions } from "./WorkoutActions";

describe("<WorkoutActions />", () => {
	it("renders WorkoutActions component", () => {
		const { getByTestId } = render(<WorkoutActions />);
		expect(getByTestId("div")).toBeInTheDocument();
	});
});
