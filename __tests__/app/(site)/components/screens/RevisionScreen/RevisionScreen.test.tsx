import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { RevisionScreen } from "../../../../../../app/(site)/components";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<RevisionScreen />", () => {
	it("renders RevisionScreen", () => {
		const { getByTestId } = render(<RevisionScreen />);
		expect(getByTestId("main"));
	});
	it("should update 'pics' when images are uploaded", () => {
		const { getByLabelText, getByText } = render(<RevisionScreen />);
		const fileInput = getByLabelText("Upload your photo...");

		const file1 = new File(["file contents"], "image1.jpg", {
			type: "image/jpeg",
		});

		fireEvent.change(fileInput, {
			target: {
				files: [file1],
			},
		});
	});
});
