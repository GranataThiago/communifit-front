import { ICommunity, IPost } from "../../../../../interfaces/community";
import { montserrat, poppins } from "../../../../components";

import CommunityScreenNav from "../CommunityScreenNav";
import { FaPencilAlt } from "react-icons/fa";
import { IMinimumUserInfo } from "../../../../../interfaces/user";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../Post";

const CommunityScreen = ({
	community,
	user,
}: {
	community: ICommunity;
	user: IMinimumUserInfo;
}) => {
	const { displayname, description, posts, name } = community;
	return (
		<section className={`${montserrat.className} bg-secondary-dark p-6 mb-10`}>
			<header className='relative workout flex flex-col grid-cols-2 gap-8 bg-secondary-light rounded-xl p-6'>
				<div className='flex flex-row gap-8 items-center justify-start'>
					<Image
						className='rounded-full border-4 border-white'
						src='https://i.pravatar.cc/300'
						alt='fortys'
						width={100}
						height={100}
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
			</header>

			<CommunityScreenNav />

			{posts?.length > 0 ? (
				<div className='flex flex-col gap-4'>
					{posts.map((post: IPost, index: any) => (
						<Post key={index} {...post} />
					))}
				</div>
			) : (
				<div className='text-black text-center flex flex-col mt-24 gap-4 text-2xl'>
					<span className='text-5xl'>:(</span>
					<p>Looks like there are no post here...</p>
				</div>
			)}
		</section>
	);
};

export default CommunityScreen;
