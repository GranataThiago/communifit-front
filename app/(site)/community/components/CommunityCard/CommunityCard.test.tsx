import React from "react";
import { render } from "@testing-library/react";
import { CommunityCard } from "./CommunityCard";

describe("CommunityCard component", () => {
	it("should render the CommunityCard with the correct data", () => {
		const { getByTestId } = render(
			<CommunityCard name='test' stars={2} members={2} />
		);

		expect(getByTestId("container")).toBeInTheDocument();
	});
});
