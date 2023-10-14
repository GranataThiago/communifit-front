"use client";
import useInviteModal from "../../../hooks/modals/useInviteModal";
import React, { useEffect } from "react";
import apiInstance from "../../../api";
import { useUserContext } from "../../../../context/UserContext";
import { BsEnvelope, BsPencil } from "react-icons/bs";

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
      { headers: { token } },
    );
    inviteModal.setLink(data.link);
    console.log(data.link);
  };

  return (
    <div className="flex gap-2">
      <div
        role="button"
        aria-label="Crear invitación para ingresar a comunidad"
      >
        <BsEnvelope
          className="text-gray-400 text-lg"
          onClick={inviteModal.onOpen}
        />
      </div>
      <div role="button" aria-label="Editar perfil de la comunidad">
        <BsPencil className="text-gray-400 text-lg" />
      </div>
    </div>
  );
};

export default CommunityActions;
