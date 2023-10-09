import React from "react";
import { render } from "@testing-library/react";
import WorkoutModal from "./WorkoutModal";

describe("<WorkoutModal />", () => {
	it("renders component", () => {
		render(<WorkoutModal />);
	});
});
