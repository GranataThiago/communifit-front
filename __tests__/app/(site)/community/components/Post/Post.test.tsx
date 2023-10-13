import React from "react";
import { render } from "@testing-library/react";
import { Post } from "../../../../../../app/(site)/community/components/Post/Post";

describe("Post component", () => {
	it("should render the Post with the correct data", () => {
		const { getByText } = render(
			<Post
				fullName='testFullname'
				username='test'
				body=''
				datepublished='2002/02/24'
			/>
		);
		expect(getByText("testFullname")).toBeInTheDocument();
	});
});
