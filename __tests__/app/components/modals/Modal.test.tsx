import { fireEvent, render } from "@testing-library/react";

import Modal from "../../../../app/components/modals/ModalForm";
import React from "react";

const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn();
const mockSecondaryAction = jest.fn();

const defaultProps = {
	isOpen: true,
	onClose: mockOnClose,
	onSubmit: mockOnSubmit,
	title: "Test Modal",
	body: <div>Modal Body</div>,
	actionLabel: "Submit",
	secondaryAction: mockSecondaryAction,
	secondaryActionLabel: "Secondary Action",
	disabled: false,
};

const disabledTrueProps = {
	isOpen: true,
	onClose: mockOnClose,
	onSubmit: mockOnSubmit,
	title: "Test Modal",
	body: <div>Modal Body</div>,
	actionLabel: "Submit",
	secondaryAction: mockSecondaryAction,
	secondaryActionLabel: "Secondary Action",
	disabled: true,
};

const isOpenFalseProps = {
	isOpen: false,
	onClose: mockOnClose,
	onSubmit: mockOnSubmit,
	title: "Test Modal",
	body: <div>Modal Body</div>,
	actionLabel: "Submit",
	secondaryAction: mockSecondaryAction,
	secondaryActionLabel: "Secondary Action",
	disabled: true,
};

jest.useFakeTimers();

afterEach(() => {
	jest.clearAllMocks();
});

describe("<Modal />", () => {
	it("renders Modal component with default props", () => {
		const { getByText } = render(<Modal {...defaultProps} />);
		expect(getByText("Test Modal")).toBeInTheDocument();
		expect(getByText("Modal Body")).toBeInTheDocument();
		expect(getByText("Submit")).toBeInTheDocument();
	});

	it("calls onClose when close button is clicked", () => {
		const { getByTestId } = render(<Modal {...defaultProps} />);
		fireEvent.click(getByTestId("close-button"));
		jest.advanceTimersByTime(3000);

		expect(mockOnClose).toHaveBeenCalled();
	});

	it("not calls onClose when close button is clicked", () => {
		const { getByTestId } = render(<Modal {...disabledTrueProps} />);
		fireEvent.click(getByTestId("close-button"));

		expect(mockOnClose).not.toHaveBeenCalled();
	});

	it("calls onSubmit when handleSubmit is called and not disabled", () => {
		const { getByText } = render(<Modal {...disabledTrueProps} />);

		const submitButton = getByText("Submit");
		fireEvent.click(submitButton);

		expect(mockOnSubmit).toHaveBeenCalled();
	});

	it(" expect renders isOpenFalseProps", () => {
		const { container } = render(<Modal {...isOpenFalseProps} />);

		expect(container.firstChild).toBeNull();
	});

	// ADD TEST handleSecondaryAction
	// ADD TEST handleSubmit
});
