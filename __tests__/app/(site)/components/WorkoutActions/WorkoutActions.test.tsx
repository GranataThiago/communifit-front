import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { WorkoutActions } from "../../../../../app/(site)/components";

describe("<WorkoutActions />", () => {
	it("renders WorkoutActions component", () => {
		const { getByTestId } = render(<WorkoutActions />);
		expect(getByTestId("div")).toBeInTheDocument();
	});
});
