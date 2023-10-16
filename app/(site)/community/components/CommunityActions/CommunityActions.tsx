"use client";
import React, { useEffect } from "react";
import { BsEnvelope, BsPencil } from "react-icons/bs";
import useInviteModal from "../../../../hooks/modals/useInviteModal";
import apiInstance from "../../../../api";
import { useUserContext } from "../../../../../context/UserContext";
import { getInvitationLink } from "../../../../../services/community/create-community";
import { Community } from "../../../../../interfaces/community";

const CommunityActions = ({ name, displayname }: Community) => {
  const { token } = useUserContext();
  const inviteModal = useInviteModal();

  const onInviteModalOpen = async () => {
    if (!token) return;
    console.log({ name, displayname });
    const response = await getInvitationLink({ token, communityName: name });

    if (!response || !response.ok) return;

    inviteModal.setLink(response.link);
    inviteModal.setName(displayname);
    inviteModal.onOpen();
  };

  return (
    <div className="flex gap-2" data-testid="data">
      <BsEnvelope
        data-testid="envelope-icon"
        className="text-gray-400 text-lg"
        onClick={onInviteModalOpen}
      />
      <BsPencil className="text-gray-400 text-lg"></BsPencil>
    </div>
  );
};

export default CommunityActions;
