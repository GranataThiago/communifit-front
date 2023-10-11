import React from "react";
import Image from "next/image";
import { BsPencil } from "react-icons/bs";
import { Post as IPost } from "../../../../interfaces/community";
import { format } from "date-fns";

export const Post = ({ fullname, username, body, datepublished }: IPost) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between items-center '>
				<div className='flex gap-2'>
					<Image
						className='rounded-full w-12 h-12'
						src='https://i.pravatar.cc/300'
						alt='fortys'
						width={32}
						height={32}
					/>
					<p className='font-bold text-lg flex flex-col'>
						{fullname}
						<span className='text-gray-400 text-sm font-medium'>
							{format(new Date(datepublished), "dd-MM")}
						</span>
					</p>
				</div>

				<BsPencil className='text-gray-400'></BsPencil>
			</div>

			<p className='font-normal'>{body}</p>
			<p className='text-sm text-gray-400'>Add comment</p>
		</div>
	);
};
