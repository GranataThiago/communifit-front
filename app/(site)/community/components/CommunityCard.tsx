import { BsPeople } from "react-icons/bs";
import { ICommunities } from "../../../../interfaces";
import Image from "next/image";
import React from "react";

const getStars = (amount: number) => {
	const MAX_STARS = 5;

	return "★".repeat(amount) + "☆".repeat(MAX_STARS - amount);
};

export const CommunityCard = ({
	name,
	average_rating,
	users_quantity,
}: ICommunities) => {
	return (
		<article
			className='min-w-64 text-white flex relative bg-secondary-light gap-4 hover:cursor-pointer transition-colors p-4 rounded-xl'
			data-testid='container'
		>
			<Image
				className='rounded-full w-20 h-20'
				src='https://i.pravatar.cc/300'
				alt='fortys'
				width={32}
				height={32}
			/>

			<div className='my-auto'>
				<p className='text-2xl font-bold text-surface-light text-ellipsis w-36 overflow-hidden'>
					{name}
				</p>
				{getStars(average_rating)}
				<p className='flex gap-2 items-center text-surface-dark'>
					<BsPeople />
					{users_quantity} members
				</p>
			</div>
		</article>
	);
};
