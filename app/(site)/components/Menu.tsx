"use client";

import {
  BsChat,
  BsHouseDoor,
  BsPeople,
  BsPerson,
  BsSearch,
} from "react-icons/bs";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useUserContext } from "../../../context/UserContext";

export const Menu = () => {
  const pathname = usePathname();
  const { user } = useUserContext();

  return (
		<nav
			className='fixed bottom-0 left-0 z-50 w-full h-100 bg-secondary-light'
			data-testid='nav'
		>
			<ul
				className='w-full flex justify-around h-12 text-xl items-center'
				data-testid='ul'
			>
				<li
					className={`hover:text-gray-700 hover:cursor-pointer ${
						pathname === "/" ? "text-primary" : "text-surface-light"
					}`}
				>
					<Link href={"/"}>
						<BsHouseDoor></BsHouseDoor>
					</Link>
				</li>
				<li
					className={`hover:text-gray-700 hover:cursor-pointer ${
						pathname.includes("/chat") ? "text-primary" : "text-surface-light"
					}`}
				>
					<Link href={"/chat"}>
						<BsChat></BsChat>
					</Link>
				</li>
				<li
					className={`hover:text-gray-700 hover:cursor-pointer ${
						pathname.includes("/community")
							? "text-primary"
							: "text-surface-light"
					}`}
				>
					<Link href={"/community"}>
						{user?.community?.name ? <BsPeople /> : <BsSearch />}
					</Link>
				</li>
				<li
					className={`hover:text-gray-700 hover:cursor-pointer ${
						pathname.includes("/profile")
							? "text-primary"
							: "text-surface-light"
					}`}
				>
					<Link href={"/profile"}>
						<BsPerson></BsPerson>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
