"use client"
import React from 'react'
import { BsEnvelope, BsPencil } from 'react-icons/bs'
import useInviteModal from '../../../hooks/modals/useInviteModal';

const CommunityActions = () => {

    const inviteModal = useInviteModal();

    return (
        <div className='flex gap-2'>
            <BsEnvelope className='text-gray-400 text-lg' onClick={inviteModal.onOpen}/>
            <BsPencil className='text-gray-400 text-lg'></BsPencil>
        </div>
    )
}

export default CommunityActions