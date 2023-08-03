"use client"
import React from 'react'
import { Button } from '../../components'
import { BsPencil } from 'react-icons/bs'
import apiInstance from '../../api'
import { usePlanContext } from '../../../context/CreatePlanContext/PlanContext'

export const WorkoutActions = () => {

    const { workout } = usePlanContext();

    /* TODO: Create action so it updates the plan */
    const onWorkoutUpdated = () => {
        const newWorkoutPlan = {
            exercises: workout,
            userId: ''
        }
        console.log(newWorkoutPlan)
        // apiInstance.post('/plans', {
        //     newWorkoutPlan
        // });
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
