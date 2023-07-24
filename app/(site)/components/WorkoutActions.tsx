"use client"
import React from 'react'
import { Button } from '../../components'
import { BsPencil } from 'react-icons/bs'
import apiInstance from '../../api'

export const WorkoutActions = () => {

    /* TODO: Create action so it updates the plan */
    const onWorkoutUpdated = () => {
        const newWorkoutPlan = {

        }

        apiInstance.post('/plan/update', {
            newWorkoutPlan
        });
    }

    return (
        <div>
            <Button variant='filled' onClick={onWorkoutUpdated}>
                <span className='flex items-center justify-center gap-3'>
                    <BsPencil />
                    Update
                </span>
            </Button>
        </div>
    )
}
