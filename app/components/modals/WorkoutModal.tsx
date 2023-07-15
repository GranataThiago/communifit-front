"use client"
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal'
import { useCallback } from 'react';
import Heading from '../Heading';
import { LabeledInput } from '../Input';
import useWorkoutModal from '../../hooks/modals/useWorkoutModal';

const WorkoutModal = () => {
    const workoutModal = useWorkoutModal();
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
        workoutModal.onClose();
    }, [workoutModal])
  
    const bodyContent = (
      <div className='flex flex-col gap-4'>
        <Heading
          title='Exercise Details'
          subtitle=''
        />
        <LabeledInput
          label="Name"
          variant='outlined'
          name='name'
          type='text'
        />
  
        <LabeledInput 
          name="quantity"
          type="text"
          label="Sets/Reps"
          variant='outlined'
        />
      </div>
    );
  
    const footerContent = (
      <div>
        No habria
      </div>
    )

  return (
    <Modal 
    disabled={isLoading}
    isOpen={workoutModal.isOpen}
    title="Workout"
    actionLabel='Continuar'
    onClose={workoutModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}
    />
  )
}

export default WorkoutModal