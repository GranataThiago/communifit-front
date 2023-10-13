import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import CommunityActions from "../../../../../../app/(site)/community/components/CommunityActions/CommunityActions";
import apiInstance from "../../../../../../app/api";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("/context/UserContext", () => ({
	useUserContext: () => ({
		token: "",
	}),
}));

jest.mock("/hooks/modals/useInviteModal", () => ({
	__esModule: true,
	default: jest.fn(() => ({
		setName: jest.fn(),
		setLink: jest.fn(),
		onOpen: jest.fn(),
	})),
}));

jest.mock("../../../../../../app/api");

describe("CommunityActions component", () => {
	it("should open invite modal and display the link when clicking the envelope icon", async () => {
		const postMock = apiInstance.post as jest.Mock;
		postMock.mockResolvedValue({
			data: { link: "https://example.com/invitation" },
		});

		const { getByTestId } = render(<CommunityActions name='test' />);

		const envelopeIcon = getByTestId("envelope-icon");

		fireEvent.click(envelopeIcon);
	});
});
