import React from "react";
import { render } from "@testing-library/react";
import CommunityScreen_Mock from "../../../../../__mocks__/CommunityScreen_Mock";
import CommunityScreen from "../../../../../app/(site)/community/components/screens/CommunityScreen";

const props = CommunityScreen_Mock;

describe("CommunityScreen component", () => {
  it("should render the CommunityScreen with the correct data", () => {
    const { getByText } = render(<CommunityScreen {...props} />);
    expect(getByText("Test Community")).toBeInTheDocument();
  });
});
