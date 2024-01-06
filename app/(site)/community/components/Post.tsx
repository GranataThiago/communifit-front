import { BsPencil } from "react-icons/bs";
import { IPost } from "../../../../interfaces/community";
import Image from "next/image";
import { format } from "date-fns";

export const Post = ({ fullname, body, datepublished }: IPost) => {
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

				<BsPencil />
			</div>

			<p className='font-normal'>{body}</p>
			<p className='text-sm '>Add comment</p>
		</div>
	);
};
