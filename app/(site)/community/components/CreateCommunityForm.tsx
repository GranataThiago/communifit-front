"use client"
import React, {useEffect, useState} from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Input, LabeledInput, LabeledTextarea } from '../../../components/Input';
import { Button } from '../../../components/Button';
import apiInstance from '../../../api';
import { useUserContext } from '../../../../context/UserContext';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { montserrat } from '../../../components/fonts';
import { renderToast } from '../../../providers/ToasterProvider';
import { AiFillCloseCircle } from 'react-icons/ai';

interface CreateCommunity{
    name?: string;
    displayName: string;
    description: string;
    adminId?: string;
}

const CreateCommunityForm = () => {

    const router = useRouter();
    const [ cookies ] = useCookies(['token']);
    const { user } = useUserContext();
    const { control, watch, setValue, formState, handleSubmit } = useForm<CreateCommunity>();
    
    const displayName = watch('displayName')
    
    useEffect(() => {
        if(!displayName || formState.touchedFields.displayName) return;
        setValue("name", displayName)
    }, [displayName, setValue])

    const onCommunityCreated = async(formData: CreateCommunity) => {
        const newCommunity = {...formData, adminId: user?._id}
        const { data, status } = await apiInstance.post('/communities', newCommunity, { headers: { token: cookies.token }})
        if(!data.ok){
            renderToast("There has been an error while creating your community", <AiFillCloseCircle />)
            return;
        }

        // Backend converts the name to lowercase, so we should do the same
        router.push(formData.name?.toLowerCase() as string)
    }

    return (
        <section>
            <form className={`flex flex-col items-center justify-center gap-6 ${montserrat.className}`} onSubmit={handleSubmit(onCommunityCreated)}>
                <h1 className='text-2xl font-bold'><span className='text-primary'>Create</span> your community</h1>
                <Controller
                    control={control}
                    name='displayName'
                    render={({field}) => (
                        <LabeledInput
                            {...field}
                            ref={null}
                            label='Community Name'
                            type='text'
                            variant='outlined'
                        ></LabeledInput>
                    )}
                />

                <div className='flex flex-col'>
                    <label htmlFor="name">Community URL</label>
                    <div className='flex items-center justify-center'>
                        <div className='bg-gray-100 p-2'>
                            <p>www.communifit.com/</p>
                        </div>
                        <Controller
                            control={control}
                            name='name'
                            render={({field}) => (
                                <Input
                                    {...field}
                                    type='text'
                                    variant='outlined'
                                ></Input>
                            )}
                        />
                    </div>
                </div>


                <Controller
                    control={control}
                    name='description'
                    render={({field}) => (
                        <LabeledTextarea
                            {...field}
                            ref={null}
                            label='Description'
                            variant='outlined'
                        ></LabeledTextarea>
                    )}
                />

                <Button className='mt-2' variant='filled' type='submit'>Create</Button>
            </form>
        </section>
    )
}

export default CreateCommunityForm