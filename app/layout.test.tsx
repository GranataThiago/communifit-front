import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

afterAll(() => {
	cleanup;
	jest.clearAllMocks();
});

describe("<Layout />", () => {});
