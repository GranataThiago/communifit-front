import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { ProfileHeading } from "../../../../../app/(site)/profile/components/ProfileHeading";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

const mockLogout = jest.fn();

jest.mock("../../../../../context/UserContext", () => ({
  useUserContext: () => ({
    user: {
      fullname: "John Doe",
      username: "johndoe",
    },
    logout: mockLogout,
  }),
}));

describe("<ProfileHeading />", () => {
  it("renders ProfileHeading", () => {
    const { getByTestId } = render(<ProfileHeading />);
    expect(getByTestId("header"));
  });
  it("should log out when the logout button is clicked", async () => {
    const { getByTestId } = render(<ProfileHeading />);

    const logoutButton = getByTestId("button");
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(mockLogout).toHaveBeenCalled();
    });
  });
});
