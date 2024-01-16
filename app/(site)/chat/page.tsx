import { ChatCard } from "./components/ChatCard/ChatCard";
import { Input } from "../../components/ui/input";
import React from "react";
import { montserrat } from "../../components/fonts";

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

	return chats;
};

export default async function ChatListPage() {
	const chats = await getChats();

	return (
		<section
			className={`bg-secondary-dark h-screen ${montserrat.className}`}
			data-testid='section'
		>
			<div className="px-4 py-8">
				<Input variant='filled' type='text' placeholder='Search messages...' />
			</div>

			<div className='rounded-t-lg h-full p-4 flex flex-col gap-4'>
				{chats.map((chat) => (
					<ChatCard key={chat.user} {...chat} />
				))}
			</div>
		</section>
	);
}
