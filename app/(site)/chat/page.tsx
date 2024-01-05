import { ChatCard } from "./components/ChatCard/ChatCard";
import { Input } from "../../components/ui/input";
import React from "react";
import { poppins } from "../../components/fonts";
import { FaSearch } from "react-icons/fa";

const getChats = async () => {
	const chats = [
		{
			user: "James Lopez",
			message: "Here's your new weekly workout, hope you like it",
		},
		{
			user: "Emanuel Antón",
			message: "Thanks!",
		},
		{
			user: "Ignacio Fortys",
			message: "I just got a new PR in Bench Press!",
		},
	];
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return chats;
};

export default async function ChatListPage() {
	const chats = await getChats();

	return (
		<section
			className={`text-white h-screen ${poppins.className}`}
			data-testid='section'
		>
			<div className='px-4 py-8 bg-secondary'>
				<Input
					icon={<FaSearch className='text-black' />}
					variant='filled'
					type='text'
					placeholder='Search messages...'
					className='bg-white rounded-lg text-black placeholder:text-black placeholder:font-normal'
				/>
			</div>

			<div className='rounded-t-lg h-full p-4 flex flex-col gap-4'>
				{chats.map((chat) => (
					<ChatCard key={chat.user} {...chat} />
				))}
			</div>
		</section>
	);
}
