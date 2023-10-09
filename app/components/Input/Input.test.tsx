import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input, LabeledInput, LabeledTextarea } from "./Input";

describe("<Input />", () => {
	it("renders Input component", () => {
		const { getByPlaceholderText } = render(
			<Input variant='outlined' placeholder='Enter text' />
		);
		const inputElement = getByPlaceholderText("Enter text");
		expect(inputElement).toBeInTheDocument();
	});

	it("Input component handles change event", () => {
		const handleChange = jest.fn();
		const { getByPlaceholderText } = render(
			<Input
				variant='filled'
				placeholder='Enter text'
				onChange={handleChange}
			/>
		);
		const inputElement = getByPlaceholderText("Enter text");
		fireEvent.change(inputElement, { target: { value: "Test" } });
		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	it("renders LabeledInput component with label", () => {
		const { getByText } = render(
			<LabeledInput variant='outlined' label='Name' name='name' type='text' />
		);
		const labelElement = getByText("Name");
		expect(labelElement).toBeInTheDocument();
	});

	it("renders LabeledTextarea component with label", () => {
		const { getByText } = render(
			<LabeledTextarea
				variant='filled'
				label='Description'
				name='description'
			/>
		);
		const labelElement = getByText("Description");
		expect(labelElement).toBeInTheDocument();
	});
});
