import { CommunityCard } from "../CommunityCard";
import { Input } from "../../../../components/ui/input";
import React from "react";
import { Button } from "../../../../components/ui/button";

const getCommunities = async () => {
	const communities = [
		{
			name: "BTG",
			stars: 4,
			members: 40,
		},
		{
			name: "Sharks",
			stars: 5,
			members: 17,
		},
	];
	await new Promise((resolve) => setTimeout(resolve, 100));

	return communities;
};

export const NonCommunityMemberScreen = async () => {
	const communities = await getCommunities();

	return (
		<section className='p-6 bg-secondary-dark' data-testid='section'>
			<Input variant='filled' type='text' placeholder='Search Communities...' />

			<article className="flex flex-col gap-4 bg-secondary-light p-4 mt-4 rounded-xl">
				<h2 className="text-3xl text-primary font-bold">How to choose the ideal community for you?</h2>
				<p className="text-md text-surface-light">We strongly encourage you to engage with coaches and 
				ask them any questions you might have in order to identify 
				the best fit for your needs...</p>

				<Button  className="ml-auto w-32" variant={'outlined'}>Read more...</Button>
			</article>

			<p className='mt-6 text-3xl font-bold text-surface-light'>Trending Communities 🔥</p>

			<div className='flex flex-row gap-6 mt-6'>
				{communities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>

			<p className='mt-6 text-3xl font-bold text-surface-light'>New Communities 🔝</p>

			<div className='flex flex-row gap-6 mt-6'>
				{communities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>

			<p className='mt-6 text-3xl font-bold text-surface-light'>Oldest Communities 💪</p>

			<div className='flex flex-row gap-6 mt-6'>
				{communities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>
		</section>
	);
};
