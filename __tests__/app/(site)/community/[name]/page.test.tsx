import { render, cleanup, waitFor } from "@testing-library/react";
import Page from "../../../../../app/(site)/community/[name]/page";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

afterAll(() => {
  cleanup();
  jest.clearAllMocks();
});

const mock = new MockAdapter(axios);

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

jest.mock("../../../../../app/api", () => ({
  default: {
    get: jest.fn(),
  },
}));

jest.mock("next/navigation");

describe("<Page />", () => {
  it("should render CommunityScreen component when community data is available", async () => {
    const { getByText } = render(await Page({ params: { name: "1" } }));

    expect(getByText("Posts")).toBeInTheDocument();
  });
});
