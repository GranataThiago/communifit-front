import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import WorkoutModal from "./WorkoutModal";

// Importa el módulo real de useWorkoutModal
import useWorkoutModal from "../../../hooks/modals/useWorkoutModal";

// Mockea el módulo de useWorkoutModal
jest.mock("../../../hooks/modals/useWorkoutModal", () => ({
	__esModule: true,
	default: jest.fn(),
	isOpen: true,
	onOpen: jest.fn(),
	onClose: jest.fn(),
	exercise: null,
}));

describe("<WorkoutModal />", () => {
	it("renders the modal and submits the form", async () => {
		// create test for workout modal
	});
});
