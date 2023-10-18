"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BsHouseDoor,
  BsChat,
  BsSearch,
  BsPerson,
  BsPeople,
} from "react-icons/bs";
import { useUserContext } from "../../../context/UserContext";

export const Menu = () => {
  const pathname = usePathname();
  const { user } = useUserContext();

  return (
    <nav
      className="w-full py-4 px-6 fixed bottom-0 right-0 bg-white z-50"
      data-testid="nav"
    >
      <ul className="w-full flex justify-between text-xl" data-testid="ul">
        <li
          className={`hover:text-gray-700 hover:cursor-pointer ${
            pathname === "/" ? "text-primary" : "text-black"
          }`}
        >
          <Link href={"/"}>
            <BsHouseDoor></BsHouseDoor>
          </Link>
        </li>
        <li
          className={`hover:text-gray-700 hover:cursor-pointer ${
            pathname === "/chat" ? "text-primary" : "text-black"
          }`}
        >
          <Link href={"/chat"}>
            <BsChat></BsChat>
          </Link>
        </li>
        <li
          className={`hover:text-gray-700 hover:cursor-pointer ${
            pathname === "/community" ? "text-primary" : "text-black"
          }`}
        >
          <Link
            href={
              user?.community?.name
                ? `/community/${user.community.name}`
                : "/community"
            }
          >
            {user?.community?.name ? <BsPeople /> : <BsSearch />}
          </Link>
        </li>
        <li
          className={`hover:text-gray-700 hover:cursor-pointer ${
            pathname === "/profile" ? "text-primary" : "text-black"
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
