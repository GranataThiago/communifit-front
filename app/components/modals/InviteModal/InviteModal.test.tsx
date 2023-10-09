import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import InviteModal from "./InviteModal";
import useInviteModal from "../../../hooks/modals/useInviteModal";

// Mockear el hook useInviteModal
jest.mock("../../../hooks/modals/useInviteModal");

describe("<InviteModal />", () => {
	// add test for component
});
