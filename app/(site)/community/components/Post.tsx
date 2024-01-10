"use client";

import { AiOutlineClose } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Button } from "../../../components/ui/button";
import { IPost } from "../../../../interfaces/community";
import Image from "next/image";
import { Input } from "../../../components/ui/input";
import { format } from "date-fns";
import { useState } from "react";

export const Post = ({ fullname, body, datepublished }: IPost) => {
	const [addComent, setAddComment] = useState(false);
	const [edit, setEdit] = useState(false);

	return (
		<div className='flex flex-col gap-2 bg-secondary-light rounded-xl p-6 text-white'>
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
						<span className='text-primary'>{fullname}</span>
						<span className='text-sm font-medium'>
							{format(new Date(datepublished), "dd-MM-yyyy")}
						</span>
					</p>
				</div>

				{edit ? (
					<AiOutlineClose
						className='text-gray-400 cursor-pointer'
						role='button'
						tabIndex={0}
						data-testid='cancel-edit'
						onClick={() => setEdit(false)}
					/>
				) : (
					<BsPencil
						className='text-gray-400 cursor-pointer'
						role='button'
						tabIndex={0}
						data-testid='edit-post'
						onClick={() => setEdit(true)}
					/>
				)}
			</div>

			{edit ? (
				<Input variant='outlined' defaultValue={body} />
			) : (
				<p className='font-normal w-[80%]'>{body}</p>
			)}

			<Button
				variant='text'
				className='text-sm text-gray-400 justify-start w-24'
				onClick={() => setAddComment(!addComent)}
				data-testid='add-comment'
				role='button'
			>
				Add comment
			</Button>
			{addComent && (
				<Input
					variant='outlined'
					data-testid='add-comment-input'
					className='focus-visible:ring-none'
					placeholder='Write your comment here...'
				/>
			)}
		</div>
	);
};
