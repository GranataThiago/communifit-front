import { cleanup, render } from "@testing-library/react";

import { LoaderSpinner } from "../../../../app/components/LoaderSpinner/LoaderSpinner";
import React from "react";

describe("<LoaderSpinner />", () => {
	it("should render a LoaderSpinner", () => {
		const { getByTestId } = render(<LoaderSpinner />);

		expect(getByTestId("spinner")).toBeInTheDocument();
	});
});
