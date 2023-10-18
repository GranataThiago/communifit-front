import React from "react";
import { render } from "@testing-library/react";
import InviteModal from "../../../../../app/components/modals/InviteModal";

describe("<InviteModal />", () => {
  it("render component", () => {
    render(<InviteModal />);
  });
});
