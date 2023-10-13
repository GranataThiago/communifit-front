import React from "react";
import { render, cleanup } from "@testing-library/react";
import RevisionPage from "../../../../../app/(site)/member/revision/page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders trainer role", () => {
		const { getByText } = render(<RevisionPage />);
		expect(getByText("Upload your progress for week 3"));
	});
});
