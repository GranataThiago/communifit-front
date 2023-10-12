import React from "react";
import { BsInfo, BsPencil } from "react-icons/bs";

export const Material = () => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between items-center '>
				<div className='flex gap-2 items-center'>
					<BsInfo className='text-white bg-primary rounded-full text-4xl'></BsInfo>
					<p className='font-bold text-lg flex flex-col'>
						New Material: DB Bulgarian Squat
						<span className='text-gray-400 text-sm font-medium'>
							2 days ago
						</span>
					</p>
				</div>

				<BsPencil className='text-gray-400'></BsPencil>
			</div>
			<p className='text-sm text-gray-400'>Add comment</p>
		</div>
	);
};
