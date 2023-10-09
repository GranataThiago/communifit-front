import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RadioCard } from "./RadioCard";

describe("RadioCard", () => {
	it("renders RadioCard component", () => {
		const { getByText, container } = render(
			<RadioCard
				ref={React.createRef<HTMLInputElement>()}
				label='Option 1'
				id='option1'
				value='option1'
				icon={<span>Icon</span>}
			/>
		);

		const labelElement = getByText("Option 1");
		expect(labelElement).toBeInTheDocument();
		const iconElement = container.querySelector("span");

		expect(iconElement).toBeInTheDocument();
	});

	it("renders RadioCard withouth icon", () => {
		const { container } = render(
			<RadioCard
				ref={React.createRef<HTMLInputElement>()}
				label='Option 1'
				id='option1'
				value='option1'
				icon={null}
			/>
		);

		const iconElement = container.querySelector("span");

		expect(iconElement).not.toBeInTheDocument();
	});
});
