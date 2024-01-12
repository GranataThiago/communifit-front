import { montserrat, poppins } from "../../../../components";

import { FaPencilAlt } from "react-icons/fa";
import { ICommunity } from "../../../../../interfaces/community";
import { IMinimumUserInfo } from "../../../../../interfaces/user";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../Post";
import CommunityActions from "../CommunityActions";

const CommunityScreen = ({
	community,
	user,
}: {
	community: ICommunity;
	user: IMinimumUserInfo;
}) => {
	const { displayname, description, posts, name } = community;
	return (
		<section className={`${montserrat.className} bg-secondary-dark p-6`}>
			<header className='relative workout flex flex-col grid-cols-2 gap-8 bg-secondary-light rounded-xl p-6'>
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
				{user.type === "trainer" && (
					<Link
						href={`/community/${name}/edit`}
						className='absolute text-white right-2 top-2'
					>
						<FaPencilAlt />
					</Link>
				)}
				<CommunityActions {...community} />
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
