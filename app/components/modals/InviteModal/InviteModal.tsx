"use client";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import useInviteModal from "../../../hooks/modals/useInviteModal";
import Modal from "../Modal";
import Heading from "../../Heading/Heading";
import { renderToast } from "../../../providers/ToasterProvider";

const InviteModal = () => {
	const inviteModal = useInviteModal();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
	};

	const toggle = useCallback(() => {
		inviteModal.onClose();
	}, [inviteModal]);

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading
				title='Invite someone to Gorillas'
				subtitle='Link is valid for one person only'
			/>

			<input
				type='text'
				aria-label='Copied to clipboard'
				value={inviteModal.link}
				disabled
			/>
		</div>
	);

	const onLinkCopied = () => {
		renderToast("Copied to clipboard", <AiFillCheckCircle />);
		navigator.clipboard.writeText(inviteModal.link);
	};

	return (
		<Modal
			disabled={isLoading}
			isOpen={inviteModal.isOpen}
			title='Invite'
			actionLabel='Copy'
			onClose={inviteModal.onClose}
			onSubmit={onLinkCopied}
			body={bodyContent}
		/>
	);
};

export default InviteModal;
