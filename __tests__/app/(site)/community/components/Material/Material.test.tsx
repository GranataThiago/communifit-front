import React from "react";
import { render } from "@testing-library/react";
import { Material } from "../../../../../../app/(site)/community/components/Material/Material";

describe("Material component", () => {
	it("should render the Material with the correct data", () => {
		const { getByText } = render(<Material />);
		expect(getByText("Add comment")).toBeInTheDocument();
	});
});
