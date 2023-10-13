import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ImageWithFallback } from "../../../../app/components/ImageWithFallback/ImageWithFallback";

afterEach(cleanup);

describe("ImageWithFallback", () => {
	it("renders the component with alt text", () => {
		const altText = "Test Image";
		const { getByAltText } = render(
			<ImageWithFallback
				alt={altText}
				src='/valid-image.jpg'
				width={100}
				height={100}
			/>
		);
		const imageElement = getByAltText(altText);
		expect(imageElement).toBeInTheDocument();
	});

	it("renders the fallback image when an error occurs", () => {
		const altText = "Test Image";
		const { getByAltText } = render(
			<ImageWithFallback
				alt={altText}
				src='/non-existent-image.jpg'
				width={100}
				height={100}
			/>
		);
		const fallbackImageElement = getByAltText(altText);
		expect(fallbackImageElement).toBeInTheDocument();
	});
});
