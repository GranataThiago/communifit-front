"use client"
import React, { useState } from 'react'
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal'
import { useCallback } from 'react';
import Heading from '../Heading';
import { LabeledInput, LabeledTextarea } from '../Input';
import useWorkoutModal from '../../hooks/modals/useWorkoutModal';

const WorkoutModal = () => {
    const workoutModal = useWorkoutModal();
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const {
      register,
      handleSubmit,
      formState: {
          errors,
      },
      control
    } = useForm<FieldValues>({
      defaultValues: {
          name: '',
          sets: '',
          observations: '',
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
        
        <Controller 
          name='name'
          control={control}
          render={({field}) => (
            <LabeledInput
              {...field}
              ref={null}
              label="Name"
              variant='outlined'
              type='text'
            />
          )}
        />

        <Controller 
          name='quantity'
          control={control}
          render={({field}) => (
            <LabeledInput
              {...field}
              ref={null}
              label="Sets/Reps"
              variant='outlined'
              type='text'
            />
          )}
        />
        
        <Controller 
          name='observations'
          control={control}
          render={({field}) => (
            <LabeledTextarea 
            {...field}
            ref={null}
            label='Observations'
            variant='outlined'
          />
          )}
        />
      </div>
    );

  return (
    <Modal 
    disabled={isLoading}
    isOpen={workoutModal.isOpen}
    title="Workout"
    actionLabel='Add'
    onClose={workoutModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    />
  )
}

export default WorkoutModal