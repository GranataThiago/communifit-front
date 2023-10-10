import React from "react";
import { render, cleanup, renderHook } from "@testing-library/react";
import { useController, useForm } from "react-hook-form";
import { RegisterFormComponent } from "./RegisterForm";

afterAll(() => {
	cleanup();
	jest.clearAllMocks();
});

jest.mock("react-hook-form", () => ({
	...jest.requireActual("react-hook-form"),
	useForm: () => ({
		handleSubmit: () => jest.fn(),
		register: jest.fn(),
		control: {
			register: jest.fn(),
			unregister: jest.fn(),
			getFieldState: jest.fn(),
			_names: {
				array: new Set("test"),
				mount: new Set("test"),
				unMount: new Set("test"),
				watch: new Set("test"),
				focus: "test",
				watchAll: false,
			},
			_subjects: {
				watch: jest.fn(),
				array: jest.fn(),
				state: jest.fn(),
			},
			_getWatch: jest.fn(),
			_formValues: ["test"],
			_defaultValues: ["test"],
		},
		getValues: () => {
			return [];
		},
		setValue: () => jest.fn(),
		formState: () => jest.fn(),
		watch: () => jest.fn(),
	}),
	Controller: () => [],
	useSubscribe: () => ({
		r: { current: { subject: { subscribe: () => jest.fn() } } },
	}),
}));

describe("<RegisterForm />", () => {
	it("should render truthy", () => {
		render(<RegisterFormComponent />);
	});
});
