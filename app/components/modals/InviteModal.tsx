'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useInviteModal from '../../hooks/modals/useInviteModal';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { Button } from '../Button';
import { LabeledInput } from '../Input';
import Heading from '../Heading';

const InviteModal = () => {
  const router = useRouter();
  const inviteModal = useInviteModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: {
        errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
        email: '',
        password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

  }

  const toggle = useCallback(() => {
    inviteModal.onClose();
  }, [inviteModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Invite someone to Gorillas'
        subtitle='Link is valid for one person only'
      />
      <LabeledInput
        label="Community Link"
        variant='outlined'
        name='link'
        type='text'
      />

    </div>
  );

  return (
    <Modal 
        disabled={isLoading}
        isOpen={inviteModal.isOpen}
        title="Invite"
        actionLabel='Copy'
        onClose={inviteModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
    />
  )
}

export default InviteModal;
