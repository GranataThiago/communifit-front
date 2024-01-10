import { CommunityEssential, ICommunities } from "../../../../../interfaces";

import { Button } from "../../../../components/ui/button";
import { CommunityCard } from "../CommunityCard";
import { FaStar } from "react-icons/fa";
import { Input } from "../../../../components/ui/input";
import Link from "next/link";
import { Message } from "../../../chat/components";
import React from "react";

export const NonCommunityMemberScreen = async ({
	community,
	communities,
}: {
	community: CommunityEssential | null;
	communities: ICommunities[] | null;
}) => {
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

			<p className='mt-6 text-2xl font-bold text-surface-light flex gap-2 items-center'>
				Recomendadas <FaStar className='text-primary' />
			</p>

			{communities ? (
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-12'>
					{communities.map((community: ICommunities) => (
						<CommunityCard key={community.name} {...community} />
					))}
				</div>
			) : (
				<div className='w-100 mt-6'>
					<Message
						message='Looks like there are no communities here...'
						sender={false}
					/>
				</div>
			)}
		</section>
	);
};
