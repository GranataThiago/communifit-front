"use client";
import React, { useEffect } from "react";
import { BsEnvelope, BsPencil } from "react-icons/bs";
import useInviteModal from "../../../../hooks/modals/useInviteModal";
import apiInstance from "../../../../api";
import { useUserContext } from "../../../../../context/UserContext";

const CommunityActions = ({ name }: { name: string }) => {
	const { token } = useUserContext();
	const inviteModal = useInviteModal();

	useEffect(() => {
		inviteModal.setName(name);
		if (token) getInvitationLink();
	}, [token]);

	const getInvitationLink = async () => {
		const { data } = await apiInstance.post(
			"/communities/invitation",
			{
				name,
			},
			{ headers: { token } }
		);
		inviteModal.setLink(data.link);
		console.log(data.link);
	};

	return (
		<div className='flex gap-2'>
			<BsEnvelope
				className='text-gray-400 text-lg'
				onClick={inviteModal.onOpen}
			/>
			<BsPencil className='text-gray-400 text-lg'></BsPencil>
		</div>
	);
};

export default CommunityActions;
