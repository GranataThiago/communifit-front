import { Button } from "../../../../components/ui/button";
import { CommunityCard } from "../CommunityCard";
import { CommunityEssential } from "../../../../../interfaces";
import { Input } from "../../../../components/ui/input";
import Link from "next/link";
import React from "react";

const getCommunities = async () => {
	const listCommunities = [
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

	return listCommunities;
};

export const NonCommunityMemberScreen = async ({
	community,
}: {
	community: CommunityEssential | null;
}) => {
	const listCommunities = await getCommunities();
	console.log(community);
	return (
		<section className='p-6 bg-secondary-dark' data-testid='section'>
			<Input variant='filled' type='text' placeholder='Search Communities...' />

			<article className='flex flex-col gap-4 bg-secondary-light p-4 mt-4 rounded-xl'>
				<h2 className='text-3xl text-primary font-bold'>
					{community?.displayname ?? "How to choose your ideal community?"}
				</h2>
				<p className='text-md text-surface-light'>
					{community?.description ??
						"We strongly encourage you to engage with coaches and ask them any questions you might have in order to identify the best fit for your needs..."}
				</p>

				<Link
					href={community?.name ? `/community/${community.name}` : ""}
					className='ml-auto'
				>
					<Button
						className={`${community?.name ? "w-auto px-2" : "w-32"}`}
						variant={"outlined"}
					>
						{community?.name ? "Ir a mi Comunidad" : "Read more..."}
					</Button>
				</Link>
			</article>

			<p className='mt-6 text-3xl font-bold text-surface-light'>
				Trending Communities 🔥
			</p>

			<div className='flex flex-row gap-6 mt-6 overflow-x-scroll'>
				{listCommunities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>

			<p className='mt-6 text-3xl font-bold text-surface-light'>
				New Communities 🔝
			</p>

			<div className='flex flex-row gap-6 mt-6  overflow-x-scroll'>
				{listCommunities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>

			<p className='mt-6 text-3xl font-bold text-surface-light'>
				Oldest Communities 💪
			</p>

			<div className='flex flex-row gap-6 mt-6 overflow-x-scroll'>
				{listCommunities.map((community) => (
					<CommunityCard key={community.name} {...community} />
				))}
			</div>
		</section>
	);
};
