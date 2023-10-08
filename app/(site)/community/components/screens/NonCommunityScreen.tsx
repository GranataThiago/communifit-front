"use client"

import React from 'react'
import { useUserContext } from "../../../../../context/UserContext"
import { NonCommunityTrainerScreen } from './NonCommunityTrainerScreen';
import { NonCommunityMemberScreen } from './NonCommunityMemberScreen';

export const NonCommunityScreen = () => {

  const { user } = useUserContext();

  return (
    <>
      {
        user?.type === "trainer"
        ? <NonCommunityTrainerScreen />
        /* @ts-expect-error Server Component */
        : <NonCommunityMemberScreen />
      }
    </>
  )
}
