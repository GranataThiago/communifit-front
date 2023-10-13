import React from "react";
import { render } from "@testing-library/react";
import ProgressChart from "../../../../../app/(site)/components/ProgressChart/ProgressChart";

jest.mock("recharts");

describe("ProgressChart component", () => {
	it("should render the chart with the correct data", () => {
		const { container } = render(<ProgressChart />);

		expect(container).toBeInTheDocument();
	});
});
