import React from "react";
import { render, cleanup } from "@testing-library/react";
import { NonCommunityMemberScreen } from "../../../../../app/(site)/community/components/screens/NonCommunityMemberScreen";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

describe("<NonCommunityMemberScreen />", () => {
	it("renders NonCommunityMemberScreen create", async () => {
		const { getByTestId } = render(await NonCommunityMemberScreen());
		expect(getByTestId("section"));
	});
});
