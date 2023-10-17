"use client";

import ModalForm, { LabelProps } from "../ModalForm";
import React, { useEffect, useState } from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import Heading from "../../Heading/Heading";
import { renderToast } from "../../../providers/ToasterProvider";
import { useForm } from "react-hook-form";
import useInviteModal from "../../../hooks/modals/useInviteModal";

const InviteModal = () => {
	const [clickOnSubmit, setClickOnSubmit] = useState(false);
	const inviteModal = useInviteModal();
	const form = useForm({
		defaultValues: {
			link: "",
		},
	});

	const labels: LabelProps[] = [
		{
			label: "Link is valid for one person only",
			className: "font-light text-neutral-500 mt-2",
			input: {
				variant: "outlined",
				id: "link",
				type: "text",
				fieldName: "link",
				value: `${inviteModal.link}`,
			},
		},
	];

	const onLinkCopied = () => {
		setClickOnSubmit(true);

		navigator.clipboard.writeText(inviteModal.link);
	};

	useEffect(() => {
		if (setClickOnSubmit) {
			setTimeout(() => {
				setClickOnSubmit(false);
			}, 7000);
		}
	}, [clickOnSubmit]);

	return (
		<ModalForm
			Title='Invite'
			Description='Invite someone to Gorillas'
			Footer={`${clickOnSubmit ? "Copied to clipboard" : "Copy"}`}
			Labels={labels}
			Form={form}
			TextButton='Invite'
			Icon={clickOnSubmit ? <AiFillCheckCircle /> : null}
			OnSubmit={() => onLinkCopied()}
		/>
	);
};

export default InviteModal;
