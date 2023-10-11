import React from "react";
import { render } from "@testing-library/react";
import Loading from "./loading";

describe("Loading component", () => {
	it("should render the loading spinner", () => {
		const { container } = render(<Loading />);

		const spinner = container.querySelector(".animate-spin");
		expect(spinner).toBeInTheDocument();

		expect(spinner).toHaveClass("bg-transparent");
		expect(spinner).toHaveClass("w-32");
		expect(spinner).toHaveClass("h-32");
		expect(spinner).toHaveClass("border-[1rem]");
		expect(spinner).toHaveClass("border-gray-400");
		expect(spinner).toHaveClass("border-t-[1rem]");
		expect(spinner).toHaveClass("border-t-primary");
		expect(spinner).toHaveClass("rounded-full");
	});

	it('should have a div with class "flex items-center justify-center"', () => {
		const { container } = render(<Loading />);

		const wrapper = container.querySelector(
			".flex.items-center.justify-center"
		);
		expect(wrapper).toBeInTheDocument();
	});

	it("should fill the entire screen width and height", () => {
		const { container } = render(<Loading />);

		const loadingContainer = container.firstChild;
		expect(loadingContainer).toHaveClass("h-screen");
		expect(loadingContainer).toHaveClass("w-full");
	});
});
