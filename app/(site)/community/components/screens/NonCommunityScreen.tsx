import React from "react";
import { CommunityCard } from "../CommunityCard";
import { Input } from "../../../../components";

const getCommunities = async () => {
	const communities = [
		{
			name: "Qué se yo",
			stars: 4,
			members: 40,
		},
		{
			name: "Sharks",
			stars: 5,
			members: 17,
		},
		{
			name: "BTB",
			stars: 3,
			members: 843,
		},
	];
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return communities;
};

export const NonCommunityScreen = async () => {
	const communities = await getCommunities();

	return (
		<section className='p-6'>
			<Input variant='filled' type='text' placeholder='Search Trainers...' />

			<p className='mt-6 text-3xl font-bold'>Recommended for you</p>

			<div className='flex flex-col gap-6 mt-6'>
				{communities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>
		</section>
	);
};
