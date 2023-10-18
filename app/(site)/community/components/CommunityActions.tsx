"use client";
import React, { useEffect } from "react";
import { BsEnvelope, BsPencil } from "react-icons/bs";
import { getInvitationLink } from "../../../../services/community/create-community";
import useInviteModal from "../../../hooks/modals/useInviteModal";
import { useUserContext } from "../../../../context/UserContext";
import { Community } from "../../../../interfaces/community";
import InviteModal from "../../../components/modals/InviteModal";


const CommunityActions = ({ name, displayname }: Community) => {
  return (
    <div className="flex gap-2" data-testid="data">
      <InviteModal 
        Icon={BsEnvelope}
        community={{name, displayname}}
      />
      <BsPencil className="text-gray-400 text-lg"></BsPencil>
    </div>
  );
};

export default CommunityActions;
