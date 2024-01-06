import { montserrat, poppins } from "../../../../components";

import { ICommunity } from "../../../../../interfaces/community";
import Image from "next/image";
import { Post } from "../Post";

const CommunityScreen = (community: ICommunity) => {
	const { displayname, description, posts } = community;
	return (
		<section className={`${montserrat.className} bg-secondary-dark p-6`}>
			<header className='workout flex flex-col grid-cols-2 gap-8 bg-secondary-light rounded-xl p-6'>
				<div className='flex flex-row gap-8 items-center justify-start'>
					<Image
						className='rounded-full border-4 border-white'
						src='https://i.pravatar.cc/300'
						alt='fortys'
						width={128}
						height={128}
					/>
					<div>
						<h2
							className={`${poppins.className} font-bold text-3xl  text-primary`}
						>
							{displayname}
						</h2>
						<p className='text-xl text-surface-light'>by Personal Trainer</p>
					</div>
				</div>

				<p className={`text-md col-span-2 text-surface-light`}>{description}</p>
			</header>

			<nav className='my-4 text-surface-light'>
				<ul className='flex gap-4 font-medium text-lg'>
					<li className='border-b border-primary'>Posts</li>
					<li>Pinned</li>
				</ul>
			</nav>

			<div className='flex flex-col gap-4'>
				{posts?.map((post, index) => <Post key={index} {...post} />)}
			</div>
		</section>
	);
};

export default CommunityScreen;
