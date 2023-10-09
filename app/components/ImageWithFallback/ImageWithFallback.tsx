"use client";
import { useState, useEffect, FC, SyntheticEvent } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
	fallback?: ImageProps["src"];
}
const fallbackImage = "public/vercel.svg";

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({
	fallback = fallbackImage,
	alt,
	src,
	...props
}) => {
	const [error, setError] = useState<SyntheticEvent<
		HTMLImageElement,
		Event
	> | null>(null);

	useEffect(() => {
		setError(null);
	}, [src]);

	return (
		<Image
			alt={alt}
			onError={setError}
			src={error ? fallbackImage : src}
			{...props}
		/>
	);
};
