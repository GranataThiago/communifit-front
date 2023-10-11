import React from "react";
import { render } from "@testing-library/react";
import { UserGreeting } from "./UserGreeting";
import { useUserContext } from "../../../../context/UserContext";

jest.mock("../../../../context/UserContext", () => ({
	useUserContext: () => ({
		user: {
			fullname: "John Doe",
			username: "johndoe",
		},
		logout: jest.fn(),
	}),
}));

describe("<UserGreeting />", () => {
	it("renders UserGreeting with the correct user", () => {
		const { getByTestId } = render(<UserGreeting />);

		expect(getByTestId("greetings")).toBeInTheDocument();
	});
});
