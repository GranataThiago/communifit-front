import React from 'react'
import CreateCommunityForm from "../components/CreateCommunityForm/CreateCommunityForm";

export default function Page() {
	return (
		<div
			className='flex flex-col justify-between items-center w-full p-12'
			data-testid='div'
		>
			<CreateCommunityForm />
		</div>
	);
}
