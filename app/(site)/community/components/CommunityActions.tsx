"use client";
import React from "react";
import { BsEnvelope, BsPencil } from "react-icons/bs";
import { ICommunity } from "../../../../interfaces/community";
import InviteModal from "../../../components/modals/InviteModal";


const CommunityActions = ({ name, displayname }: ICommunity) => {
  return (
    <div className="flex gap-2 text-surface-light" data-testid="data">
      <InviteModal 
        Icon={BsEnvelope}
        IconAriaLabel={`Invite someone to ${displayname}`}
        community={{name, displayname}}
      />
      <BsPencil className="text-gray-400 text-lg"></BsPencil>
    </div>
  );
};

export default CommunityActions;
