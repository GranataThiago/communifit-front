import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import CommunityActions from "./CommunityActions";
import useInviteModal from "../../../../hooks/modals/useInviteModal";
import apiInstance from "../../../../api";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("../../../../../context/UserContext", () => ({
	useUserContext: () => ({
		token: "",
	}),
}));

jest.mock("../../../../hooks/modals/useInviteModal", () => {
	useInviteModal: (onOpen: any) => {
		const data = {
			isOpen: true,
		};

		return onOpen(data);
	};
});
jest.mock("../../../../api");

describe("CommunityActions component", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should open invite modal and display the link when clicking the envelope icon", async () => {
		const postMock = apiInstance.post as jest.Mock;
		postMock.mockResolvedValue({
			data: { link: "https://example.com/invitation" },
		});

		const { getByTestId } = render(<CommunityActions name='test' />);

		const envelopeIcon = getByTestId("envelope-icon");

		fireEvent.click(envelopeIcon);

		await waitFor(() => {
			expect(useInviteModal().setLink).toHaveBeenCalledWith(
				"https://example.com/invitation"
			);
		});
	});
});
