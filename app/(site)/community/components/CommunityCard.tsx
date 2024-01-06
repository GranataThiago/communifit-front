import { BsPeople } from "react-icons/bs";
import { ICommunities } from "../../../../interfaces";
import Image from "next/image";
import React from "react";

export const CommunityCard = ({
	name,
	displayname,
	description,
	createdat,
	average_rating,
	users_quantity,
	owner_username,
	owner_fullname,
}: ICommunities) => {
	return (
		<div
			className='min-w-64 flex bg-secondary-light gap-4 hover:cursor-pointer transition-colors p-4 rounded-xl'
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
				<p className='text-2xl font-bold text-surface-light'>{name}</p>
				<div className='flex gap-2 items-center'>
					<p className='flex gap-2 items-center text-surface-dark'>
						<BsPeople></BsPeople> {users_quantity} members
					</p>
				</div>
			</div>
		</div>
	);
};
