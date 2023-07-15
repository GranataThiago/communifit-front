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
        title='¡Bienvenido nuevamente!'
        subtitle='¡Inicie sesión en su cuenta!'
      />
      <LabeledInput
        label="Email"
        variant='outlined'
        name='email'
        type='text'
      />

      <LabeledInput 
        name="password"
        type="password"
        label="Contraseña"
        variant='outlined'
      />
    </div>
  );

  const footerContent = (
    <div className=' flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        variant='outlined'
      >
        Buttoansda
      </Button>

      <Button
        variant='outlined'
      >
        asdsadsa
      </Button>

      <div 
        className='
          text-neutral-500
          text-center
          mt-4
          font-light
        '
      >
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>
            ¿Primera vez utilizando Airbnb?
          </div>

          <div 
            onClick={toggle}
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
          >
            Crear una cuenta
          </div>
          
        </div>
      </div>
    </div>
  )

  return (
    <Modal 
        disabled={isLoading}
        isOpen={inviteModal.isOpen}
        title="Iniciar sesión"
        actionLabel='Continuar'
        onClose={inviteModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
  )
}

export default InviteModal;
