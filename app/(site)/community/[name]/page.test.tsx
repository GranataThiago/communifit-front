import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import Page from "./page";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

// Simula Axios con axios-mock-adapter
const mock = new MockAdapter(axios);

// Configura una respuesta simulada
const mockResponse = {
	id: 1,
	name: "John Doe",
};

mock.onGet("/communities/gorillas/posts?page=1").reply(200, mockResponse);

jest.mock("next/headers", () => ({
	cookies: jest.fn().mockReturnValue({
		get: jest.fn().mockReturnValue({ token: "tuToken" }),
	}),
}));

jest.mock("../../../api", () => ({
	default: {
		get: jest.fn(),
	},
}));

describe("<Page />", () => {
	it("should render CommunityScreen component when community data is available", async () => {
		const { getByText } = render(await Page({}));

		expect(getByText("Test Community")).toBeInTheDocument();
		expect(getByText("Test Description")).toBeInTheDocument();
	});
});
