import React from "react";
import { render, cleanup, renderHook } from "@testing-library/react";
import { useController, useForm } from "react-hook-form";
import { RegisterFormComponent } from "../../../../../../../app/(auth)/auth/register/components/RegisterForm/RegisterForm";
import { RegisterForm } from "../../../../../../../app/(auth)/auth/register/components/Onboarding/Onboarding";

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

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			push: jest.fn(),
			replace: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));
jest.mock("@react-oauth/google");

describe("<RegisterForm />", () => {
  it("should render truthy", () => {
    const mockControl = useForm<RegisterForm>().control;
    render(
      <RegisterFormComponent register={jest.fn()} control={mockControl} />,
    );
  });
});
