"use client";

import ModalForm  from "./ModalForm";
import React, { useEffect, useState } from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import useInviteModal from "../../hooks/modals/useInviteModal";
import { useUserContext } from "../../../context/UserContext";
import { getInvitationLink } from "../../../services/community/create-community";

interface IInviteModal {
	Icon: any;
	community: {
		name: string;
		displayname:string;
	}
}

const InviteModal = ({Icon, community}:IInviteModal) => {
	const {name, displayname} = community;
	const [clickOnSubmit, setClickOnSubmit] = useState(false);
	const { token } = useUserContext();
  	const inviteModal = useInviteModal();
	const form = useForm({
		defaultValues: {
			link: null,
		},
	});

	const [labels, setLabels] = useState([
		{
		  key: 'link',
		  label: "Link is valid for one person only",
		  className: "font-light text-neutral-500 mt-2",
		  input: {
			variant: "outlined",
			id: "link",
			type: "text",
			fieldName: "link",
			value: form.getValues("link"), 
		  },
		},
	  ]);

	const onLinkCopied = () => {
		setClickOnSubmit(true);
		navigator.clipboard.writeText(inviteModal.link);
	};

	const onInviteModalOpen = async () => {
		if (!token) return;
		const response = await getInvitationLink({ token, communityName: name });
	
		if (!response || !response.ok) return;

		inviteModal.setLink(response.link);

	   setLabels((prevLabels: any) => [
			{
			...prevLabels[0],
			input: {
				...prevLabels[0].input,
				value: response.link,
			},
			},
		]);
	  };

	useEffect(() => {
		if (setClickOnSubmit) {
			setTimeout(() => {
				setClickOnSubmit(false);
			}, 7000);
		}
	}, [clickOnSubmit]);

	return (
		<>
			<ModalForm
				Title='Invite'
				Description={`Invite someone to ${displayname}`}
				Footer={`${clickOnSubmit ? "Copied to clipboard" : "Copy"}`}
				Labels={labels}
				Form={form}
				ActionTrigger={<Icon onClick={onInviteModalOpen}/>}
				Icon={clickOnSubmit ? <AiFillCheckCircle /> :null}
				OnSubmit={() => onLinkCopied()}
			/>
		</>
	);
};

export default InviteModal;
