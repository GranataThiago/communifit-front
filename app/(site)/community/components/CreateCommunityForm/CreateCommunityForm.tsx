"use client"
import React, {useEffect} from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { montserrat } from '../../../../components/fonts';
import { renderToast } from '../../../../providers/ToasterProvider';
import { AiFillCloseCircle } from 'react-icons/ai';
import { createCommunity } from '../../../../../services/community/create-community';
import { CreateCommunity } from '../../../../../interfaces/services/community/create-community';
import { useUserContext } from '../../../../../context/UserContext';
import { Button, Input, LabeledInput, LabeledTextarea } from '../../../../components';


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
        const communityData = await createCommunity({ token: cookies.token, newCommunity });
        if(!communityData || !communityData.ok){
            renderToast("There has been an error while creating your community", <AiFillCloseCircle />)
            return;
        }

        // Backend converts the name to lowercase, so we should do the same
        // Ideally back would return the createdCommunity in the response object
        window.location.href = `/community/${formData.name?.toLowerCase()}`
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