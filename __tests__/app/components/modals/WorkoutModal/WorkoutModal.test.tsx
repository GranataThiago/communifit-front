import React from "react";
import { render } from "@testing-library/react";
import WorkoutModal from "../../../../../app/components/modals/WorkoutModal/WorkoutModal";

describe("<WorkoutModal />", () => {
	it("renders component", () => {
		render(<WorkoutModal />);
	});
});
