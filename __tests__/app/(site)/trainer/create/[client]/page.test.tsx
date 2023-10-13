import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "../../../../../../app/(site)/trainer/create/[client]/page";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<Page />", () => {
	it("renders page", () => {
		const { getByText } = render(<Page />);
		expect(getByText("Client Plan"));
	});
});
