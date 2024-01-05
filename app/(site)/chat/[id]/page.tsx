import React from "react";
import Link from "next/link";
import Image from "next/image";
import Message from "../components/Message/Message";
import { BsArrowLeftShort, BsCameraVideo, BsTelephone } from "react-icons/bs";
import { poppins } from "../../../components";
import { Input } from "../../../components/ui/input";

export default function ChatPage() {
  return (
    <section className="p-6 h-screen bg-secondary-dark">
      <div className="pb-2 border-b border-gray-200 flex items-center gap-4">
        <Link href={"/chat"} className="text-surface-dark">
          <BsArrowLeftShort />
        </Link>

        <div className="flex flex-row gap-2">
          <Image
            className="rounded-full w-12 h-12"
            src="https://i.pravatar.cc/300"
            alt="fortys"
            width={32}
            height={32}
          />
          <div>
            <p className={`${poppins.className} text-surface-light font-bold`}>Emanuel Antón</p>
            <p className="text-primary">Trainer</p>
          </div>
        </div>

        <div className="ml-auto flex gap-4 text-gray-400">
          <BsCameraVideo />
          <BsTelephone />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2 overflow-y-scroll h-full">
        <Message message="Hey! Welcome to the community" sender={false} />
        <Message
          message="Your workout plan is currently in development, lmk if you need something"
          sender={false}
        />
        <Message message="Hi! Glad to be here" sender={true} />
        <Message
          message="Ill be looking arround and let you know if I need something"
          sender={true}
        />
      </div>

      <div className="fixed bottom-10 right-0 px-6 w-full h-24 flex justify-center items-center">
        <Input variant="filled" type="text" placeholder="Type here" className="w-full p-2" />
      </div>
    </section>
  );
}
